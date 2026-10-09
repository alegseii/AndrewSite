// База из 500 практических вопросов по теме Präteritum (А1-А2)
const prateritumQuestions = [];

const preteritumVerbsData = [
    { inf: "sein", prateritum: "war", hint: "Вспомогательный / быть" },
    { inf: "haben", prateritum: "hatte", hint: "Вспомогательный / иметь" },
    { inf: "werden", prateritum: "wurde", hint: "Вспомогательный / становиться" },
    { inf: "können", prateritum: "konnte", hint: "Модальный / мочь" },
    { inf: "müssen", prateritum: "musste", hint: "Модальный / долженствовать" },
    { inf: "wollen", prateritum: "wollte", hint: "Модальный / хотеть" },
    { inf: "sollen", prateritum: "sollte", hint: "Модальный / следует" },
    { inf: "dürfen", prateritum: "durfte", hint: "Модальный / разрешено" },
    { inf: "mögen", prateritum: "mochte", hint: "Модальный / любить" },
    { inf: "gehen", prateritum: "ging", hint: "Сильный глагол / идти" },
    { inf: "kommen", prateritum: "kam", hint: "Сильный глагол / приходить" },
    { inf: "sehen", prateritum: "sah", hint: "Сильный глагол / видеть" },
    { inf: "geben", prateritum: "gab", hint: "Сильный глагол / давать" },
    { inf: "nehmen", prateritum: "nahm", hint: "Сильный глагол / брать" },
    { inf: "sprechen", prateritum: "sprach", hint: "Сильный глагол / говорить" },
    { inf: "lesen", prateritum: "las", hint: "Сильный глагол / читать" },
    { inf: "schreiben", prateritum: "schrieb", hint: "Сильный глагол / писать" },
    { inf: "essen", prateritum: "aß", hint: "Сильный глагол / есть" },
    { inf: "trinken", prateritum: "trank", hint: "Сильный глагол / пить" },
    { inf: "fahren", prateritum: "fuhr", hint: "Сильный глагол / ехать" },
    { inf: "schlafen", prateritum: "schlief", hint: "Сильный глагол / спать" },
    { inf: "finden", prateritum: "fand", hint: "Сильный глагол / находить" },
    { inf: "stehen", prateritum: "stand", hint: "Сильный глагол / стоять" },
    { inf: "liegen", prateritum: "lag", hint: "Сильный глагол / лежать" },
    { inf: "machen", prateritum: "machte", hint: "Слабый глагол / делать" },
    { inf: "lernen", prateritum: "lernte", hint: "Слабый глагол / учить" },
    { inf: "spielen", prateritum: "spielte", hint: "Слабый глагол / играть" },
    { inf: "kaufen", prateritum: "kaufte", hint: "Слабый глагол / покупать" },
    { inf: "wohnen", prateritum: "wohnte", hint: "Слабый глагол / жить" }
];

let pId = 1;
while (prateritumQuestions.length < 500) {
    const v = preteritumVerbsData[pId % preteritumVerbsData.length];
    const typeVariant = pId % 3;

    if (typeVariant === 0) {
        // Практика формы для местоимений ich / er / sie / es
        const wrong1 = v.prateritum + "st";
        const wrong2 = v.inf;
        prateritumQuestions.push({
            q: `Выберите правильную форму Präteritum: "Er _____ gestern ein neues Auto." (${v.hint})`,
            opts: [
                { txt: v.prateritum, correct: true, exp: `Верно! Для глагола '${v.inf}' форма Präteritum — '${v.prateritum}'.` },
                { txt: wrong1, correct: false, exp: `Ошибка. '${wrong1}' — неверная форма для третьего лица.` },
                { txt: wrong2, correct: false, exp: `Ошибка. Это инфинитив, а нужен Präteritum.` }
            ]
        });
    } else if (typeVariant === 1) {
        // Контекстный выбор в предложении
        const wrongAlt = v.prateritum.endsWith("e") ? v.prateritum + "n" : v.prateritum + "te";
        prateritumQuestions.push({
            q: `Какая форма глагола '${v.inf}' пропущена: "Wir _____ letztes Jahr viel." (${v.hint})`,
            opts: [
                { txt: v.prateritum, correct: true, exp: `Правильно! Правильная форма в прошедшем времени — '${v.prateritum}'.` },
                { txt: wrongAlt, correct: false, exp: `Ошибка. '${wrongAlt}' — неверная форма.` },
                { txt: v.inf, correct: false, exp: `Ошибка. Это начальная форма глагола.` }
            ]
        });
    } else {
        // Вопрос на сопоставление формы инфинитива и прошедшего времени
        prateritumQuestions.push({
            q: `Какая форма соответствует прошедшему времени (Präteritum) глагола '${v.inf}'? (${v.hint})`,
            opts: [
                { txt: v.prateritum, correct: true, exp: `Совершенно верно! '${v.inf}' в Präteritum меняется на '${v.prateritum}'.` },
                { txt: v.inf + "en", correct: false, exp: `Неверно, так образуется инфинитив.` },
                { txt: "ge" + v.prateritum, correct: false, exp: `Неверно, приставка 'ge-' используется в Perfekt, а не в Präteritum.` }
            ]
        });
    }
    pId++;
}