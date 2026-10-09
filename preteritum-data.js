// База из 500 качественных вопросов по теме Präteritum (А1-А2)
const prateritumQuestions = [];

const preteritumVerbsData = [
    { inf: "sein", prateritum: "war", ich: "war", du: "warst", er: "war", wir: "waren", ihr: "wart", sie: "waren", hint: "быть" },
    { inf: "haben", prateritum: "hatte", ich: "hatte", du: "hattest", er: "hatte", wir: "hatten", ihr: "hattet", sie: "hatten", hint: "иметь" },
    { inf: "werden", prateritum: "wurde", ich: "wurde", du: "wurdest", er: "wurde", wir: "wurden", ihr: "wurdet", sie: "wurden", hint: "становиться" },
    { inf: "können", prateritum: "konnte", ich: "konnte", du: "konntest", er: "konnte", wir: "konnten", ihr: "konntet", sie: "konnten", hint: "мочь" },
    { inf: "müssen", prateritum: "musste", ich: "musste", du: "musstest", er: "musste", wir: "mussten", ihr: "musstet", sie: "mussten", hint: "быть должным" },
    { inf: "wollen", prateritum: "wollte", ich: "wollte", du: "wolltest", er: "wollte", wir: "wollten", ihr: "wolltet", sie: "wollten", hint: "хотеть" },
    { inf: "sollen", prateritum: "sollte", ich: "sollte", du: "solltest", er: "sollte", wir: "sollten", ihr: "solltet", sie: "sollten", hint: "следовать" },
    { inf: "dürfen", prateritum: "durfte", ich: "durfte", du: "durftest", er: "durfte", wir: "durften", ihr: "durftet", sie: "durften", hint: "иметь разрешение" },
    { inf: "gehen", prateritum: "ging", ich: "ging", du: "gingst", er: "ging", wir: "gingen", ihr: "gingt", sie: "gingen", hint: "идти" },
    { inf: "kommen", prateritum: "kam", ich: "kam", du: "kamst", er: "kam", wir: "kamen", ihr: "kamt", sie: "kamen", hint: "приходить" },
    { inf: "sehen", prateritum: "sah", ich: "sah", du: "sahst", er: "sah", wir: "sahen", ihr: "saht", sie: "sahen", hint: "видеть" },
    { inf: "geben", prateritum: "gab", ich: "gab", du: "gabst", er: "gab", wir: "gaben", ihr: "gabt", sie: "gaben", hint: "давать" },
    { inf: "nehmen", prateritum: "nahm", ich: "nahm", du: "nahmst", er: "nahm", wir: "nahmen", ihr: "nahmt", sie: "nahmen", hint: "брать" },
    { inf: "sprechen", prateritum: "sprach", ich: "sprach", du: "sprachst", er: "sprach", wir: "sprachen", ihr: "spracht", sie: "sprachen", hint: "говорить" },
    { inf: "lesen", prateritum: "las", ich: "las", du: "lastest", er: "las", wir: "lasen", ihr: "last", sie: "lasen", hint: "читать" },
    { inf: "schreiben", prateritum: "schrieb", ich: "schrieb", du: "schriebst", er: "schrieb", wir: "schrieben", ihr: "schriebt", sie: "schrieben", hint: "писать" },
    { inf: "essen", prateritum: "aß", ich: "aß", du: "aßtest", er: "aß", wir: "aßen", ihr: "aßt", sie: "aßen", hint: "есть" },
    { inf: "trinken", prateritum: "trank", ich: "trank", du: "trankst", er: "trank", wir: "tranken", ihr: "trankt", sie: "tranken", hint: "пить" },
    { inf: "fahren", prateritum: "fuhr", ich: "fuhr", du: "fuhrst", er: "fuhr", wir: "fuhren", ihr: "fuhrt", sie: "fuhren", hint: "ехать" },
    { inf: "schlafen", prateritum: "schlief", ich: "schlief", du: "schliefst", er: "schlief", wir: "schliefen", ihr: "schlieft", sie: "schliefen", hint: "спать" },
    { inf: "finden", prateritum: "fand", ich: "fand", du: "fandest", er: "fand", wir: "fanden", ihr: "fandet", sie: "fanden", hint: "находить" },
    { inf: "stehen", prateritum: "stand", ich: "stand", du: "standst", er: "stand", wir: "standen", ihr: "standt", sie: "standen", hint: "стоять" },
    { inf: "machen", prateritum: "machte", ich: "machte", du: "machtest", er: "machte", wir: "machten", ihr: "machtet", sie: "machten", hint: "делать" },
    { inf: "lernen", prateritum: "lernte", ich: "lernte", du: "lerntest", er: "lernte", wir: "lernten", ihr: "lerntet", sie: "lernten", hint: "учить" },
    { inf: "spielen", prateritum: "spielte", ich: "spielte", du: "spieltest", er: "spielte", wir: "spielten", ihr: "spieltet", sie: "spielten", hint: "играть" },
    { inf: "kaufen", prateritum: "kaufte", ich: "kaufte", du: "kauftest", er: "kaufte", wir: "kauften", ihr: "kauftet", sie: "kauften", hint: "покупать" },
    { inf: "wohnen", prateritum: "wohnte", ich: "wohnte", du: "wohntest", er: "wohnte", wir: "wohnten", ihr: "wohntet", sie: "wohnten", hint: "жить" }
];

const pronouns = [
    { p: "ich", formKey: "ich" },
    { p: "du", formKey: "du" },
    { p: "er / sie / es", formKey: "er" },
    { p: "wir", formKey: "wir" },
    { p: "ihr", formKey: "ihr" },
    { p: "sie / Sie", formKey: "sie" }
];

let pId = 1;
while (prateritumQuestions.length < 500) {
    const v = preteritumVerbsData[pId % preteritumVerbsData.length];
    const pron = pronouns[(pId * 7) % pronouns.length];
    const correctForm = v[pron.formKey];
    
    // Генерируем правдоподобные варианты ошибок
    const wrong1 = v.prateritum + (pron.p === "du" ? "t" : "en");
    const wrong2 = v.inf;

    prateritumQuestions.push({
        q: `Какая форма Präteritum правильна для местоимения '${pron.p}' с глаголом '${v.inf}' (${v.hint})?`,
        opts: [
            { txt: correctForm, correct: true, exp: `Верно! Для '${pron.p}' глагол '${v.inf}' в Präteritum принимает форму '${correctForm}'.` },
            { txt: wrong1, correct: false, exp: `Неверно. '${wrong1}' — ошибочная форма для этого лица.` },
            { txt: wrong2, correct: false, exp: `Ошибка. Это инфинитив ('${v.inf}'), а требуется прошедшее время.` }
        ]
    });
    pId++;
}