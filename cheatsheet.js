const cheatSheetHTML = `
    <!-- 1. Настоящее время и порядок слов -->
    <div class="cheat-card">
        <h2>1. Настоящее время (Präsens) и Порядок слов</h2>
        <p><b>Правило №1 в немецком:</b> Изъявительный глагол ВСЕГДА стоит на <b>2-м месте</b>!</p>
        <table>
            <tr><th>Тип предложения</th><th>Схема структуры</th><th>Пример</th></tr>
            <tr>
                <td>Прямой порядок</td>
                <td>Подлежащее + <b>Глагол</b> + Остальное</td>
                <td>Ich <b>lerne</b> heute Deutsch.</td>
            </tr>
            <tr>
                <td>Обратный порядок</td>
                <td>Второстепенный член + <b>Глагол</b> + Подлежащее + ...</td>
                <td>Heute <b>lerne</b> ich Deutsch.</td>
            </tr>
            <tr>
                <td>Вопрос с вопросительным словом</td>
                <td>W-слово + <b>Глагол</b> + Подлежащее + ...?</td>
                <td>Wann <b>kommst</b> du nach Hause?</td>
            </tr>
            <tr>
                <td>Вопрос без W-слова (Ja/Nein)</td>
                <td><b>Глагол (на 1-м месте)</b> + Подлежащее + ...?</td>
                <td><b>Lernst</b> du Deutsch?</td>
            </tr>
        </table>
    </div>

    <!-- 2. Прошедшее время: Perfekt vs Präteritum -->
    <div class="cheat-card">
        <h2>2. Прошедшее время: Perfekt и Präteritum</h2>
        <p><b>Perfekt</b> — разговорное прошедшее время (haben / sein + Partizip II в конце).</p>
        <p><b>Präteritum</b> — письменная/официальная форма. В разговоре A1 в Präteritum используются только глаголы <i>sein</i> (быть) и <i>haben</i> (иметь):</p>
        <table>
            <tr><th>Местоимение</th><th>sein (быть) &rarr; war (был)</th><th>haben (иметь) &rarr; hatte (имел)</th></tr>
            <tr><td>ich / er / sie / es</td><td>war</td><td>hatte</td></tr>
            <tr><td>du</td><td>warst</td><td>hattest</td></tr>
            <tr><td>wir / Sie / sie</td><td>waren</td><td>hatten</td></tr>
            <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
        </table>
        <p style="margin-top:10px;"><i>Пример:</i> Ich <b>war</b> gestern zu Hause. / Ich <b>hatte</b> keine Zeit.</p>
    </div>

    <!-- 3. Повелительное наклонение (Imperativ) -->
    <div class="cheat-card">
        <h2>3. Повелительное наклонение (Imperativ)</h2>
        <p>Форма приказа/просьбы зависит от того, к кому обращаемся:</p>
        <table>
            <tr><th>Форма обращения</th><th>Правило образования</th><th>Пример (machen / kommen)</th></tr>
            <tr>
                <td><b>du</b> (ты)</td>
                <td>Основа глагола без окончания <i>-en</i> и без <i>du</i></td>
                <td><b>Mach!</b> / <b>Komm!</b></td>
            </tr>
            <tr>
                <td><b>ihr</b> (вы - друзья)</td>
                <td>Форма глагола на <i>-t</i> без местоимения <i>ihr</i></td>
                <td><b>Macht!</b> / <b>Kommt!</b></td>
            </tr>
            <tr>
                <td><b>Sie</b> (Вы - вежливо)</td>
                <td>Глагол + местоимение <i>Sie</i></td>
                <td><b>Machen Sie!</b> / <b>Kommen Sie!</b></td>
            </tr>
        </table>
        <p style="margin-top:8px;">⚠️ Исключение <b>sein</b>: <i>Sei!</i> (du), <i>Seid!</i> (ihr), <i>Seien Sie!</i> (Sie).</p>
    </div>

    <!-- 4. Четыре падежа (Nominativ, Akkusativ, Dativ, Genitiv) -->
    <div class="cheat-card">
        <h2>4. Четыре падежа (Vier Fälle) и Артикли</h2>
        <p><b>Суть падежей:</b></p>
        <ul>
            <li><b>Nominativ (Кто? Что?):</b> подмет, начальная форма, также после <i>sein / werden / bleiben</i>[cite: 40, 48].</li>
            <li><b>Akkusativ (Кого? Что?):</b> прямой объект действия[cite: 40].</li>
            <li><b>Dativ (Кому?):</b> непрямой объект, получатель действия[cite: 40].</li>
            <li><b>Genitiv (Чий?):</b> принадлежность, владение (часто заменяется на <i>von + Dativ</i>)[cite: 40, 42].</li>
        </ul>
        <table>
            <tr><th>Падеж</th><th>maskulin (чол.)</th><th>feminin (жін.)</th><th>neutral (cep.)</th><th>Plural (множина)</th></tr>
            <tr>
                <td><b>Nominativ</b></td>
                <td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die</td>
            </tr>
            <tr>
                <td><b>Akkusativ</b></td>
                <td><b style="color: var(--accent)">den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die</td>
            </tr>
            <tr>
                <td><b>Dativ</b></td>
                <td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den ...-n</b></td>
            </tr>
            <tr>
                <td><b>Genitiv</b></td>
                <td><b>des ...-(e)s</b></td><td><b>der / einer</b></td><td><b>des ...-(e)s</b></td><td><b>der</b></td>
            </tr>
        </table>
        <p style="margin-top: 10px;"><i>Примечание:</i> В Genitiv мужского и среднего рода существительное получает окончание <b>-s / -es</b> (например: <i>des Mannes, des Kindes</i>)[cite: 40, 42].</p>
    </div>

    <!-- 5. Прийменники місця (Wo? Wohin? Woher?) -->
    <div class="cheat-card">
        <h2>5. Прийменники місця: Wo? Wohin? Woher?</h2>
        <table>
            <tr><th>Питання</th><th>Значення</th><th>Основні прийменники / правила</th></tr>
            <tr>
                <td><b>Wo?</b> (Де?)</td>
                <td>Стан, покій (без руху)</td>
                <td>Завжди <b>Dativ</b>. Прийменники: <i>in, an, auf, vor, hinter, neben, zwischen, unter, über</i>, а для людей — <i>bei</i>[cite: 44, 47].</td>
            </tr>
            <tr>
                <td><b>Wohin?</b> (Куди?)</td>
                <td>Напрямок, рух</td>
                <td>
                    1) <b>Akkusativ</b> с <i>Wechselpräpositionen</i> (in, an, auf, vor...)[cite: 45].<br>
                    2) <b>Dativ</b> с <i>zu / nach</i> (zu у/до установи/людини; nach для міст, країн без артикля та <i>nach Hause</i>)[cite: 45].
                </td>
            </tr>
            <tr>
                <td><b>Woher?</b> (Звідки?)</td>
                <td>Походження, вихідна точка</td>
                <td>Завжди <b>Dativ</b>: <i>aus</i> (країни, міста, приміщення) або <i>von</i> (від людини, точки)[cite: 44].</td>
            </tr>
        </table>
    </div>

    <!-- 6. Шпаргалка по прийменниках і падежах (Визначення) -->
    <div class="cheat-card">
        <h2>6. Шпаргалка: як обрати падеж після прийменників</h2>
        <ul>
            <li><b>Завжди Dativ (Мнемоніка):</b> <i>aus, bei, mit, nach, seit, von, zu</i> (+ <i>ab, gegenüber</i>)[cite: 44, 47].</li>
            <li><b>Завжди Akkusativ (Мнемоніка):</b> <i>für, durch, gegen, ohne, um</i> (+ <i>bis</i>)[cite: 47].</li>
            <li><b>Wechselpräpositionen (Dativ або Akkusativ):</b> <i>in, an, auf, vor, hinter, neben, über, unter, zwischen</i> (Wo? &rarr; Dativ; Wohin? &rarr; Akkusativ)[cite: 47].</li>
            <li><b>Завжди Genitiv:</b> <i>während, wegen, trotz, statt, außerhalb, innerhalb</i>[cite: 42, 47].</li>
        </ul>
    </div>

    <!-- 7. Причинно-наслідкові сполучники (Kausaladverbien und Satzverbinder) -->
    <div class="cheat-card">
        <h2>7. Причинно-наслідкові сполучники (Kausaladverbien)</h2>
        <table>
            <tr><th>Слово</th><th>Функція</th><th>Тип речення</th><th>Дієслово</th><th>Приклад</th></tr>
            <tr>
                <td><b>weil</b></td>
                <td>причина</td>
                <td>підрядне (Nebensatz)</td>
                <td>у кінці</td>
                <td><i>Er geht, weil er krank ist.</i>[cite: 36]</td>
            </tr>
            <tr>
                <td><b>denn</b></td>
                <td>причина</td>
                <td>головне (Hauptsatz)</td>
                <td>поз. 2</td>
                <td><i>Er geht, denn er ist krank.</i>[cite: 36]</td>
            </tr>
            <tr>
                <td><b>deshalb / deswegen / daher</b></td>
                <td>наслідок</td>
                <td>головне (Hauptsatz)</td>
                <td>поз. 2 (інверсія)</td>
                <td><i>Er ist krank. Deshalb geht er.</i>[cite: 36]</td>
            </tr>
            <tr>
                <td><b>dass</b></td>
                <td>зміст/факт</td>
                <td>підрядне (Nebensatz)</td>
                <td>у кінці</td>
                <td><i>Es ist schön, dass du da bist.</i>[cite: 36]</td>
            </tr>
        </table>
        <p style="margin-top: 10px;"><b>Нюанси:</b> <i>deshalb</i> — найнейтральніше і найчастіше в побуті; <i>deswegen</i> — більш розмовне; <i>daher</i> — трохи більш книжне[cite: 38, 39].</p>
    </div>

    <!-- 8. Притяжательные местоимения (Possivartikel) -->
    <div class="cheat-card">
        <h2>8. Притяжательные местоимения (Possessivartikel)</h2>
        <p>Основа зависит от владельца (<b>mein, dein, sein, ihr, unser, euer, ihr, Ihr</b>), а окончания меняются точно так же, как у неопределенного артикля <i>ein / eine</i>[cite: 49].</p>
        <table>
            <tr><th>Власник</th><th>Nominativ (чол/жін/сер/мн)</th><th>Akkusativ (чол. рід)</th><th>Dativ (жін. рід)</th></tr>
            <tr><td><b>ich</b> (мій)</td><td>mein / meine / mein / meine</td><td>meinen</td><td>meiner</td></tr>
            <tr><td><b>du</b> (твій)</td><td>dein / deine / dein / deine</td><td>deinen</td><td>deiner</td></tr>
            <tr><td><b>er / es</b> (його)</td><td>sein / seine / sein / seine</td><td>seinen</td><td>seiner</td></tr>
            <tr><td><b>sie</b> (її)</td><td>ihr / ihre / ihr / ihre</td><td>ihren</td><td>ihrer</td></tr>
            <tr><td><b>wir</b> (наш)</td><td>unser / unsere / unser / unsere</td><td>unseren</td><td>unserer</td></tr>
            <tr><td><b>ihr</b> (ваш)</td><td>euer / eure / euer / eure (eure-)</td><td>eurenden</td><td>eurer</td></tr>
            <tr><td><b>sie / Sie</b> (їхній / Ваш)</td><td>ihr/Ihr ...</td><td>ihren / Ihren</td><td>ihrer / Ihrer</td></tr>
        </table>
    </div>

    <!-- 9. Популярные разговорные выражения -->
    <div class="cheat-card">
        <h2>9. Популярные разговорные выражения (A1-A2)</h2>
        <table>
            <tr><th>Выражение</th><th>Перевод</th></tr>
            <tr><td>Wie geht es dir / Ihnen?</td><td>Как у тебя / у Вас дела?</td></tr>
            <tr><td>Es tut mir leid.</td><td>Мне очень жаль / Извините.</td></tr>
            <tr><td>Kein Problem! / Macht nichts!</td><td>Без проблем! / Ничего страшного!</td></tr>
            <tr><td>Ich hätte gern...</td><td>Я бы хотел(а)... (при заказе/покупке)</td></tr>
            <tr><td>Wie bitte?</td><td>Что, простите? (повторите)</td></tr>
            <tr><td>Vielen Dank! — Gerne!</td><td>Большое спасибо! — Пожалуйста!</td></tr>
        </table>
    </div>
`;