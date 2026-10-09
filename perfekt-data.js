// Автоматически сгенерированная база из 500 вопросов по теме Perfekt (А1-А2)
const perfektQuestions = [];

const perfectVerbsData = [
    { inf: "fahren", p2: "gefahren", aux: "sein", hint: "Движение / поездка" },
    { inf: "gehen", p2: "gegangen", aux: "sein", hint: "Движение / ходьба" },
    { inf: "laufen", p2: "gelaufen", aux: "sein", hint: "Движение / бег" },
    { inf: "kommen", p2: "gekommen", aux: "sein", hint: "Движение / прибытие" },
    { inf: "fliegen", p2: "geflogen", aux: "sein", hint: "Движение / полет" },
    { inf: "reisen", p2: "gereist", aux: "sein", hint: "Движение / путешествие" },
    { inf: "wandern", p2: "gewandert", aux: "sein", hint: "Движение / поход" },
    { inf: "schwimmen", p2: "geschwommen", aux: "sein", hint: "Движение / плавание" },
    { inf: "fallen", p2: "gefallen", aux: "sein", hint: "Движение / падение" },
    { inf: "aufstehen", p2: "aufgestanden", aux: "sein", hint: "Смена состояния / вставание" },
    { inf: "einschlafen", p2: "eingeschlafen", aux: "sein", hint: "Смена состояния / засыпание" },
    { inf: "aufwachen", p2: "aufgewacht", aux: "sein", hint: "Смена состояния / просыпание" },
    { inf: "werden", p2: "geworden", aux: "sein", hint: "Смена состояния / становление" },
    { inf: "sein", p2: "gewesen", aux: "sein", hint: "Состояние / быть" },
    { inf: "bleiben", p2: "geblieben", aux: "sein", hint: "Состояние / оставаться" },
    { inf: "machen", p2: "gemacht", aux: "haben", hint: "Обычное действие" },
    { inf: "kaufen", p2: "gekauft", aux: "haben", hint: "Переходный глагол / покупка" },
    { inf: "lernen", p2: "gelernt", aux: "haben", hint: "Обычное действие / учеба" },
    { inf: "lesen", p2: "gelesen", aux: "haben", hint: "Переходный / чтение" },
    { inf: "schreiben", p2: "geschrieben", aux: "haben", hint: "Переходный / письмо" },
    { inf: "essen", p2: "gegessen", aux: "haben", hint: "Переходный / еда" },
    { inf: "trinken", p2: "getrunken", aux: "haben", hint: "Переходный / питье" },
    { inf: "sehen", p2: "gesehen", aux: "haben", hint: "Переходный / видение" },
    { inf: "sprechen", p2: "gesprochen", aux: "haben", hint: "Действие / разговор" },
    { inf: "arbeiten", p2: "gearbeitet", aux: "haben", hint: "Действие / работа" },
    { inf: "spielen", p2: "gespielt", aux: "haben", hint: "Действие / игра" },
    { inf: "kochen", p2: "gekocht", aux: "haben", hint: "Действие / готовка" },
    { inf: "hören", p2: "gehört", aux: "haben", hint: "Переходный / слушание" },
    { inf: "verstehen", p2: "verstanden", aux: "haben", hint: "Действие / понимание" },
    { inf: "besuchen", p2: "besucht", aux: "haben", hint: "Неотделяемая приставка / посещение" }
];

let qId = 1;
while (perfektQuestions.length < 500) {
    const v = perfectVerbsData[qId % perfectVerbsData.length];
    const typeVariant = qId % 4;

    if (typeVariant === 0) {
        const isSein = v.aux === "sein";
        perfektQuestions.push({
            q: `Выберите правильный вспомогательный глагол: "Ich _____ gestern nach Berlin ${v.p2}." (${v.hint})`,
            opts: [
                { txt: isSein ? "habe" : "sind", correct: false, exp: `Неверно. Глагол '${v.inf}' требует вспомогательный глагол ${v.aux}.` },
                { txt: isSein ? "bin" : "haben", correct: true, exp: `Верно! Глагол '${v.inf}' образует Perfekt с '${v.aux}' (${v.hint}).` },
                { txt: "war", correct: false, exp: "War — это форма Präteritum, а не вспомогательный глагол Perfekt." }
            ]
        });
    } else if (typeVariant === 1) {
        const wrongP2 = v.p2.endsWith("t") ? v.p2 + "en" : v.p2 + "t";
        perfektQuestions.push({
            q: `Какая форма Partizip II правильная для глагола '${v.inf}' в предложении "Wir haben das Buch ____."?`,
            opts: [
                { txt: v.p2, correct: true, exp: `Правильно! Partizip II от '${v.inf}' — это '${v.p2}'.` },
                { txt: wrongP2, correct: false, exp: `Ошибка. '${wrongP2}' — неверная форма.` },
                { txt: v.inf, correct: false, exp: `Ошибка. Это инфинитив, а нужен Partizip II.` }
            ]
        });
    } else if (typeVariant === 2) {
        const pron = qId % 2 === 0 ? "Er" : "Sie";
        const correctAux = v.aux === "sein" ? "ist" : "hat";
        const wrongAux = v.aux === "sein" ? "hat" : "ist";
        perfektQuestions.push({
            q: `Соберите предложение правильно: "${pron} _____ nach Hause ${v.p2}."`,
            opts: [
                { txt: correctAux, correct: true, exp: `Верно! С местоимением '${pron}' используется '${correctAux}' (${v.hint}).` },
                { txt: wrongAux, correct: false, exp: `Ошибка. Глагол '${v.inf}' работает с другим вспомогательным глаголом.` },
                { txt: "wird", correct: false, exp: "Werden здесь грамматически не подходит." }
            ]
        });
    } else {
        perfektQuestions.push({
            q: `Где в предложении с Perfekt обычно стоит форма Partizip II (${v.p2})?`,
            opts: [
                { txt: "В самом конце предложения", correct: true, exp: "Совершенно верно! В Perfekt смысловой глагол в Partizip II улетает в конец." },
                { txt: "Сразу после подлежащего на 2-м месте", correct: false, exp: "На 2-м месте стоит вспомогательный глагол (haben/sein)." },
                { txt: "Перед вспомогательным глаголом", correct: false, exp: "Неверный порядок слов." }
            ]
        });
    }
    qId++;
}