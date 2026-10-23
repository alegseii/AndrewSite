// Тренажёр слов: вопросы строятся автоматически из words.js (A1) и words-a2.js (A2).
// Файл подключается ПОСЛЕ words.js и words-a2.js.
// buildWordsQuiz("A1" | "A2") возвращает { article, plural, verbs, translate } — четыре массива вопросов
// в формате движка: { q, opts: [{ txt, correct, exp }, ...] }.
// Вопросы не хранятся в файле: чтобы они пополнялись, достаточно добавить слова в words.js / words-a2.js.

function buildWordsQuiz(level) {
    const source = level === "A2"
        ? (typeof wordsDataA2 !== "undefined" ? wordsDataA2 : [])
        : (typeof wordsData !== "undefined" ? wordsData : []);

    // ---------- утилиты ----------
    const rnd = n => Math.floor(Math.random() * n);

    function shuffle(arr) {
        const r = arr.slice();
        for (let i = r.length - 1; i > 0; i--) {
            const j = rnd(i + 1);
            [r[i], r[j]] = [r[j], r[i]];
        }
        return r;
    }

    // n случайных элементов, для которых ok(x) истинно, без повторов по ключу key(x)
    function pickDistinct(list, n, ok, key) {
        const out = [];
        const used = new Set();
        for (const x of shuffle(list)) {
            if (out.length === n) break;
            const k = key(x);
            if (ok(x) && !used.has(k)) {
                used.add(k);
                out.push(x);
            }
        }
        return out;
    }

    // убрать дубли в исходных данных (одно слово могло попасть дважды)
    const seen = new Set();
    const words = source.filter(w => {
        const k = w.category + "|" + w.de;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });

    // ---------- существительные ----------
    function parseNoun(w) {
        if (w.category !== "Nomen") return null;
        const m = /^(der|die|das) ([^\/(),]+)$/.exec(w.de.trim());
        return m ? { art: m[1], noun: m[2].trim() } : null;
    }

    // умлаут на последней гласной основы: Anzug → Anzüg, Haus → Häus, Arzt → Ärzt
    function umlautize(word) {
        const re = /(au|Au|[aouAOU])(?!.*(?:au|Au|[aouAOU]))/;
        const m = re.exec(word);
        if (!m) return null;
        const map = { au: "äu", Au: "Äu", a: "ä", A: "Ä", o: "ö", O: "Ö", u: "ü", U: "Ü" };
        return word.slice(0, m.index) + map[m[1]] + word.slice(m.index + m[1].length);
    }

    const ENDINGS = { "-": "", "-e": "e", "-n": "n", "-en": "en", "-nen": "nen", "-er": "er", "-s": "s", "-se": "se" };

    // Форма мн. числа по маркеру из словаря; null, если маркер нестандартный
    function makePlural(noun, marker) {
        if (!marker || marker === "Sg." || marker === "Pl." || marker === "—") return null;
        if (/^[A-ZÄÖÜ]/.test(marker)) return marker;          // готовая форма (Studien)
        const base = marker.replace(/^[¨"]/, "");
        const hasUmlaut = base !== marker;
        if (!(base in ENDINGS)) return null;                   // -/-nen, -e/-s и т. п.
        let stem = noun;
        if (hasUmlaut) {
            stem = umlautize(noun);
            if (!stem) return null;
        }
        return stem + ENDINGS[base];
    }

    const prettyMarker = m => m.replace(/^"/, "¨");

    const SUFFIX_RULES = [
        { re: /(ung|heit|keit|schaft|tion|sion|tät|ik|ur|in)$/, art: "die" },
        { re: /(chen|lein|ment|um)$/,                           art: "das" },
        { re: /(ling|ismus)$/,                                  art: "der" }
    ];

    // Подсказка по окончанию — только если правило совпало с настоящим артиклем
    function suffixHint(noun, art) {
        const lower = noun.toLowerCase();
        for (const r of SUFFIX_RULES) {
            const m = r.re.exec(lower);
            if (m && r.art === art) return ` Подсказка: слова на -${m[1]} — ${art}.`;
        }
        return "";
    }

    const article = [];
    const plural = [];

    words.forEach(w => {
        const n = parseNoun(w);
        if (!n) return;
        const pl = makePlural(n.noun, w.pl);
        const hint = suffixHint(n.noun, n.art);

        // Какой артикль?
        article.push({
            q: `Какой артикль у слова «${n.noun}» (${w.ru})?`,
            opts: ["der", "die", "das"].map(a => ({
                txt: a,
                correct: a === n.art,
                exp: a === n.art
                    ? `${n.art} ${n.noun} — ${w.ru}.${pl ? " Мн. число: die " + pl + "." : ""}${hint}`
                    : `Правильно: ${n.art} ${n.noun}.${hint}`
            }))
        });

        // Какое множественное число?
        if (pl) {
            const marker = w.pl;
            const hasUmlaut = /^[¨"]/.test(marker);
            const base = marker.replace(/^[¨"]/, "");
            const candidates = [];
            const n0 = n.noun;
            const um = umlautize(n0);
            if (/^[A-ZÄÖÜ]/.test(marker)) {
                // готовая форма (Studien): ошибки строим от типовых окончаний
                ["s", "e", "er"].forEach(k => candidates.push(n0 + k));
            } else {
                // 1) главная типичная ошибка: умлаут есть, а его нет (или наоборот)
                if (hasUmlaut) candidates.push(n0 + ENDINGS[base]);
                else if (um && ["-", "-e", "-er"].includes(base)) candidates.push(um + ENDINGS[base]);

                // 2) правдоподобные ошибки в зависимости от окончания слова
                if (/e$/.test(n0)) {
                    candidates.push(n0, n0 + "s", n0 + "r");
                } else if (/(el|er)$/.test(n0)) {
                    candidates.push(n0 + "n", n0 + "s", n0);
                    if (um) candidates.push(um);
                } else if (/en$/.test(n0)) {
                    candidates.push(n0, n0 + "s");
                    if (um) candidates.push(um);
                } else if (/in$/.test(n0)) {
                    candidates.push(n0 + "nen", n0 + "en", n0 + "s", n0 + "e");
                } else {
                    candidates.push(n0 + "e", n0 + "en", n0 + "er", n0 + "s", n0 + "n");
                    if (um) candidates.push(um + "e", um + "er");
                }
            }
            const wrong = [];
            for (const c of candidates) {
                if (wrong.length === 2) break;
                if (c !== pl && !wrong.includes(c)) wrong.push(c);
            }
            if (wrong.length === 2) {
                const opts = [{ txt: "die " + pl, correct: true,
                    exp: `${n.art} ${n.noun} — die ${pl} (тип ${prettyMarker(marker)}).` }];
                wrong.forEach(c => opts.push({ txt: "die " + c, correct: false,
                    exp: `Правильно: die ${pl} (тип ${prettyMarker(marker)}).` }));
                plural.push({
                    q: `Какая форма множественного числа у «${n.art} ${n.noun}» (${w.ru})?`,
                    opts: opts
                });
            }
        }
    });

    // ---------- глаголы ----------
    function parseVerb(w) {
        if (w.category !== "Verben") return null;
        if (/[\/( ]/.test(w.de) || /\//.test((w.prat || "") + (w.perf || ""))) return null;
        const p = (w.prat || "").split(" ");
        const f = (w.perf || "").split(" ");
        if (p.length < 2 || p.length > 3 || p[0] !== "ich") return null;
        if (f.length !== 3 || f[0] !== "ich" || !["habe", "bin"].includes(f[1])) return null;
        return {
            inf: w.de, ru: w.ru,
            prat: w.prat, perf: w.perf,
            pForm: p[1], prefix: p[2] || "",
            aux: f[1], part: f[2]
        };
    }

    const verbList = words.map(parseVerb).filter(Boolean);
    const verbs = [];
    const REGIONAL_AUX = ["stehen", "sitzen", "liegen"];   // на юге допустимо и sein, поэтому подмену aux не используем

    function fakePrateritum(v) {
        if (v.pForm.endsWith("te")) {
            return { txt: `ich ${v.pForm}n${v.prefix ? " " + v.prefix : ""}`,
                     exp: `У ich в Präteritum нет окончания -n. Правильно: ${v.prat}.` };
        }
        const base = v.prefix && v.inf.startsWith(v.prefix) ? v.inf.slice(v.prefix.length) : v.inf;
        const stem = base.replace(/e?n$/, "");
        const txt = `ich ${stem}te${v.prefix ? " " + v.prefix : ""}`;
        return { txt: txt,
                 exp: `'${v.inf}' — сильный глагол, его форму нужно знать. Правильно: ${v.prat}.` };
    }

    function fakeParticiple(v) {
        let p = v.part;
        if (p.endsWith("t")) p = p.slice(0, -1) + "en";
        else if (p.endsWith("en")) p = p.slice(0, -2) + "t";
        else p = p + "t";
        return { txt: `ich ${v.aux} ${p}`,
                 exp: `Неверная форма Partizip II. Правильно: ${v.perf}.` };
    }

    function build(correct, correctExp, wrongs, q) {
        const used = new Set([correct]);
        const opts = [{ txt: correct, correct: true, exp: correctExp }];
        wrongs.forEach(w => {
            if (opts.length < 3 && w && !used.has(w.txt)) {
                used.add(w.txt);
                opts.push({ txt: w.txt, correct: false, exp: w.exp });
            }
        });
        return opts.length === 3 ? { q: q, opts: opts } : null;
    }

    verbList.forEach(v => {
        const label = `${v.inf} (${v.ru})`;

        // Präteritum (ich)
        const q1 = build(v.prat, `${v.inf} — ${v.ru}. Präteritum: ${v.prat}.`, [
            fakePrateritum(v),
            { txt: v.perf, exp: `'${v.perf}' — это Perfekt, а в вопросе Präteritum. Правильно: ${v.prat}.` }
        ], `Какая форма Präteritum (ich) у глагола «${label}»?`);

        // Perfekt (ich)
        const swapAux = v.aux === "habe" ? "bin" : "habe";
        const wrongs2 = [];
        if (!REGIONAL_AUX.includes(v.inf)) {
            wrongs2.push({ txt: `ich ${swapAux} ${v.part}`,
                           exp: `Для '${v.inf}' нужен ${v.aux === "habe" ? "haben" : "sein"}. Правильно: ${v.perf}.` });
        }
        wrongs2.push(fakeParticiple(v));
        wrongs2.push({ txt: v.prat, exp: `'${v.prat}' — это Präteritum, а в вопросе Perfekt. Правильно: ${v.perf}.` });
        const q2 = build(v.perf, `${v.inf} — ${v.ru}. Perfekt: ${v.perf}.`, wrongs2,
            `Какая форма Perfekt (ich) у глагола «${label}»?`);

        // По форме определить глагол: Präteritum и Perfekt
        [["Präteritum", v.prat], ["Perfekt", v.perf]].forEach(([tense, form]) => {
            const others = pickDistinct(verbList, 2,
                o => o.inf !== v.inf && o.prat !== v.prat && o.perf !== v.perf, o => o.inf);
            if (others.length < 2) return;
            const opts = [{ txt: `${v.inf} — ${v.ru}`, correct: true,
                exp: `«${form}» — ${tense} от ${v.inf} (${v.ru}).` }];
            others.forEach(o => opts.push({
                txt: `${o.inf} — ${o.ru}`, correct: false,
                exp: `У '${o.inf}' (${o.ru}) ${tense}: ${tense === "Perfekt" ? o.perf : o.prat}. Правильно: ${v.inf}.`
            }));
            verbs.push({ q: `Форма ${tense} «${form}» — это форма какого глагола?`, opts: opts });
        });

        if (q1) verbs.push(q1);
        if (q2) verbs.push(q2);
    });

    // ---------- перевод ----------
    const translate = [];
    const byCategory = {};
    words.forEach(w => { (byCategory[w.category] = byCategory[w.category] || []).push(w); });

    words.forEach(w => {
        const pool = byCategory[w.category] || [];
        const lowRu = w.ru.toLowerCase();

        // немецкий → русский
        const ruWrong = pickDistinct(pool, 2, o => o.ru.toLowerCase() !== lowRu, o => o.ru.toLowerCase());
        if (ruWrong.length === 2) {
            translate.push({
                q: `Что означает «${w.de}»?`,
                opts: [{ txt: w.ru, correct: true, exp: `${w.de} — ${w.ru}.` }].concat(
                    ruWrong.map(o => ({ txt: o.ru, correct: false,
                        exp: `Правильно: ${w.de} — ${w.ru}. А «${o.ru}» — это ${o.de}.` })))
            });
        }

        // русский → немецкий
        const deWrong = pickDistinct(pool, 2, o => o.de !== w.de && o.ru.toLowerCase() !== lowRu, o => o.de);
        if (deWrong.length === 2) {
            translate.push({
                q: `Как по-немецки: «${w.ru}»?`,
                opts: [{ txt: w.de, correct: true, exp: `${w.ru} — ${w.de}.` }].concat(
                    deWrong.map(o => ({ txt: o.de, correct: false,
                        exp: `Правильно: ${w.de}. А «${o.de}» — это «${o.ru}».` })))
            });
        }
    });

    return { article: article, plural: plural, verbs: verbs, translate: translate };
}
