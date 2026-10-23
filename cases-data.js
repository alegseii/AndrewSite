// Тренажёр «Падежи» (Nominativ / Akkusativ / Dativ), уровень A1.
// Формат записи для движка в index.html: { q, opts: [{ txt, correct, exp }, ...] }
// Вопросы строятся из таблиц существительных, рамок предложений и местоимений ниже.
const casesQuestions = [];

(function () {
    const CASE_RU = { nom: "Nominativ", akk: "Akkusativ", dat: "Dativ" };
    const GENDER_RU = { m: "мужского", f: "женского", n: "среднего" };
    const GENDER_ART = { m: "der", f: "die", n: "das" };

    const DEF = {
        m: { nom: "der", akk: "den", dat: "dem" },
        f: { nom: "die", akk: "die", dat: "der" },
        n: { nom: "das", akk: "das", dat: "dem" }
    };
    const INDEF = {
        m: { nom: "ein",  akk: "einen", dat: "einem" },
        f: { nom: "eine", akk: "eine",  dat: "einer" },
        n: { nom: "ein",  akk: "ein",   dat: "einem" }
    };

    // t: "obj" — предмет (Nom / Akk), "per" — человек (Nom / Akk / Dat)
    const NOUNS = [
        { n: "Tisch",     g: "m", ru: "стол",       t: "obj" },
        { n: "Computer",  g: "m", ru: "компьютер",  t: "obj" },
        { n: "Schlüssel", g: "m", ru: "ключ",       t: "obj" },
        { n: "Bus",       g: "m", ru: "автобус",    t: "obj" },
        { n: "Film",      g: "m", ru: "фильм",      t: "obj" },
        { n: "Lampe",     g: "f", ru: "лампа",      t: "obj" },
        { n: "Tasche",    g: "f", ru: "сумка",      t: "obj" },
        { n: "Zeitung",   g: "f", ru: "газета",     t: "obj" },
        { n: "Uhr",       g: "f", ru: "часы",       t: "obj" },
        { n: "Tür",       g: "f", ru: "дверь",      t: "obj" },
        { n: "Buch",      g: "n", ru: "книга",      t: "obj" },
        { n: "Auto",      g: "n", ru: "машина",     t: "obj" },
        { n: "Handy",     g: "n", ru: "телефон",    t: "obj" },
        { n: "Fenster",   g: "n", ru: "окно",       t: "obj" },
        { n: "Brot",      g: "n", ru: "хлеб",       t: "obj" },

        { n: "Mann",      g: "m", ru: "мужчина",    t: "per" },
        { n: "Lehrer",    g: "m", ru: "учитель",    t: "per" },
        { n: "Freund",    g: "m", ru: "друг",       t: "per" },
        { n: "Arzt",      g: "m", ru: "врач",       t: "per" },
        { n: "Vater",     g: "m", ru: "отец",       t: "per" },
        { n: "Bruder",    g: "m", ru: "брат",       t: "per" },
        { n: "Sohn",      g: "m", ru: "сын",        t: "per" },
        { n: "Frau",      g: "f", ru: "женщина",    t: "per" },
        { n: "Lehrerin",  g: "f", ru: "учительница", t: "per" },
        { n: "Freundin",  g: "f", ru: "подруга",    t: "per" },
        { n: "Mutter",    g: "f", ru: "мать",       t: "per" },
        { n: "Schwester", g: "f", ru: "сестра",     t: "per" },
        { n: "Ärztin",    g: "f", ru: "врач (жен.)", t: "per" },
        { n: "Kind",      g: "n", ru: "ребёнок",    t: "per" },
        { n: "Mädchen",   g: "n", ru: "девочка",    t: "per" },
        { n: "Baby",      g: "n", ru: "малыш",      t: "per" }
    ];

    const NOM_WHY = "подлежащее или именная часть после sein (кто? что?)";
    const akkWhy = v => `глагол ${v} стоит с прямым дополнением (кого? что?)`;
    const datWhy = v => `глагол ${v} стоит с дополнением в Dativ (кому?)`;

    const FRAMES = {
        obj: {
            nom: [
                { t: "Hier ist {A} {N}.",  why: NOM_WHY },
                { t: "{A} {N} ist neu.",    why: NOM_WHY }
            ],
            akk: [
                { t: "Ich sehe {A} {N}.",     why: akkWhy("sehen") },
                { t: "Ich brauche {A} {N}.",  why: akkWhy("brauchen") },
                { t: "Wir suchen {A} {N}.",   why: akkWhy("suchen") }
            ]
        },
        per: {
            nom: [
                { t: "Hier ist {A} {N}.",        why: NOM_WHY },
                { t: "{A} {N} ist sehr nett.",   why: NOM_WHY }
            ],
            akk: [
                { t: "Ich sehe {A} {N}.",      why: akkWhy("sehen") },
                { t: "Wir besuchen {A} {N}.",  why: akkWhy("besuchen") },
                { t: "Ich kenne {A} {N}.",     why: akkWhy("kennen") }
            ],
            dat: [
                { t: "Ich helfe {A} {N}.",            why: datWhy("helfen") },
                { t: "Wir danken {A} {N}.",           why: datWhy("danken") },
                { t: "Ich gebe {A} {N} das Buch.",    why: datWhy("geben") },
                { t: "Das Buch gehört {A} {N}.",      why: datWhy("gehören") }
            ]
        }
    };

    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

    // Три варианта артикля: формы нужного рода + (если форм мало) артикль другого рода
    function optionSet(g, table) {
        const own = table[g];
        const forms = [...new Set([own.nom, own.akk, own.dat])];
        if (forms.length === 3) return forms;
        const extra = { f: table.n.nom, n: table.m.akk }[g];
        return forms.concat(extra);
    }

    // Что означает данная форма для данного существительного
    function describe(art, noun, table) {
        const own = table[noun.g];
        const cases = Object.keys(own).filter(c => own[c] === art).map(c => CASE_RU[c]);
        if (cases.length) return `'${art}' — ${cases.join(" / ")}`;
        const genders = ["m", "f", "n"].filter(g => Object.values(table[g]).includes(art));
        return `'${art}' — артикль ${genders.map(g => GENDER_RU[g]).join(" / ")} рода, а ${noun.n} — ${GENDER_RU[noun.g]} рода (${GENDER_ART[noun.g]} ${noun.n})`;
    }

    // Тип A: выбрать артикль
    function articleQuestion(noun, frame, caseKey, indef) {
        const table = indef ? INDEF : DEF;
        const correct = table[noun.g][caseKey];
        const blank = frame.t.replace("{A}", "____").replace("{N}", noun.n);
        const opts = optionSet(noun.g, table).map(a => ({
            txt: a,
            correct: a === correct,
            exp: a === correct
                ? `Верно! ${cap(frame.why)}, значит ${CASE_RU[caseKey]}: ${correct} ${noun.n}.`
                : `Неверно. ${describe(a, noun, table)}. Здесь нужен ${CASE_RU[caseKey]}: ${frame.why}. Правильно: ${correct} ${noun.n}.`
        }));
        return {
            q: `Выберите ${indef ? "неопределённый " : ""}артикль: "${blank}" (${noun.n} — ${noun.ru})`,
            opts: opts
        };
    }

    // Тип D: определить падеж
    function caseQuestion(noun, frame, caseKey) {
        const art = DEF[noun.g][caseKey];
        const full = cap(frame.t.replace("{A}", art).replace("{N}", noun.n));
        const opts = ["nom", "akk", "dat"].map(c => {
            let exp;
            if (c === caseKey) {
                exp = `Верно! ${cap(frame.why)}.`;
            } else if (DEF[noun.g][c] === art) {
                exp = `Неверно. Форма '${art}' одинакова в нескольких падежах, поэтому смотрим на роль слова: ${frame.why}, значит ${CASE_RU[caseKey]}.`;
            } else {
                exp = `Неверно. '${art}' — это не ${CASE_RU[c]}: ${frame.why}, значит ${CASE_RU[caseKey]}.`;
            }
            return { txt: CASE_RU[c], correct: c === caseKey, exp: exp };
        });
        return { q: `В каком падеже стоит «${art} ${noun.n}» в предложении: "${full}"`, opts: opts };
    }

    NOUNS.forEach((noun, ni) => {
        const frames = FRAMES[noun.t];
        Object.keys(frames).forEach(caseKey => {
            const list = frames[caseKey];
            // определённый артикль: два разных предложения, неопределённый: одно
            casesQuestions.push(articleQuestion(noun, list[ni % list.length], caseKey, false));
            casesQuestions.push(articleQuestion(noun, list[(ni + 1) % list.length], caseKey, false));
            casesQuestions.push(articleQuestion(noun, list[(ni + 2) % list.length], caseKey, true));
            casesQuestions.push(caseQuestion(noun, list[(ni + 2) % list.length], caseKey));
        });
    });

    // Тип C: личные местоимения в Akkusativ и Dativ
    const PERSONS = [
        { ru: "меня",              ruDat: "мне",              nom: "ich",  akk: "mich", dat: "mir" },
        { ru: "тебя",              ruDat: "тебе",             nom: "du",   akk: "dich", dat: "dir" },
        { ru: "его",               ruDat: "ему",              nom: "er",   akk: "ihn",  dat: "ihm" },
        { ru: "её",                ruDat: "ей",               nom: "sie",  akk: "sie",  dat: "ihr" },
        { ru: "нас",               ruDat: "нам",              nom: "wir",  akk: "uns",  dat: "uns" },
        { ru: "вас (вы, друзья)",  ruDat: "вам (вы, друзья)", nom: "ihr",  akk: "euch", dat: "euch" },
        { ru: "их",                ruDat: "им",               nom: "sie",  akk: "sie",  dat: "ihnen" }
    ];

    const PRON_FRAMES = {
        akk: [
            { t: "Meine Mutter sieht ____.",         v: "sehen" },
            { t: "Mein Lehrer kennt ____ gut.",      v: "kennen" },
            { t: "Mein Freund besucht ____ morgen.", v: "besuchen" },
            { t: "Der Chef ruft ____ heute an.",     v: "anrufen" },
            { t: "Meine Schwester braucht ____.",    v: "brauchen" }
        ],
        dat: [
            { t: "Meine Mutter hilft ____ oft.",     v: "helfen" },
            { t: "Mein Lehrer dankt ____.",          v: "danken" },
            { t: "Das Buch gehört ____.",            v: "gehören" },
            { t: "Die Suppe schmeckt ____ gut.",     v: "schmecken" },
            { t: "Der Film gefällt ____.",           v: "gefallen" }
        ]
    };

    function pronounQuestion(pi, caseKey, frame) {
        const p = PERSONS[pi];
        const correct = p[caseKey];
        const other = caseKey === "akk" ? "dat" : "akk";
        const ruCase = caseKey === "akk" ? p.ru : p.ruDat;
        const seen = new Set([correct]);
        const opts = [{
            txt: correct, correct: true,
            exp: `Верно! ${frame.v} + ${CASE_RU[caseKey]}: «${ruCase}» = ${correct}.`
        }];
        const candidates = [
            { txt: p[other], exp: `Неверно. '${p[other]}' — ${CASE_RU[other]}, а глагол ${frame.v} требует ${CASE_RU[caseKey]}.` },
            { txt: p.nom,    exp: `Неверно. '${p.nom}' — Nominativ (подлежащее), а здесь нужен объект.` },
            { txt: PERSONS[(pi + 2) % PERSONS.length][caseKey], exp: "Неверно. Это форма для другого лица, а в задании речь о «" + ruCase + "»." },
            { txt: PERSONS[(pi + 4) % PERSONS.length][caseKey], exp: "Неверно. Это форма для другого лица, а в задании речь о «" + ruCase + "»." }
        ];
        for (const c of candidates) {
            if (opts.length === 3) break;
            if (!seen.has(c.txt)) {
                seen.add(c.txt);
                opts.push({ txt: c.txt, correct: false, exp: c.exp });
            }
        }
        return { q: `Вставьте личное местоимение («${ruCase}»): "${frame.t}"`, opts: opts };
    }

    PERSONS.forEach((p, pi) => {
        ["akk", "dat"].forEach(caseKey => {
            PRON_FRAMES[caseKey].forEach(frame => casesQuestions.push(pronounQuestion(pi, caseKey, frame)));
        });
    });

    // Тип G: Dativ множественного числа (+ -n)
    const PLURALS = [
        { sg: "Kind",    pl: "Kinder",  dat: "Kindern",  frame: "Ich helfe den ____." },
        { sg: "Freund",  pl: "Freunde", dat: "Freunden", frame: "Ich spiele mit den ____ Fußball." },
        { sg: "Lehrer",  pl: "Lehrer",  dat: "Lehrern",  frame: "Wir danken den ____." },
        { sg: "Mann",    pl: "Männer",  dat: "Männern",  frame: "Ich gebe den ____ die Karte." },
        { sg: "Buch",    pl: "Bücher",  dat: "Büchern",  frame: "Ich lese in den ____." },
        { sg: "Haus",    pl: "Häuser",  dat: "Häusern",  frame: "Die Kinder spielen vor den ____." },
        { sg: "Hund",    pl: "Hunde",   dat: "Hunden",   frame: "Ich gebe den ____ Wasser." },
        { sg: "Schüler", pl: "Schüler", dat: "Schülern", frame: "Der Lehrer hilft den ____." },
        { sg: "Tisch",   pl: "Tische",  dat: "Tischen",  frame: "Wir sitzen an den ____." },
        { sg: "Stuhl",   pl: "Stühle",  dat: "Stühlen",  frame: "Die Katzen sitzen auf den ____." }
    ];

    PLURALS.forEach(w => {
        casesQuestions.push({
            q: `Выберите правильную форму существительного (${w.sg}, мн. число): "${w.frame}"`,
            opts: [
                { txt: w.dat, correct: true,
                  exp: `Верно! В Dativ множественного числа к существительному добавляется -n: ${w.pl} → ${w.dat}.` },
                { txt: w.pl, correct: false,
                  exp: `Неверно. '${w.pl}' — обычное мн. число. После den (Dativ мн. числа) нужно ещё -n: ${w.dat}.` },
                w.sg === w.pl
                    ? { txt: w.pl + "s", correct: false,
                        exp: `Неверно. Окончание -s здесь не нужно: в Dativ множественного числа добавляется -n (${w.dat}).` }
                    : { txt: w.sg, correct: false,
                        exp: `Неверно. '${w.sg}' — единственное число, а артикль den здесь стоит с существительным во мн. числе.` }
            ]
        });
    });
})();
