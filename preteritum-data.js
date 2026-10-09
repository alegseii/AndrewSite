// Автоматически сгенерированная база из 500 вопросов по теме Präteritum (А1-А2)
const prateritumQuestions = [];

const preteritumVerbsData = [
    // Вспомогательные и модальные глаголы (основа для A1-A2)
    { inf: "sein", prateritum: "war", hint: "Вспомогательный / быть" },
    { inf: "haben", prateritum: "hatte", hint: "Вспомогательный / иметь" },
    { inf: "werden", prateritum: "wurde", hint: "Вспомогательный / становиться" },
    { inf: "können", prateritum: "konnte", hint: "Модальный / мочь" },
    { inf: "müssen", prateritum: "musste", hint: "Модальный / быть должным" },
    { inf: "wollen", prateritum: "wollte", hint: "Модальный / хотеть" },
    { inf: "sollen", prateritum: "sollte", hint: "Модальный / следовать" },
    { inf: "dürfen", prateritum: "durfte", hint: "Модальный / иметь разрешение" },
    { inf: "mögen", prateritum: "mochte", hint: "Модальный / любить, нравиться" },

    // Частые смысловые глаголы
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
    
    // Регулярные (слабые) глаголы
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
        // Тип 1: Выбор формы Präteritum для местоимения ich / er / sie / es
        const wrong1 = v.prateritum + "te";
        const wrong2 = v.inf;
        prateritumQuestions.push({
            q: `Какая форма Präteritum правильная для глагола '${v.inf}' с местоимением 'er / sie / ich'? (${v.hint})`,
            opts: [
                { txt: v.prateritum, correct: true, exp: `Верно! Präteritum от '${v.inf}' — это '${v.prateritum}'.` },
                { txt: wrong1, correct: false, exp: `Ошибка. '${wrong1}' — неверная форма.` },
                { txt: wrong2, correct: false, exp: `Ошибка. Это начальная форма (инфинитив).` }
            ]
        });
    } else if (typeVariant === 1) {
        // Тип 2: Контекстное предложение
        const pron = pId % 2 === 0 ? "Gestern _____ ich keine Zeit." : "Früher _____ er in Berlin.";
        const correctForm = pron.includes("Zeit") ? "hatte" : (v.prateritum === "war" ? "war" : v.prateritum);
        prateritumQuestions.push({
            q: `Выберите правильную форму в прошедшем времени (Präteritum): "${pron.replace('_____', '_____')}"`,
            opts: [
                { txt: v.prateritum, correct: true, exp: `Правильно! Здесь требуется форма '${v.prateritum}'.` },
                { txt: v.inf, correct: false, exp: `Неверно, инфинитив не используется как сказуемое в простом прошедшем времени.` },
                { txt: v.prateritum + "n", correct: false, exp: `Неверное окончание для этого лица.` }
            ]
        });
    } else {
        // Тип 3: Теоретический вопрос / отличие от Perfekt
        prateritumQuestions.push({
            q: `Для чего чаще всего используется время Präteritum на уровне A1–A2 в разговорной речи?`,
            opts: [
                { txt: "Для глаголов sein и haben, а также модальных глаголов", correct: true, exp: "Совершенно верно! В диалогах в Präteritum обычно используют именно sein, haben и модальники." },
                { txt: "Только для описания будущих событий", correct: false, exp: "Нет, Präteritum — это прошедшее время." },
                { txt: "Никогда не используется", correct: false, exp: "Используется очень активно в повествовании и с базовыми глаголами." }
            ]
        });
    }
    pId++;
}