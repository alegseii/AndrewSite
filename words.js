// База слов по модулям
const wordsData = [
    // --- Город, Транспорт и Ориентация (S. 44) ---
    { de: "die Ampel", pl: "die Ampeln", ru: "светофор", category: "Stadt & Verkehr" },
    { de: "die Anmeldung", pl: "die Anmeldungen", ru: "регистрация, запись", category: "Stadt & Verkehr" },
    { de: "die Auskunft", pl: "die Auskünfte", ru: "справочная, справка", category: "Stadt & Verkehr" },
    { de: "der Ausweis", pl: "die Ausweise", ru: "документ, удостоверение", category: "Stadt & Verkehr" },
    { de: "die Bahn", pl: "die Bahnen", ru: "поезд, железная дорога", category: "Stadt & Verkehr" },
    { de: "der Bahnhof", pl: "die Bahnhöfe", ru: "вокзал", category: "Stadt & Verkehr" },
    { de: "das Gehalt", pl: "die Gehälter", ru: "зарплата", category: "Stadt & Verkehr" },
    { de: "die Jugendherberge", pl: "die Jugendherbergen", ru: "хостел для молодёжи", category: "Stadt & Verkehr" },
    { de: "die Kantine", pl: "die Kantinen", ru: "столовая", category: "Stadt & Verkehr" },
    { de: "die Kirche", pl: "die Kirchen", ru: "церковь", category: "Stadt & Verkehr" },
    { de: "die Kreuzung", pl: "die Kreuzungen", ru: "перекрёсток", category: "Stadt & Verkehr" },
    { de: "der Pass", pl: "die Pässe", ru: "загранпаспорт", category: "Stadt & Verkehr" },
    { de: "die Richtung", pl: "die Richtungen", ru: "направление", category: "Stadt & Verkehr" },
    { de: "der Stadtplan", pl: "die Stadtpläne", ru: "карта города", category: "Stadt & Verkehr" },
    { de: "der Verkehr", pl: "без мн.ч.", ru: "транспорт, движение", category: "Stadt & Verkehr" },
    { de: "der Weg", pl: "die Wege", ru: "дорога, путь", category: "Stadt & Verkehr" },
    { de: "ankommen", pl: "kam an, angekommen", ru: "прибывать", category: "Stadt & Verkehr" },
    { de: "anschauen", pl: "schaute an, angeschaut", ru: "рассматривать", category: "Stadt & Verkehr" },
    { de: "aussteigen", pl: "stieg aus, ausgestiegen", ru: "выходить из транспорта", category: "Stadt & Verkehr" },
    { de: "besichtigen", pl: "besichtigte, besichtigt", ru: "осматривать (достопримечательности)", category: "Stadt & Verkehr" },
    { de: "erleben", pl: "erlebte, erlebt", ru: "переживать, испытывать", category: "Stadt & Verkehr" },
    { de: "halten", pl: "hielt, gehalten", ru: "останавливаться", category: "Stadt & Verkehr" },
    { de: "umsteigen", pl: "stieg um, umgestiegen", ru: "пересаживаться", category: "Stadt & Verkehr" },

    // --- Здоровье, Тело и Врачи (S. 68) ---
    { de: "der Arm", pl: "die Arme", ru: "рука (от плеча)", category: "Gesundheit" },
    { de: "der Arzt", pl: "die Ärzte", ru: "врач", category: "Gesundheit" },
    { de: "das Auge", pl: "die Augen", ru: "глаз", category: "Gesundheit" },
    { de: "der Bauch", pl: "die Bäuche", ru: "живот", category: "Gesundheit" },
    { de: "das Bein", pl: "die Beine", ru: "нога", category: "Gesundheit" },
    { de: "die Beschwerde", pl: "die Beschwerden", ru: "жалоба, боль", category: "Gesundheit" },
    { de: "die Brust", pl: "die Brüste", ru: "грудь", category: "Gesundheit" },
    { de: "das Fieber", pl: "без мн.ч.", ru: "температура, жар", category: "Gesundheit" },
    { de: "das Gesicht", pl: "die Gesichter", ru: "лицо", category: "Gesundheit" },
    { de: "die Grippe", pl: "без мн.ч.", ru: "грипп", category: "Gesundheit" },
    { de: "das Haar", pl: "die Haare", ru: "волос / волосы", category: "Gesundheit" },
    { de: "der Hals", pl: "die Hälse", ru: "шея, горло", category: "Gesundheit" },
    { de: "die Haut", pl: "без мн.ч.", ru: "кожа", category: "Gesundheit" },
    { de: "das Herz", pl: "die Herzen", ru: "сердце", category: "Gesundheit" },
    { de: "der Husten", pl: "без мн.ч.", ru: "кашель", category: "Gesundheit" },
    { de: "das Knie", pl: "die Knie", ru: "колено", category: "Gesundheit" },
    { de: "der Kopf", pl: "die Köpfe", ru: "голова", category: "Gesundheit" },
    { de: "der Körper", pl: "die Körper", ru: "тело, корпус", category: "Gesundheit" },
    { de: "das Medikament", pl: "die Medikamente", ru: "лекарство", category: "Gesundheit" },
    { de: "der Mund", pl: "die Münder", ru: "рот", category: "Gesundheit" },
    { de: "die Nase", pl: "die Nasen", ru: "нос", category: "Gesundheit" },
    { de: "das Ohr", pl: "die Ohren", ru: "ухо", category: "Gesundheit" },
    { de: "der Patient", pl: "die Patienten", ru: "пациент", category: "Gesundheit" },
    { de: "der Rücken", pl: "die Rücken", ru: "спина", category: "Gesundheit" },
    { de: "die Salbe", pl: "die Salben", ru: "мазь", category: "Gesundheit" },
    { de: "der Schmerz", pl: "die Schmerzen", ru: "боль", category: "Gesundheit" },
    { de: "der Schnupfen", pl: "без мн.ч.", ru: "насморк", category: "Gesundheit" },
    { de: "die Tabletten", pl: "Plural", ru: "таблетки", category: "Gesundheit" },
    { de: "der Zahn", pl: "die Zähne", ru: "зуб", category: "Gesundheit" },
    { de: "abnehmen", pl: "nahm ab, abgenommen", ru: "худеть", category: "Gesundheit" },
    { de: "untersuchen", pl: "untersuchte, untersucht", ru: "обследовать", category: "Gesundheit" },
    { de: "wehtun", pl: "tat weh, wehgetan", ru: "болеть, причинять боль", category: "Gesundheit" },
    { de: "zunehmen", pl: "nahm zu, zugenommen", ru: "полнеть", category: "Gesundheit" }
];

// Функция перемешивания карточек в случайном порядке (Алгоритм Фишера-Йейтса)
function shuffleWords(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}