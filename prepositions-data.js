// Тренажёр «Предлоги» (A1): место, слитные формы, время, падеж после предлога, Wo? / Wohin?
// Формат записи для движка в index.html: { q, opts: [{ txt, correct, exp }, ...] }
const prepositionQuestions = [];

(function () {
    const GENDER_RU = { m: "мужского", f: "женского", n: "среднего" };
    const GENDER_ART = { m: "der", f: "die", n: "das" };

    // Краткие описания предлогов для пояснений к неправильным вариантам
    const DESC = {
        nach: "направление в город или страну без артикля, а также nach Hause («домой»)",
        zu: "направление к человеку или в учреждение; zu Hause = «дома»",
        in: "внутри чего-то: Wo? — in + Dativ, Wohin? — in + Akkusativ",
        aus: "откуда: из страны, города, помещения",
        von: "откуда: от человека или точки (vom Arzt); также «от кого» (подарок)",
        bei: "нахождение у человека или в организации (beim Arzt, bei einer Bank)",
        mit: "вместе с кем-то, при помощи чего-то (+ Dativ)",
        für: "для, ради (+ Akkusativ)",
        ohne: "без (+ Akkusativ)",
        durch: "через, сквозь (+ Akkusativ)",
        gegen: "против (+ Akkusativ)",
        auf: "на поверхности; warten auf = ждать",
        an: "у, возле, к (двойной предлог)",
        zum: "zu + dem: направление к человеку или месту (мужской и средний род)",
        zur: "zu + der: направление к человеку или месту (женский род)",
        beim: "bei + dem: где? у кого? (beim Arzt)",
        vom: "von + dem: откуда? от кого? (vom Arzt)",
        im: "in + dem: где? внутри (im Kino, im Zentrum)",
        ins: "in + das: куда? в (ins Kino)",
        am: "an + dem: где? у, на (am Bahnhof, am Meer)",
        ans: "an + das: куда? к (ans Meer)"
    };

    const TIME_DESC = {
        um: "точное время (um 8 Uhr)",
        am: "дни недели, части дня, даты, выходные (am Montag, am Morgen, am 5. Mai, am Wochenende)",
        im: "месяцы и времена года (im Juli, im Winter)",
        in: "через какое-то время (in zwei Wochen); исключение — in der Nacht",
        vor: "«назад» (vor drei Jahren) или «перед» (vor dem Essen)",
        nach: "после (nach der Arbeit)",
        seit: "с каких пор, уже какое-то время (seit drei Jahren; глагол в Präsens)",
        bis: "до какого момента (von Montag bis Freitag)",
        ab: "начиная с (ab Montag)",
        "in der": "ночью: исключение, говорят in der Nacht",
        "Am": "дни недели, части дня, даты, выходные",
        "Im": "месяцы и времена года",
        "Um": "точное время",
        "Ab": "начиная с"
    };

    function fillQuestion(prefix, sentence, hint, correct, wrongs, why, dict) {
        const q = `${prefix}${hint ? " (" + hint + ")" : ""}: "${sentence}"`;
        const opts = [{ txt: correct, correct: true, exp: `Верно! ${why}` }];
        wrongs.forEach(w => opts.push({
            txt: w, correct: false,
            exp: `Неверно. '${w}' — ${dict[w] || "другое значение"}. Здесь: ${why}`
        }));
        return { q: q, opts: opts };
    }

    // 1. Предлоги места и направления
    const PLACE = [
        { s: "Ich fahre morgen ____ Berlin.",          h: "Wohin?",  ok: "nach", bad: ["in", "zu"],   why: "город без артикля, направление: nach." },
        { s: "Wir fliegen ____ Spanien.",              h: "Wohin?",  ok: "nach", bad: ["in", "zu"],   why: "страна без артикля, направление: nach." },
        { s: "Er kommt ____ Italien.",                 h: "Woher?",  ok: "aus",  bad: ["von", "nach"], why: "откуда (страна): aus." },
        { s: "Sie wohnt ____ München.",                h: "Wo?",     ok: "in",   bad: ["nach", "aus"], why: "где (город): in." },
        { s: "Ich gehe heute ____ meinem Arzt.",       h: "Wohin?",  ok: "zu",   bad: ["in", "bei"],   why: "направление к человеку: zu." },
        { s: "Ich bin heute ____ meinem Arzt.",        h: "Wo?",     ok: "bei",  bad: ["zu", "von"],   why: "нахождение у человека: bei." },
        { s: "Ich komme gerade ____ meinem Arzt.",     h: "Woher?",  ok: "von",  bad: ["bei", "zu"],   why: "откуда (от человека): von." },
        { s: "Wir fahren ____ Hause.",                 h: "Wohin?",  ok: "nach", bad: ["zu", "in"],    why: "«домой» — nach Hause." },
        { s: "Ich bleibe heute ____ Hause.",           h: "Wo?",     ok: "zu",   bad: ["nach", "in"],  why: "«дома» — zu Hause." },
        { s: "Ich komme ____ der Schweiz.",            h: "Woher?",  ok: "aus",  bad: ["von", "nach"], why: "откуда (страна): aus der Schweiz." },
        { s: "Wir fliegen ____ die Türkei.",           h: "Wohin?",  ok: "in",   bad: ["nach", "zu"],  why: "страна с артиклем, направление: in die Türkei." },
        { s: "Sie lebt ____ der Türkei.",              h: "Wo?",     ok: "in",   bad: ["nach", "aus"], why: "где (страна с артиклем): in der Türkei." },
        { s: "Das Kind ist ____ der Schule.",          h: "Wo?",     ok: "in",   bad: ["zu", "nach"],  why: "где (помещение): in der Schule." },
        { s: "Das Kind kommt ____ der Schule.",        h: "Woher?",  ok: "aus",  bad: ["in", "nach"],  why: "откуда (помещение): aus der Schule." },
        { s: "Ich arbeite ____ einer Bank.",           h: "Wo?",     ok: "bei",  bad: ["zu", "nach"],  why: "работать в организации: bei einer Bank." },
        { s: "Ich fahre ____ dem Bus.",                h: "Womit?",  ok: "mit",  bad: ["bei", "von"],  why: "транспорт: mit + Dativ." },
        { s: "Ich spiele ____ meinen Freunden Fußball.", h: "С кем?", ok: "mit",  bad: ["bei", "zu"],   why: "вместе с кем-то: mit + Dativ." },
        { s: "Das Geschenk ist ____ meiner Mutter.",   h: "От кого?", ok: "von", bad: ["mit", "zu"],   why: "от кого: von + Dativ." },
        { s: "Das Geschenk ist ____ meine Mutter.",    h: "для",     ok: "für",  bad: ["mit", "von"],  why: "для кого: für + Akkusativ." },
        { s: "Ich trinke Kaffee ____ Zucker.",         h: "без",     ok: "ohne", bad: ["mit", "für"],  why: "без чего-то: ohne + Akkusativ." },
        { s: "Wir gehen ____ den Park.",               h: "через",   ok: "durch", bad: ["für", "gegen"], why: "через что-то: durch + Akkusativ." },
        { s: "Ich bin ____ das Rauchen.",              h: "против",  ok: "gegen", bad: ["für", "ohne"], why: "против чего-то: gegen + Akkusativ." },
        { s: "Ich warte ____ den Bus.",                h: "ждать",   ok: "auf",  bad: ["für", "an"],   why: "warten auf + Akkusativ." }
    ];
    PLACE.forEach(p => prepositionQuestions.push(
        fillQuestion("Вставьте предлог", p.s, p.h, p.ok, p.bad, p.why, DESC)));

    // 2. Слитные формы предлога с артиклем
    const CONTRACT = [
        { s: "Wir sind ____ Kino.",                   h: "Wo?",     ok: "im",  bad: ["ins", "zum"],  why: "где: in + dem = im." },
        { s: "Wir gehen ____ Kino.",                  h: "Wohin?",  ok: "ins", bad: ["im", "beim"],  why: "куда: in + das = ins." },
        { s: "Ich fahre ____ Bahnhof.",               h: "Wohin?",  ok: "zum", bad: ["im", "beim"],  why: "к чему-то: zu + dem = zum." },
        { s: "Ich warte ____ Bahnhof.",               h: "Wo?",     ok: "am",  bad: ["zum", "vom"],  why: "где (у, возле): an + dem = am." },
        { s: "Ich komme gerade ____ Supermarkt.",     h: "Woher?",  ok: "vom", bad: ["beim", "am"],  why: "откуда: von + dem = vom." },
        { s: "Ich bin ____ Arzt.",                    h: "Wo?",     ok: "beim", bad: ["vom", "zum"], why: "у кого: bei + dem = beim." },
        { s: "Ich gehe ____ Arzt.",                   h: "Wohin?",  ok: "zum", bad: ["beim", "vom"], why: "к кому: zu + dem = zum." },
        { s: "Ich gehe ____ Post.",                   h: "Wohin?",  ok: "zur", bad: ["zum", "beim"], why: "die Post — женский род: zu + der = zur." },
        { s: "Ich gehe ____ Bank.",                   h: "Wohin?",  ok: "zur", bad: ["zum", "beim"], why: "die Bank — женский род: zu + der = zur." },
        { s: "Wir fahren ____ Meer.",                 h: "Wohin?",  ok: "ans", bad: ["am", "im"],    why: "куда: an + das = ans." },
        { s: "Wir sind ____ Meer.",                   h: "Wo?",     ok: "am",  bad: ["ans", "zum"],  why: "где: an + dem = am." },
        { s: "Wir wohnen ____ Zentrum.",              h: "Wo?",     ok: "im",  bad: ["ins", "am"],   why: "где: in + dem = im." },
        { s: "Er kommt ____ Training.",               h: "Woher?",  ok: "vom", bad: ["beim", "zum"], why: "откуда: von + dem = vom." },
        { s: "Sie arbeitet ____ Bäcker.",             h: "Wo?",     ok: "beim", bad: ["zum", "vom"], why: "у кого: bei + dem = beim." }
    ];
    CONTRACT.forEach(p => prepositionQuestions.push(
        fillQuestion("Вставьте слитную форму", p.s, p.h, p.ok, p.bad, p.why, DESC)));

    // 3. Предлоги времени
    const TIME = [
        { s: "Der Kurs beginnt ____ 9 Uhr.",                     h: "Wann?",    ok: "um",  bad: ["am", "im"],   why: "точное время: um + Uhrzeit." },
        { s: "Ich habe ____ Montag Deutschkurs.",                h: "Wann?",    ok: "am",  bad: ["um", "im"],   why: "день недели: am Montag." },
        { s: "Wir fahren ____ Juli nach Italien.",               h: "Wann?",    ok: "im",  bad: ["am", "um"],   why: "месяц: im Juli." },
        { s: "____ Winter ist es kalt.",                         h: "Wann?",    ok: "Im",  bad: ["Am", "Um"],   why: "время года: im Winter." },
        { s: "Ich habe ____ 5. Mai Geburtstag.",                 h: "Wann?",    ok: "am",  bad: ["im", "um"],   why: "дата: am 5. Mai." },
        { s: "Ich stehe ____ Morgen früh auf.",                  h: "Wann?",    ok: "am",  bad: ["um", "im"],   why: "часть дня: am Morgen." },
        { s: "____ Wochenende fahre ich zu meinen Eltern.",      h: "Wann?",    ok: "Am",  bad: ["Im", "Um"],   why: "выходные: am Wochenende." },
        { s: "Ich schlafe ____ Nacht.",                          h: "Wann?",    ok: "in der", bad: ["am", "im"], why: "исключение: in der Nacht." },
        { s: "Ich arbeite von Montag ____ Freitag.",             h: "до",       ok: "bis", bad: ["ab", "seit"], why: "от ... до: von ... bis." },
        { s: "Ich habe ihn ____ drei Jahren gesehen.",           h: "назад",    ok: "vor", bad: ["seit", "in"], why: "«три года назад»: vor drei Jahren." },
        { s: "Ich wohne schon ____ drei Jahren hier.",           h: "уже",      ok: "seit", bad: ["vor", "in"], why: "«уже три года» (и до сих пор): seit drei Jahren." },
        { s: "Wir sehen uns ____ zwei Wochen.",                  h: "через",    ok: "in",  bad: ["vor", "seit"], why: "«через две недели»: in zwei Wochen." },
        { s: "Ich esse ____ der Arbeit zu Abend.",               h: "после",    ok: "nach", bad: ["seit", "um"], why: "после чего-то: nach der Arbeit." },
        { s: "____ Montag haben wir frei.",                      h: "начиная с", ok: "Ab", bad: ["Um", "Im"],   why: "начиная с: ab Montag." }
    ];
    TIME.forEach(p => prepositionQuestions.push(
        fillQuestion("Вставьте предлог времени", p.s, p.h, p.ok, p.bad, p.why, TIME_DESC)));

    // 4. Какой падеж требует предлог
    const AKK_OPT = "Akkusativ";
    const DAT_OPT = "Dativ";
    const TWO_OPT = "Зависит от вопроса: Wo? — Dativ, Wohin? — Akkusativ";
    const CASE_OF = [
        { p: "aus",      ru: "из",              c: DAT_OPT, ex: "Ich komme aus der Schule." },
        { p: "bei",      ru: "у, при",          c: DAT_OPT, ex: "Ich wohne bei meiner Oma." },
        { p: "mit",      ru: "с",               c: DAT_OPT, ex: "Ich fahre mit dem Bus." },
        { p: "nach",     ru: "после; в (город)", c: DAT_OPT, ex: "Nach dem Kurs gehe ich nach Hause." },
        { p: "seit",     ru: "с, уже (срок)",   c: DAT_OPT, ex: "Ich lerne seit einem Jahr Deutsch." },
        { p: "von",      ru: "от, из",          c: DAT_OPT, ex: "Das Geschenk ist von meiner Mutter." },
        { p: "zu",       ru: "к",               c: DAT_OPT, ex: "Ich gehe zu meinem Freund." },
        { p: "für",      ru: "для",             c: AKK_OPT, ex: "Das Geschenk ist für meinen Vater." },
        { p: "durch",    ru: "через",           c: AKK_OPT, ex: "Wir gehen durch den Park." },
        { p: "gegen",    ru: "против",          c: AKK_OPT, ex: "Ich bin gegen den Plan." },
        { p: "ohne",     ru: "без",             c: AKK_OPT, ex: "Er kommt ohne seinen Bruder." },
        { p: "um",       ru: "вокруг; в (время)", c: AKK_OPT, ex: "Wir sitzen um den Tisch." },
        { p: "in",       ru: "в",               c: TWO_OPT, ex: "Ich bin in der Schule. / Ich gehe in die Schule." },
        { p: "an",       ru: "у, на (вертикаль)", c: TWO_OPT, ex: "Das Bild hängt an der Wand. / Ich hänge das Bild an die Wand." },
        { p: "auf",      ru: "на (поверхность)", c: TWO_OPT, ex: "Das Buch liegt auf dem Tisch. / Ich lege das Buch auf den Tisch." },
        { p: "vor",      ru: "перед",           c: TWO_OPT, ex: "Das Auto steht vor dem Haus. / Ich stelle das Auto vor das Haus." },
        { p: "hinter",   ru: "за, позади",      c: TWO_OPT, ex: "Der Ball liegt hinter der Tür. / Ich lege den Ball hinter die Tür." },
        { p: "neben",    ru: "рядом с",         c: TWO_OPT, ex: "Die Lampe steht neben dem Schrank. / Ich stelle die Lampe neben den Schrank." },
        { p: "über",     ru: "над",             c: TWO_OPT, ex: "Das Bild hängt über dem Bett. / Ich hänge das Bild über das Bett." },
        { p: "unter",    ru: "под",             c: TWO_OPT, ex: "Die Katze sitzt unter dem Stuhl. / Die Katze läuft unter den Stuhl." },
        { p: "zwischen", ru: "между",           c: TWO_OPT, ex: "Ich sitze zwischen dem Lehrer und dem Schüler. / Ich setze mich zwischen die Kinder." }
    ];
    CASE_OF.forEach(item => {
        const reasons = {
            [DAT_OPT]: "всегда Dativ",
            [AKK_OPT]: "всегда Akkusativ",
            [TWO_OPT]: "двойной предлог (Wechselpräposition)"
        };
        const opts = [AKK_OPT, DAT_OPT, TWO_OPT].map(c => ({
            txt: c,
            correct: c === item.c,
            exp: c === item.c
                ? `Верно! '${item.p}' — ${reasons[item.c]}. Пример: ${item.ex}`
                : `Неверно. '${item.p}' — ${reasons[item.c]}. Пример: ${item.ex}`
        }));
        prepositionQuestions.push({
            q: `Какой падеж требует предлог '${item.p}' (${item.ru})?`,
            opts: opts
        });
    });

    // 5. Артикль после предлога с постоянным падежом
    const AFTER = [
        { s: "Ich fahre mit ____ Bus.",                    p: "mit",   c: "Dativ", noun: "Bus",       ok: "dem",    bad: ["den", "der"] },
        { s: "Ich komme aus ____ Schule.",                 p: "aus",   c: "Dativ", noun: "Schule",    ok: "der",    bad: ["die", "dem"] },
        { s: "Nach ____ Kurs gehe ich nach Hause.",        p: "nach",  c: "Dativ", noun: "Kurs",      ok: "dem",    bad: ["den", "der"] },
        { s: "Ich wohne bei ____ Oma.",                    p: "bei",   c: "Dativ", noun: "Oma",       ok: "meiner", bad: ["meine", "meinem"] },
        { s: "Ich lerne seit ____ Jahr Deutsch.",          p: "seit",  c: "Dativ", noun: "Jahr",      ok: "einem",  bad: ["einen", "ein"] },
        { s: "Das Geschenk ist von ____ Mutter.",          p: "von",   c: "Dativ", noun: "Mutter",    ok: "meiner", bad: ["meine", "meinem"] },
        { s: "Ich gehe zu ____ Lehrerin.",                 p: "zu",    c: "Dativ", noun: "Lehrerin",  ok: "meiner", bad: ["meine", "meinem"] },
        { s: "Er kommt aus ____ Haus.",                    p: "aus",   c: "Dativ", noun: "Haus",      ok: "dem",    bad: ["das", "der"] },
        { s: "Ich spiele mit ____ Kind.",                  p: "mit",   c: "Dativ", noun: "Kind",      ok: "dem",    bad: ["das", "den"] },
        { s: "Wir gehen zu ____ Arzt.",                    p: "zu",    c: "Dativ", noun: "Arzt",      ok: "meinem", bad: ["meinen", "mein"] },
        { s: "Das Geschenk ist für ____ Mutter.",          p: "für",   c: "Akkusativ", noun: "Mutter", ok: "meine",  bad: ["meiner", "meinen"] },
        { s: "Wir gehen durch ____ Park.",                 p: "durch", c: "Akkusativ", noun: "Park",   ok: "den",    bad: ["dem", "der"] },
        { s: "Er kommt ohne ____ Bruder.",                 p: "ohne",  c: "Akkusativ", noun: "Bruder", ok: "seinen", bad: ["seinem", "sein"] },
        { s: "Wir sitzen um ____ Tisch.",                  p: "um",    c: "Akkusativ", noun: "Tisch",  ok: "den",    bad: ["dem", "der"] },
        { s: "Ich spiele gegen ____ Lehrer.",              p: "gegen", c: "Akkusativ", noun: "Lehrer", ok: "den",    bad: ["dem", "der"] },
        { s: "Der Weg geht durch ____ Stadt.",             p: "durch", c: "Akkusativ", noun: "Stadt",  ok: "die",    bad: ["der", "dem"] },
        { s: "Ich kaufe ein Geschenk für ____ Freund.",    p: "für",   c: "Akkusativ", noun: "Freund", ok: "meinen", bad: ["meinem", "mein"] },
        { s: "Das ist ein Geschenk für ____ Kind.",        p: "für",   c: "Akkusativ", noun: "Kind",   ok: "das",    bad: ["dem", "den"] }
    ];
    AFTER.forEach(it => {
        const opts = [{ txt: it.ok, correct: true,
            exp: `Верно! '${it.p}' всегда требует ${it.c}: ${it.ok} ${it.noun}.` }];
        it.bad.forEach(w => opts.push({ txt: w, correct: false,
            exp: `Неверно. '${it.p}' всегда требует ${it.c}, нужна форма '${it.ok}' (${it.ok} ${it.noun}). Форма '${w}' сюда не подходит.` }));
        prepositionQuestions.push({
            q: `Вставьте нужную форму после предлога '${it.p}': "${it.s}"`,
            opts: opts
        });
    });

    // 6. Wo? (Dativ) или Wohin? (Akkusativ) с двойными предлогами
    const ARTS = {
        dat: { m: "dem", f: "der", n: "dem" },
        akk: { m: "den", f: "die", n: "das" }
    };
    const FOREIGN = {           // артикль другого рода в том же падеже
        dat: { m: "der", f: "dem", n: "der" },
        akk: { m: "die", f: "das", n: "den" }
    };
    const TWO = [
        // Wo? — положение
        { s: "Das Buch liegt auf ____ Tisch.",           prep: "auf",    g: "m", noun: "Tisch",      verb: "liegen",  wo: true },
        { s: "Die Katze sitzt unter ____ Stuhl.",        prep: "unter",  g: "m", noun: "Stuhl",      verb: "sitzen",  wo: true },
        { s: "Das Auto steht vor ____ Haus.",            prep: "vor",    g: "n", noun: "Haus",       verb: "stehen",  wo: true },
        { s: "Der Hund liegt neben ____ Sofa.",          prep: "neben",  g: "n", noun: "Sofa",       verb: "liegen",  wo: true },
        { s: "Das Bild hängt über ____ Bett.",           prep: "über",   g: "n", noun: "Bett",       verb: "hängen",  wo: true },
        { s: "Die Tasche steht neben ____ Tür.",         prep: "neben",  g: "f", noun: "Tür",        verb: "stehen",  wo: true },
        { s: "Der Ball liegt hinter ____ Tür.",          prep: "hinter", g: "f", noun: "Tür",        verb: "liegen",  wo: true },
        { s: "Das Kind sitzt auf ____ Bank.",            prep: "auf",    g: "f", noun: "Bank",       verb: "sitzen",  wo: true },
        { s: "Die Blumen stehen auf ____ Fensterbank.",  prep: "auf",    g: "f", noun: "Fensterbank", verb: "stehen", wo: true },
        { s: "Das Handy liegt unter ____ Zeitung.",      prep: "unter",  g: "f", noun: "Zeitung",    verb: "liegen",  wo: true },
        { s: "Der Mann steht vor ____ Bahnhof.",         prep: "vor",    g: "m", noun: "Bahnhof",    verb: "stehen",  wo: true },
        { s: "Der Computer steht neben ____ Fenster.",   prep: "neben",  g: "n", noun: "Fenster",    verb: "stehen",  wo: true },
        { s: "Der Schlüssel liegt hinter ____ Schrank.", prep: "hinter", g: "m", noun: "Schrank",    verb: "liegen",  wo: true },
        // Wohin? — перемещение
        { s: "Ich lege das Buch auf ____ Tisch.",        prep: "auf",    g: "m", noun: "Tisch",      verb: "legen",   wo: false },
        { s: "Ich stelle die Lampe neben ____ Schrank.", prep: "neben",  g: "m", noun: "Schrank",    verb: "stellen", wo: false },
        { s: "Er setzt sich auf ____ Stuhl.",            prep: "auf",    g: "m", noun: "Stuhl",      verb: "sich setzen", wo: false },
        { s: "Wir stellen das Auto vor ____ Haus.",      prep: "vor",    g: "n", noun: "Haus",       verb: "stellen", wo: false },
        { s: "Sie hängt das Bild über ____ Bett.",       prep: "über",   g: "n", noun: "Bett",       verb: "hängen",  wo: false },
        { s: "Ich stelle den Stuhl neben ____ Fenster.", prep: "neben",  g: "n", noun: "Fenster",    verb: "stellen", wo: false },
        { s: "Ich lege die Zeitung auf ____ Bank.",      prep: "auf",    g: "f", noun: "Bank",       verb: "legen",   wo: false },
        { s: "Er stellt die Tasche neben ____ Tür.",     prep: "neben",  g: "f", noun: "Tür",        verb: "stellen", wo: false },
        { s: "Ich hänge die Jacke hinter ____ Tür.",     prep: "hinter", g: "f", noun: "Tür",        verb: "hängen",  wo: false },
        { s: "Sie setzt sich auf ____ Bank.",            prep: "auf",    g: "f", noun: "Bank",       verb: "sich setzen", wo: false },
        { s: "Ich lege das Handy unter ____ Zeitung.",   prep: "unter",  g: "f", noun: "Zeitung",    verb: "legen",   wo: false },
        { s: "Ich stelle den Tisch vor ____ Fenster.",   prep: "vor",    g: "n", noun: "Fenster",    verb: "stellen", wo: false },
        { s: "Ich stelle den Koffer hinter ____ Schrank.", prep: "hinter", g: "m", noun: "Schrank",  verb: "stellen", wo: false }
    ];
    TWO.forEach(it => {
        const key = it.wo ? "dat" : "akk";
        const otherKey = it.wo ? "akk" : "dat";
        const correct = ARTS[key][it.g];
        const caseName = it.wo ? "Dativ" : "Akkusativ";
        const rule = it.wo
            ? `'${it.verb}' описывает положение (Wo?) → Dativ`
            : `'${it.verb}' описывает перемещение (Wohin?) → Akkusativ`;
        prepositionQuestions.push({
            q: `Выберите артикль: "${it.s}"`,
            opts: [
                { txt: correct, correct: true,
                  exp: `Верно! ${rule}: ${it.prep} + ${caseName} → ${correct} ${it.noun}.` },
                { txt: ARTS[otherKey][it.g], correct: false,
                  exp: `Неверно. '${ARTS[otherKey][it.g]}' — ${it.wo ? "Akkusativ" : "Dativ"}. ${rule}: ${correct} ${it.noun}.` },
                { txt: FOREIGN[key][it.g], correct: false,
                  exp: `Неверно. '${FOREIGN[key][it.g]}' — артикль другого рода, а ${it.noun} — ${GENDER_RU[it.g]} рода (${GENDER_ART[it.g]} ${it.noun}). Правильно: ${correct} ${it.noun}.` }
            ]
        });
    });
})();
