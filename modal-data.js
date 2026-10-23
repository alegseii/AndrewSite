// Тренажёр «Модальные глаголы» (A1): формы Präsens, порядок слов, значение.
// Формат записи для движка в index.html: { q, opts: [{ txt, correct, exp }, ...] }
const modalQuestions = [];

(function () {
    const LABEL = {
        ich: "ich", du: "du", er: "er / sie / es",
        wir: "wir", ihr: "ihr", sie: "sie (они) / Sie"
    };

    const SUBJECTS = [
        { s: "Ich",             key: "ich" },
        { s: "Du",              key: "du" },
        { s: "Er",              key: "er" },
        { s: "Meine Schwester", key: "er" },
        { s: "Wir",             key: "wir" },
        { s: "Ihr",             key: "ihr" },
        { s: "Die Kinder",      key: "sie" }
    ];

    const MODALS = {
        können:  { ru: "мочь, уметь",
                   f: { ich: "kann",   du: "kannst",   er: "kann",   wir: "können",  ihr: "könnt",   sie: "können" } },
        müssen:  { ru: "быть должным",
                   f: { ich: "muss",   du: "musst",    er: "muss",   wir: "müssen",  ihr: "müsst",   sie: "müssen" } },
        wollen:  { ru: "хотеть",
                   f: { ich: "will",   du: "willst",   er: "will",   wir: "wollen",  ihr: "wollt",   sie: "wollen" } },
        dürfen:  { ru: "можно, иметь право",
                   f: { ich: "darf",   du: "darfst",   er: "darf",   wir: "dürfen",  ihr: "dürft",   sie: "dürfen" } },
        sollen:  { ru: "следует, должен (по указанию)",
                   f: { ich: "soll",   du: "sollst",   er: "soll",   wir: "sollen",  ihr: "sollt",   sie: "sollen" } },
        möchten: { ru: "хотел(а) бы",
                   f: { ich: "möchte", du: "möchtest", er: "möchte", wir: "möchten", ihr: "möchtet", sie: "möchten" } }
    };

    // modal, mid (слова между модальным глаголом и инфинитивом), inf (инфинитив в конце)
    const FRAMES = [
        { m: "können",  mid: "gut",           inf: "schwimmen" },
        { m: "können",  mid: "heute Abend",   inf: "kommen" },
        { m: "können",  mid: "sehr gut",      inf: "Deutsch sprechen" },
        { m: "können",  mid: "morgen",        inf: "mitkommen" },
        { m: "müssen",  mid: "heute",         inf: "arbeiten" },
        { m: "müssen",  mid: "früh",          inf: "aufstehen" },
        { m: "müssen",  mid: "jetzt",         inf: "nach Hause gehen" },
        { m: "müssen",  mid: "noch",          inf: "Hausaufgaben machen" },
        { m: "wollen",  mid: "nächstes Jahr", inf: "nach Spanien fahren" },
        { m: "wollen",  mid: "heute",         inf: "Pizza essen" },
        { m: "wollen",  mid: "später",        inf: "Arzt werden" },
        { m: "dürfen",  mid: "hier nicht",    inf: "parken" },
        { m: "dürfen",  mid: "heute",         inf: "länger schlafen" },
        { m: "dürfen",  mid: "im Kino",       inf: "nichts essen" },
        { m: "sollen",  mid: "viel",          inf: "Obst essen" },
        { m: "sollen",  mid: "morgen",        inf: "den Arzt anrufen" },
        { m: "sollen",  mid: "mehr",          inf: "Wasser trinken" },
        { m: "möchten", mid: "gern",          inf: "einen Kaffee trinken" },
        { m: "möchten", mid: "heute",         inf: "ins Kino gehen" },
        { m: "möchten", mid: "bitte",         inf: "zahlen" }
    ];

    function personsOf(forms, txt) {
        return Object.keys(LABEL).filter(k => forms[k] === txt).map(k => LABEL[k]).join(", ");
    }

    // Тип 1: форма модального глагола
    function formQuestion(fr, subj) {
        const mod = MODALS[fr.m];
        const forms = mod.f;
        const correct = forms[subj.key];
        const seen = new Set([correct]);
        const note = (subj.key === "ich" || subj.key === "er")
            ? ` У ich и er / sie / es форма модального глагола одинаковая и без окончания.`
            : "";
        const opts = [{
            txt: correct, correct: true,
            exp: `Верно! ${fr.m} для «${subj.s}»: '${correct}'.${note}`
        }];
        const altOrder = { ich: "du", du: "er", er: "du", wir: "ihr", ihr: "wir", sie: "ihr" };
        const keys = [altOrder[subj.key], "wir", "du", "er", "ihr"];
        for (const k of keys) {
            if (opts.length === 3) break;
            const w = forms[k];
            if (!seen.has(w)) {
                seen.add(w);
                opts.push({
                    txt: w, correct: false,
                    exp: `Неверно. '${w}' — форма для «${personsOf(forms, w)}», а здесь нужна форма для «${LABEL[subj.key]}».`
                });
            }
        }
        if (opts.length < 3) {
            opts.push({ txt: fr.m, correct: false, exp: "Неверно. Это инфинитив, а нужна спрягаемая форма." });
        }
        return {
            q: `Вставьте модальный глагол в нужной форме (${fr.m} — ${mod.ru}): "${subj.s} ____ ${fr.mid} ${fr.inf}."`,
            opts: opts
        };
    }

    // Тип 2: порядок слов
    function orderQuestion(fr, subj) {
        const form = MODALS[fr.m].f[subj.key];
        return {
            q: `Выберите предложение с правильным порядком слов (${fr.m}):`,
            opts: [
                { txt: `${subj.s} ${form} ${fr.mid} ${fr.inf}.`, correct: true,
                  exp: "Верно! Модальный глагол на 2-м месте, смысловой глагол в инфинитиве уходит в самый конец." },
                { txt: `${subj.s} ${form} ${fr.inf} ${fr.mid}.`, correct: false,
                  exp: "Неверно. Инфинитив смыслового глагола должен стоять в самом конце предложения (рамочная конструкция)." },
                { txt: `${subj.s} ${fr.mid} ${form} ${fr.inf}.`, correct: false,
                  exp: "Неверно. Модальный глагол стоит на 2-м месте, сразу после подлежащего." }
            ]
        };
    }

    FRAMES.forEach((fr, fi) => {
        [0, 2, 4].forEach(o => modalQuestions.push(orderQuestion(fr, SUBJECTS[(fi + o) % 7])));
        [0, 3].forEach(o => modalQuestions.push(formQuestion(fr, SUBJECTS[(fi + o) % 7])));
        [1, 4, 5].forEach(o => modalQuestions.push(formQuestion(fr, SUBJECTS[(fi + o) % 7])));
    });

    // Тип 3: выбрать предложение по смыслу (особенно nicht müssen / nicht dürfen)
    const MEANING = [
        { ru: "Мне нельзя здесь курить.",
          ok: { s: "Ich darf hier nicht rauchen.", why: "nicht dürfen = нельзя." },
          bad: [{ s: "Ich muss hier nicht rauchen.", mean: "мне не нужно здесь курить" },
                { s: "Ich will hier nicht rauchen.", mean: "я не хочу здесь курить" }] },
        { ru: "Тебе не нужно приходить завтра.",
          ok: { s: "Du musst morgen nicht kommen.", why: "nicht müssen = не нужно, не обязан." },
          bad: [{ s: "Du darfst morgen nicht kommen.", mean: "тебе нельзя приходить завтра" },
                { s: "Du kannst morgen nicht kommen.", mean: "ты не можешь прийти завтра" }] },
        { ru: "Я хорошо умею готовить.",
          ok: { s: "Ich kann gut kochen.", why: "können = уметь, мочь." },
          bad: [{ s: "Ich muss gut kochen.", mean: "я должен хорошо готовить" },
                { s: "Ich will gut kochen.", mean: "я хочу хорошо готовить" }] },
        { ru: "Я хотел бы выпить стакан воды.",
          ok: { s: "Ich möchte ein Glas Wasser trinken.", why: "möchten = хотел бы (вежливо)." },
          bad: [{ s: "Ich muss ein Glas Wasser trinken.", mean: "я должен выпить стакан воды" },
                { s: "Ich darf ein Glas Wasser trinken.", mean: "мне можно выпить стакан воды" }] },
        { ru: "Врач говорит, что мне надо больше спать.",
          ok: { s: "Ich soll mehr schlafen.", why: "sollen = следует (по чьему-то совету или указанию)." },
          bad: [{ s: "Ich will mehr schlafen.", mean: "я хочу больше спать" },
                { s: "Ich kann mehr schlafen.", mean: "я могу больше спать" }] },
        { ru: "Мы хотим поехать в Италию.",
          ok: { s: "Wir wollen nach Italien fahren.", why: "wollen = хотеть (твёрдое намерение)." },
          bad: [{ s: "Wir müssen nach Italien fahren.", mean: "нам надо поехать в Италию" },
                { s: "Wir dürfen nach Italien fahren.", mean: "нам можно поехать в Италию" }] },
        { ru: "Ты можешь мне помочь?",
          ok: { s: "Kannst du mir helfen?", why: "können = мочь (возможность, просьба)." },
          bad: [{ s: "Musst du mir helfen?", mean: "ты обязан мне помочь?" },
                { s: "Willst du mir helfen?", mean: "ты хочешь мне помочь?" }] },
        { ru: "Здесь можно фотографировать.",
          ok: { s: "Hier darf man fotografieren.", why: "dürfen = можно, разрешено." },
          bad: [{ s: "Hier muss man fotografieren.", mean: "здесь нужно фотографировать (обязательно)" },
                { s: "Hier will man fotografieren.", mean: "здесь хотят фотографировать" }] },
        { ru: "Мне надо идти на работу.",
          ok: { s: "Ich muss zur Arbeit gehen.", why: "müssen = должен, надо." },
          bad: [{ s: "Ich darf zur Arbeit gehen.", mean: "мне можно идти на работу" },
                { s: "Ich kann zur Arbeit gehen.", mean: "я могу пойти на работу" }] },
        { ru: "Дети должны сделать уроки (так велели).",
          ok: { s: "Die Kinder sollen die Hausaufgaben machen.", why: "sollen = должны по указанию." },
          bad: [{ s: "Die Kinder können die Hausaufgaben machen.", mean: "дети умеют или могут делать уроки" },
                { s: "Die Kinder wollen die Hausaufgaben machen.", mean: "дети хотят делать уроки" }] },
        { ru: "Он не умеет плавать.",
          ok: { s: "Er kann nicht schwimmen.", why: "nicht können = не уметь, не мочь." },
          bad: [{ s: "Er darf nicht schwimmen.", mean: "ему нельзя плавать" },
                { s: "Er muss nicht schwimmen.", mean: "ему не нужно плавать" }] },
        { ru: "Можно мне здесь сидеть?",
          ok: { s: "Darf ich hier sitzen?", why: "dürfen в вопросе = просьба о разрешении." },
          bad: [{ s: "Muss ich hier sitzen?", mean: "я обязан здесь сидеть?" },
                { s: "Soll ich hier sitzen?", mean: "мне (по указанию) здесь сидеть?" }] },
        { ru: "Я не хочу сегодня работать.",
          ok: { s: "Ich will heute nicht arbeiten.", why: "nicht wollen = не хотеть." },
          bad: [{ s: "Ich muss heute nicht arbeiten.", mean: "мне не нужно сегодня работать" },
                { s: "Ich darf heute nicht arbeiten.", mean: "мне нельзя сегодня работать" }] },
        { ru: "Нам нельзя опаздывать.",
          ok: { s: "Wir dürfen nicht zu spät kommen.", why: "nicht dürfen = нельзя." },
          bad: [{ s: "Wir müssen nicht zu spät kommen.", mean: "нам не нужно опаздывать" },
                { s: "Wir wollen nicht zu spät kommen.", mean: "мы не хотим опаздывать" }] },
        { ru: "Она хотела бы заказать кофе.",
          ok: { s: "Sie möchte einen Kaffee bestellen.", why: "möchten = хотела бы." },
          bad: [{ s: "Sie muss einen Kaffee bestellen.", mean: "она должна заказать кофе" },
                { s: "Sie darf einen Kaffee bestellen.", mean: "ей можно заказать кофе" }] },
        { ru: "Ты должен позвонить маме.",
          ok: { s: "Du musst deine Mutter anrufen.", why: "müssen = должен, надо." },
          bad: [{ s: "Du kannst deine Mutter anrufen.", mean: "ты можешь позвонить маме" },
                { s: "Du willst deine Mutter anrufen.", mean: "ты хочешь позвонить маме" }] }
    ];

    MEANING.forEach(it => {
        const opts = [{ txt: it.ok.s, correct: true, exp: `Верно! ${it.ok.why}` }];
        it.bad.forEach(b => opts.push({
            txt: b.s, correct: false,
            exp: `Неверно. Это значит «${b.mean}», а в задании: «${it.ru}»`
        }));
        modalQuestions.push({ q: `Как сказать по-немецки: «${it.ru}»`, opts: opts });
    });
})();
