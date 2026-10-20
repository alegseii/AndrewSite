// Вопросы по теме Perfekt (А1-А2).
// Формат записи для движка в index.html: { q, opts: [{ txt, correct, exp }, ...] }
// Вопросы строятся из таблицы perfektVerbs ниже. Чтобы добавить глагол — добавь одну строку в таблицу.
const perfektQuestions = [];

(function () {
    const AUX = {
        haben: { ich: "habe", du: "hast", er: "hat", wir: "haben", ihr: "habt", sie: "haben" },
        sein:  { ich: "bin",  du: "bist", er: "ist", wir: "sind",  ihr: "seid", sie: "sind" }
    };

    // key — лицо для спряжения вспомогательного глагола
    const SUBJECTS = [
        { s: "Ich",             key: "ich" },
        { s: "Du",              key: "du" },
        { s: "Er",              key: "er" },
        { s: "Meine Schwester", key: "er" },
        { s: "Wir",             key: "wir" },
        { s: "Ihr",             key: "ihr" },
        { s: "Die Kinder",      key: "sie" }
    ];

    const WHY = {
        motion: "глагол движения (перемещение из одной точки в другую)",
        change: "глагол смены состояния",
        exc:    "исключение: sein, werden и bleiben всегда идут с sein",
        haben:  "обычный глагол действия (не движение и не смена состояния)"
    };

    const KIND_NOTE = {
        strong: "сильный глагол: ge- + основа (часто с изменением корня) + -en",
        weak:   "слабый глагол: ge- + основа + -t",
        mixed:  "смешанный глагол: меняется корень, окончание -t"
    };

    const PRE_NOTE = {
        sep:   "Приставка отделяемая, поэтому ge- встаёт между приставкой и корнем",
        insep: "Приставка неотделяемая, поэтому ge- не добавляется"
    };

    // cat: motion / change / exc → sein;  haben → haben
    // kind: strong / weak / mixed;  pre: "sep" / "insep" (если есть приставка)
    // mid: то, что стоит между вспомогательным глаголом и Partizip II (подходит к любому подлежащему)
    // bad: своя неправильная форма Partizip II (если автоматическая выглядит странно)
    const perfektVerbs = [
        // sein: движение
        { inf: "fahren",     p2: "gefahren",     cat: "motion", kind: "strong", ru: "ехать",         mid: "gestern mit dem Zug nach Berlin" },
        { inf: "gehen",      p2: "gegangen",     cat: "motion", kind: "strong", ru: "идти",          mid: "gestern ins Kino" },
        { inf: "laufen",     p2: "gelaufen",     cat: "motion", kind: "strong", ru: "бегать",        mid: "heute im Park" },
        { inf: "kommen",     p2: "gekommen",     cat: "motion", kind: "strong", ru: "приходить",     mid: "heute zu spät" },
        { inf: "fliegen",    p2: "geflogen",     cat: "motion", kind: "strong", ru: "лететь",        mid: "letztes Jahr nach Spanien" },
        { inf: "reisen",     p2: "gereist",      cat: "motion", kind: "weak",   ru: "путешествовать", mid: "im Sommer nach Italien" },
        { inf: "wandern",    p2: "gewandert",    cat: "motion", kind: "weak",   ru: "ходить в поход", mid: "am Sonntag in den Bergen" },
        { inf: "schwimmen",  p2: "geschwommen",  cat: "motion", kind: "strong", ru: "плавать",       mid: "heute im See" },
        { inf: "fallen",     p2: "gefallen",     cat: "motion", kind: "strong", ru: "падать",        mid: "gestern von der Leiter" },
        { inf: "ankommen",   p2: "angekommen",   cat: "motion", kind: "strong", ru: "прибывать",     mid: "heute um acht Uhr", pre: "sep" },
        { inf: "umziehen",   p2: "umgezogen",    cat: "change", kind: "strong", ru: "переезжать",    mid: "im Mai nach Hamburg", pre: "sep" },
        // sein: смена состояния
        { inf: "aufstehen",  p2: "aufgestanden", cat: "change", kind: "strong", ru: "вставать",      mid: "heute um sechs Uhr", pre: "sep" },
        { inf: "einschlafen",p2: "eingeschlafen",cat: "change", kind: "strong", ru: "засыпать",      mid: "gestern Abend vor dem Fernseher", pre: "sep" },
        { inf: "aufwachen",  p2: "aufgewacht",   cat: "change", kind: "weak",   ru: "просыпаться",   mid: "heute um sieben Uhr", pre: "sep" },
        // sein: исключения
        { inf: "werden",     p2: "geworden",     cat: "exc",    kind: "strong", ru: "становиться",   mid: "im Winter krank" },
        { inf: "sein",       p2: "gewesen",      cat: "exc",    kind: "strong", ru: "быть",          mid: "gestern im Supermarkt", bad: "gesein" },
        { inf: "bleiben",    p2: "geblieben",    cat: "exc",    kind: "strong", ru: "оставаться",    mid: "am Wochenende zu Hause" },
        // haben
        { inf: "machen",     p2: "gemacht",      cat: "haben",  kind: "weak",   ru: "делать",        mid: "gestern die Hausaufgaben" },
        { inf: "kaufen",     p2: "gekauft",      cat: "haben",  kind: "weak",   ru: "покупать",      mid: "heute frisches Brot" },
        { inf: "lernen",     p2: "gelernt",      cat: "haben",  kind: "weak",   ru: "учить",         mid: "gestern zwei Stunden Deutsch" },
        { inf: "lesen",      p2: "gelesen",      cat: "haben",  kind: "strong", ru: "читать",        mid: "am Abend ein spannendes Buch" },
        { inf: "schreiben",  p2: "geschrieben",  cat: "haben",  kind: "strong", ru: "писать",        mid: "gestern eine E-Mail" },
        { inf: "essen",      p2: "gegessen",     cat: "haben",  kind: "strong", ru: "есть",          mid: "zum Mittagessen eine Pizza", bad: "gegesst" },
        { inf: "trinken",    p2: "getrunken",    cat: "haben",  kind: "strong", ru: "пить",          mid: "heute Morgen einen Kaffee" },
        { inf: "sehen",      p2: "gesehen",      cat: "haben",  kind: "strong", ru: "видеть",        mid: "gestern einen Film" },
        { inf: "sprechen",   p2: "gesprochen",   cat: "haben",  kind: "strong", ru: "говорить",      mid: "gestern lange mit dem Lehrer" },
        { inf: "arbeiten",   p2: "gearbeitet",   cat: "haben",  kind: "weak",   ru: "работать",      mid: "heute den ganzen Tag" },
        { inf: "spielen",    p2: "gespielt",     cat: "haben",  kind: "weak",   ru: "играть",        mid: "am Samstag Fußball" },
        { inf: "kochen",     p2: "gekocht",      cat: "haben",  kind: "weak",   ru: "готовить",      mid: "gestern Nudeln" },
        { inf: "hören",      p2: "gehört",       cat: "haben",  kind: "weak",   ru: "слушать",       mid: "heute laute Musik" },
        { inf: "nehmen",     p2: "genommen",     cat: "haben",  kind: "strong", ru: "брать",         mid: "heute den Bus" },
        { inf: "geben",      p2: "gegeben",      cat: "haben",  kind: "strong", ru: "давать",        mid: "dem Lehrer die Hausaufgaben" },
        { inf: "helfen",     p2: "geholfen",     cat: "haben",  kind: "strong", ru: "помогать",      mid: "gestern dem Nachbarn" },
        { inf: "treffen",    p2: "getroffen",    cat: "haben",  kind: "strong", ru: "встречать",     mid: "am Samstag meine Freunde" },
        { inf: "finden",     p2: "gefunden",     cat: "haben",  kind: "strong", ru: "находить",      mid: "gestern den Schlüssel" },
        { inf: "schlafen",   p2: "geschlafen",   cat: "haben",  kind: "strong", ru: "спать",         mid: "heute lange" },
        { inf: "bringen",    p2: "gebracht",     cat: "haben",  kind: "mixed",  ru: "приносить",     mid: "heute das Essen" },
        // haben: приставки
        { inf: "verstehen",  p2: "verstanden",   cat: "haben",  kind: "strong", ru: "понимать",      mid: "die Aufgabe nicht", pre: "insep" },
        { inf: "besuchen",   p2: "besucht",      cat: "haben",  kind: "weak",   ru: "посещать",      mid: "am Sonntag die Oma", pre: "insep" },
        { inf: "bekommen",   p2: "bekommen",     cat: "haben",  kind: "strong", ru: "получать",      mid: "gestern ein Paket", pre: "insep" },
        { inf: "bestellen",  p2: "bestellt",     cat: "haben",  kind: "weak",   ru: "заказывать",    mid: "im Restaurant eine Suppe", pre: "insep" },
        { inf: "anrufen",    p2: "angerufen",    cat: "haben",  kind: "strong", ru: "звонить",       mid: "gestern meine Mutter", pre: "sep" },
        { inf: "einkaufen",  p2: "eingekauft",   cat: "haben",  kind: "weak",   ru: "делать покупки", mid: "am Freitag im Supermarkt", pre: "sep" },
        { inf: "fernsehen",  p2: "ferngesehen",  cat: "haben",  kind: "strong", ru: "смотреть телевизор", mid: "am Abend", pre: "sep" }
    ];

    perfektVerbs.forEach(v => {
        v.aux = v.cat === "haben" ? "haben" : "sein";
        v.why = WHY[v.cat];
        v.note = KIND_NOTE[v.kind];
    });

    const otherAux = a => (a === "sein" ? "haben" : "sein");
    const sentence = (subj, v) => `${subj.s} ${AUX[v.aux][subj.key]} ${v.mid} ${v.p2}.`;

    // Два неправильных варианта Partizip II
    function badParticiples(v) {
        const stem = v.inf.replace(/e?n$/, "");
        let first;
        let firstExp;
        if (v.bad) {
            first = v.bad;
            firstExp = `Неверно. Правильная форма — '${v.p2}' (${v.note}).`;
        } else if (v.pre) {
            first = "ge" + v.p2;
            firstExp = `Неверно. ${PRE_NOTE[v.pre]}: '${v.p2}'.`;
        } else {
            first = "ge" + stem + (v.kind === "weak" ? "en" : "t");
            firstExp = `Неверно. Правильная форма — '${v.p2}' (${v.note}).`;
        }
        const second = (v.inf === v.p2)
            ? { txt: v.inf + "t", exp: `Неверно. '${v.inf}t' — форма Präsens (er / ihr). У '${v.inf}' Partizip II совпадает с инфинитивом: '${v.p2}'.` }
            : { txt: v.inf, exp: `Неверно. Это инфинитив, а в Perfekt нужен Partizip II: '${v.p2}'.` };
        return [{ txt: first, exp: firstExp }, second];
    }

    // Тип A: какой вспомогательный глагол (с учётом лица)
    function auxQuestion(v, subj) {
        const right = AUX[v.aux][subj.key];
        const otherForm = AUX[otherAux(v.aux)][subj.key];
        const altKey = { ich: "du", du: "er", er: "wir", wir: "er", ihr: "du", sie: "er" }[subj.key];
        const wrongPerson = AUX[v.aux][altKey];
        return {
            q: `Выберите вспомогательный глагол: "${subj.s} ____ ${v.mid} ${v.p2}." (${v.inf} — ${v.ru})`,
            opts: [
                { txt: right, correct: true,
                  exp: `Верно! '${v.inf}' — ${v.why}. Вспомогательный глагол: ${v.aux}, для «${subj.s}» это '${right}'.` },
                { txt: otherForm, correct: false,
                  exp: `Неверно. '${v.inf}' — ${v.why}. Здесь нужен ${v.aux}, а не ${otherAux(v.aux)}.` },
                { txt: wrongPerson, correct: false,
                  exp: `Неверно. '${wrongPerson}' — форма ${v.aux} для другого лица, а для «${subj.s}» нужно '${right}'.` }
            ]
        };
    }

    // Тип B: форма Partizip II
    function participleQuestion(v, subj) {
        const bad = badParticiples(v);
        return {
            q: `Образуйте Perfekt от '${v.inf}' (${v.ru}): "${subj.s} ${AUX[v.aux][subj.key]} ${v.mid} ____."`,
            opts: [
                { txt: v.p2, correct: true,
                  exp: `Правильно! Partizip II от '${v.inf}' — '${v.p2}' (${v.pre ? PRE_NOTE[v.pre].toLowerCase() : v.note}).` },
                { txt: bad[0].txt, correct: false, exp: bad[0].exp },
                { txt: bad[1].txt, correct: false, exp: bad[1].exp }
            ]
        };
    }

    // Тип C: порядок слов
    function orderQuestion(v, subj) {
        const aux = AUX[v.aux][subj.key];
        return {
            q: `Выберите предложение с правильным порядком слов (Perfekt, '${v.inf}' — ${v.ru}):`,
            opts: [
                { txt: sentence(subj, v), correct: true,
                  exp: "Верно! Вспомогательный глагол стоит на 2-м месте, а Partizip II уходит в самый конец." },
                { txt: `${subj.s} ${aux} ${v.p2} ${v.mid}.`, correct: false,
                  exp: "Неверно. Partizip II должен стоять в самом конце предложения (рамочная конструкция)." },
                { txt: `${subj.s} ${v.mid} ${aux} ${v.p2}.`, correct: false,
                  exp: "Неверно. Вспомогательный глагол (haben / sein) стоит на 2-м месте, сразу после подлежащего." }
            ]
        };
    }

    // Тип D: haben или sein
    function categoryQuestion(v) {
        const wrongAux = otherAux(v.aux);
        return {
            q: `Какой вспомогательный глагол нужен в Perfekt для глагола '${v.inf}' (${v.ru})?`,
            opts: [
                { txt: v.aux, correct: true, exp: `Верно! '${v.inf}' — ${v.why}.` },
                { txt: wrongAux, correct: false,
                  exp: `Неверно. '${v.inf}' — ${v.why}. Нужен ${v.aux}.` },
                { txt: "werden", correct: false,
                  exp: "Неверно. Werden нужен для Futur и Passiv, но не для Perfekt." }
            ]
        };
    }

    perfektVerbs.forEach((v, vi) => {
        [0, 2, 4].forEach(o => perfektQuestions.push(auxQuestion(v, SUBJECTS[(vi + o) % 7])));
        [1, 3, 5].forEach(o => perfektQuestions.push(participleQuestion(v, SUBJECTS[(vi + o) % 7])));
        [2, 4, 6].forEach(o => perfektQuestions.push(orderQuestion(v, SUBJECTS[(vi + o) % 7])));
        perfektQuestions.push(categoryQuestion(v));
    });
})();
