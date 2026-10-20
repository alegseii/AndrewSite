// Вопросы по теме Präteritum (А1-А2).
// Формат записи для движка в index.html: { q, opts: [{ txt, correct, exp }, ...] }
// Формы спрягаются по правилам из основы Präteritum (stem), чтобы не вписывать вручную каждую форму.
// Чтобы добавить глагол — добавь одну строку в prateritumVerbs.
const prateritumQuestions = [];

(function () {
    const SUBJECTS = [
        { s: "ich",             key: "ich" },
        { s: "du",              key: "du" },
        { s: "er",              key: "er" },
        { s: "meine Schwester", key: "er" },
        { s: "wir",             key: "wir" },
        { s: "ihr",             key: "ihr" },
        { s: "die Kinder",      key: "sie" }
    ];

    const LABEL = {
        ich: "ich", du: "du", er: "er / sie / es",
        wir: "wir", ihr: "ihr", sie: "sie (они) / Sie"
    };

    // kind: strong — своя основа без -te (ging);
    //       weak / modal / mixed — основа + -te (machte, konnte, brachte);
    //       special — формы заданы вручную (sein, haben, werden)
    const prateritumVerbs = [
        { inf: "sein",      kind: "special", p2: "gewesen",     ru: "быть",         adv: "Gestern",      rest: "müde",
          forms: { ich: "war",    du: "warst",    er: "war",    wir: "waren",    ihr: "wart",    sie: "waren" } },
        { inf: "haben",     kind: "special", p2: "gehabt",      ru: "иметь",        adv: "Gestern",      rest: "keine Zeit",
          forms: { ich: "hatte",  du: "hattest",  er: "hatte",  wir: "hatten",   ihr: "hattet",  sie: "hatten" } },
        { inf: "werden",    kind: "special", p2: "geworden",    ru: "становиться",  adv: "Im Winter",    rest: "schnell müde",
          forms: { ich: "wurde",  du: "wurdest",  er: "wurde",  wir: "wurden",   ihr: "wurdet",  sie: "wurden" } },

        { inf: "können",    kind: "modal", stem: "konn", p2: "gekonnt",  ru: "мочь",           adv: "Gestern",     rest: "leider nicht kommen" },
        { inf: "müssen",    kind: "modal", stem: "muss", p2: "gemusst",  ru: "быть должным",   adv: "Gestern",     rest: "lange arbeiten" },
        { inf: "wollen",    kind: "modal", stem: "woll", p2: "gewollt",  ru: "хотеть",         adv: "Am Samstag",  rest: "ins Kino gehen" },
        { inf: "sollen",    kind: "modal", stem: "soll", p2: "gesollt",  ru: "быть обязанным", adv: "Gestern",     rest: "früh nach Hause kommen" },
        { inf: "dürfen",    kind: "modal", stem: "durf", p2: "gedurft",  ru: "иметь право",    adv: "Gestern",     rest: "nicht mitkommen" },

        { inf: "gehen",     kind: "strong", stem: "ging",    p2: "gegangen",    ru: "идти",       adv: "Gestern",      rest: "in die Schule" },
        { inf: "kommen",    kind: "strong", stem: "kam",     p2: "gekommen",    ru: "приходить",  adv: "Gestern",      rest: "spät nach Hause" },
        { inf: "sehen",     kind: "strong", stem: "sah",     p2: "gesehen",     ru: "видеть",     adv: "Gestern",      rest: "einen Film" },
        { inf: "geben",     kind: "strong", stem: "gab",     p2: "gegeben",     ru: "давать",     adv: "Gestern",      rest: "mir das Buch" },
        { inf: "nehmen",    kind: "strong", stem: "nahm",    p2: "genommen",    ru: "брать",      adv: "Heute",        rest: "den Bus" },
        { inf: "sprechen",  kind: "strong", stem: "sprach",  p2: "gesprochen",  ru: "говорить",   adv: "Gestern",      rest: "mit dem Lehrer" },
        { inf: "lesen",     kind: "strong", stem: "las",     p2: "gelesen",     ru: "читать",     adv: "Gestern",      rest: "ein Buch" },
        { inf: "schreiben", kind: "strong", stem: "schrieb", p2: "geschrieben", ru: "писать",     adv: "Gestern",      rest: "eine Karte" },
        { inf: "essen",     kind: "strong", stem: "aß",      p2: "gegessen",    ru: "есть",       adv: "Heute",        rest: "Pizza" },
        { inf: "trinken",   kind: "strong", stem: "trank",   p2: "getrunken",   ru: "пить",       adv: "Heute",        rest: "Tee" },
        { inf: "fahren",    kind: "strong", stem: "fuhr",    p2: "gefahren",    ru: "ехать",      adv: "Gestern",      rest: "nach Hause" },
        { inf: "schlafen",  kind: "strong", stem: "schlief", p2: "geschlafen",  ru: "спать",      adv: "Heute",        rest: "lange" },
        { inf: "finden",    kind: "strong", stem: "fand",    p2: "gefunden",    ru: "находить",   adv: "Gestern",      rest: "den Schlüssel" },
        { inf: "stehen",    kind: "strong", stem: "stand",   p2: "gestanden",   ru: "стоять",     adv: "Gestern",      rest: "vor der Tür" },
        { inf: "bleiben",   kind: "strong", stem: "blieb",   p2: "geblieben",   ru: "оставаться", adv: "Am Sonntag",   rest: "zu Hause" },
        { inf: "laufen",    kind: "strong", stem: "lief",    p2: "gelaufen",    ru: "бегать",     adv: "Heute",        rest: "durch den Park" },
        { inf: "helfen",    kind: "strong", stem: "half",    p2: "geholfen",    ru: "помогать",   adv: "Gestern",      rest: "dem Nachbarn" },

        { inf: "machen",    kind: "weak", stem: "mach",   p2: "gemacht",    ru: "делать",    adv: "Gestern",       rest: "die Hausaufgaben" },
        { inf: "lernen",    kind: "weak", stem: "lern",   p2: "gelernt",    ru: "учить",     adv: "Gestern",       rest: "Deutsch" },
        { inf: "spielen",   kind: "weak", stem: "spiel",  p2: "gespielt",   ru: "играть",    adv: "Am Samstag",    rest: "Fußball" },
        { inf: "kaufen",    kind: "weak", stem: "kauf",   p2: "gekauft",    ru: "покупать",  adv: "Heute",         rest: "frisches Brot" },
        { inf: "wohnen",    kind: "weak", stem: "wohn",   p2: "gewohnt",    ru: "жить",      adv: "Letztes Jahr",  rest: "in München" },
        { inf: "arbeiten",  kind: "weak", stem: "arbeit", p2: "gearbeitet", ru: "работать",  adv: "Gestern",       rest: "bis spät" },

        { inf: "bringen",   kind: "mixed", stem: "brach", p2: "gebracht", ru: "приносить", adv: "Gestern", rest: "das Essen" },
        { inf: "denken",    kind: "mixed", stem: "dach",  p2: "gedacht",  ru: "думать",    adv: "Gestern", rest: "an die Prüfung" },
        { inf: "wissen",    kind: "mixed", stem: "wuss",  p2: "gewusst",  ru: "знать",     adv: "Gestern", rest: "die Antwort nicht" }
    ];

    // Спряжение по правилам
    function conjugate(stem, kind) {
        const dt = /[dt]$/.test(stem);
        if (kind === "strong") {
            const du = /[sßxz]$/.test(stem) ? stem + "t" : stem + (dt ? "est" : "st");
            return { ich: stem, du: du, er: stem, wir: stem + "en", ihr: stem + (dt ? "et" : "t"), sie: stem + "en" };
        }
        const e = dt ? "e" : "";
        return {
            ich: stem + e + "te", du: stem + e + "test", er: stem + e + "te",
            wir: stem + e + "ten", ihr: stem + e + "tet", sie: stem + e + "ten"
        };
    }

    prateritumVerbs.forEach(v => {
        v.f = v.forms || conjugate(v.stem, v.kind);
        // типичная ошибка: слабое спряжение там, где нужна сильная/смешанная форма
        v.weakStem = v.inf.replace(/e?n$/, "");
        v.fakeWeak = conjugate(v.weakStem, "weak");
    });

    // Все лица, у которых данная форма совпадает с txt
    function personsOf(v, txt) {
        return Object.keys(LABEL).filter(k => v.f[k] === txt).map(k => LABEL[k]).join(", ");
    }

    // Тип 1: вставить правильную форму
    function formQuestion(v, subj) {
        const correct = v.f[subj.key];
        const seen = new Set([correct]);
        const opts = [{
            txt: correct, correct: true,
            exp: `Верно! '${v.inf}' (${v.ru}) в Präteritum для «${subj.s}»: '${correct}'.`
        }];

        // 1) правильная форма, но другого лица
        const altOrder = { ich: "du", du: "er", er: "du", wir: "ihr", ihr: "wir", sie: "ihr" };
        const keys = [altOrder[subj.key], "du", "er", "wir", "ihr", "sie", "ich"];
        for (const k of keys) {
            const w = v.f[k];
            if (!seen.has(w)) {
                seen.add(w);
                opts.push({
                    txt: w, correct: false,
                    exp: `Неверно. '${w}' — форма для «${personsOf(v, w)}», а здесь нужна форма для «${LABEL[subj.key]}».`
                });
                break;
            }
        }

        // 2) типичная ошибка по виду глагола
        let second;
        if (v.kind === "strong") {
            second = {
                txt: v.fakeWeak[subj.key],
                exp: `Неверно. '${v.inf}' — сильный глагол: у него меняется корень (${v.f.ich}), а окончание -te не добавляется.`
            };
        } else if (v.kind === "mixed") {
            second = {
                txt: v.fakeWeak[subj.key],
                exp: `Неверно. '${v.inf}' — неправильный глагол: корень меняется (${v.inf} → ${v.stem}-), окончание -te сохраняется.`
            };
        } else {
            second = {
                txt: v.p2,
                exp: `Неверно. '${v.p2}' — это Partizip II (для Perfekt), а не Präteritum.`
            };
        }
        if (!seen.has(second.txt)) {
            seen.add(second.txt);
            opts.push({ txt: second.txt, correct: false, exp: second.exp });
        }

        // запасной вариант, если что-то совпало
        if (opts.length < 3 && !seen.has(v.inf)) {
            seen.add(v.inf);
            opts.push({ txt: v.inf, correct: false, exp: `Неверно. Это инфинитив ('${v.inf}'), а требуется прошедшее время.` });
        }

        return {
            q: `Вставьте глагол в Präteritum (${v.inf} — ${v.ru}): "${v.adv} ____ ${subj.s} ${v.rest}."`,
            opts: opts
        };
    }

    // Тип 2: по форме определить глагол
    function reverseQuestion(v, vi, key, off1, off2) {
        const n = prateritumVerbs.length;
        const o1 = prateritumVerbs[(vi + off1) % n];
        const o2 = prateritumVerbs[(vi + off2) % n];
        const form = v.f[key];
        const bad = [o1, o2].filter(o => o.f[key] !== form);
        const opts = [{
            txt: `${v.inf} — ${v.ru}`, correct: true,
            exp: `Верно! '${form}' — Präteritum от '${v.inf}' (${v.ru}).`
        }];
        bad.forEach(o => opts.push({
            txt: `${o.inf} — ${o.ru}`, correct: false,
            exp: `Неверно. У '${o.inf}' (${o.ru}) в Präteritum для этого лица будет '${o.f[key]}'.`
        }));
        return {
            q: `Форма Präteritum '${form}' (${personsOf(v, form)}) — это форма какого глагола?`,
            opts: opts
        };
    }

    prateritumVerbs.forEach((v, vi) => {
        SUBJECTS.forEach(subj => prateritumQuestions.push(formQuestion(v, subj)));
        prateritumQuestions.push(reverseQuestion(v, vi, "ich", 7, 13));
        prateritumQuestions.push(reverseQuestion(v, vi, "wir", 11, 19));
    });
})();
