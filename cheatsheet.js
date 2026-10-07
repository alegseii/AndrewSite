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

    <!-- 4. Падежи Akkusativ и Dativ -->
    <div class="cheat-card">
        <h2>4. Падежи: Akkusativ (Винительный) и Dativ (Дательный)</h2>
        <table>
            <tr><th>Падеж</th><th>Мужской (der)</th><th>Средний (das)</th><th>Женский (die)</th><th>Мн.ч. (die)</th></tr>
            <tr>
                <td><b>Nominativ</b> (Кто? Что?)</td>
                <td>der / ein</td><td>das / ein</td><td>die / eine</td><td>die / -</td>
            </tr>
            <tr>
                <td><b>Akkusativ</b> (Кого? Что? Куда?)</td>
                <td><b style="color: var(--accent)">den / einen</b></td><td>das / ein</td><td>die / eine</td><td>die / -</td>
            </tr>
            <tr>
                <td><b>Dativ</b> (Кому? Где?)</td>
                <td><b>dem / einem</b></td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>den / -n</b></td>
            </tr>
        </table>
        <p style="margin-top: 10px;"><b>Предлоги Dativ (всегда):</b> aus, bei, mit, nach, seit, von, zu.</p>
        <p><b>Предлоги Akkusativ (всегда):</b> durch, für, gegen, ohne, um.</p>
    </div>

    <!-- 5. Слова-последовательности (Перечисление) -->
    <div class="cheat-card">
        <h2>5. Слова-последовательности (Перечисление событий)</h2>
        <p>Эти слова ставятся на <b>1-е место</b>, поэтому глагол сразу идет за ними (на <b>2-м месте</b>):</p>
        <ul>
            <li><b>Zuerst</b> (Сначала) &rarr; <i>Zuerst trinke ich Kaffee.</i></li>
            <li><b>Dann</b> (Затем / Потом) &rarr; <i>Dann gehe ich zur Arbeit.</i></li>
            <li><b>Danach</b> (После этого) &rarr; <i>Danach kaufe ich ein.</i></li>
            <li><b>Später</b> (Позже) &rarr; <i>Später lerne ich Deutsch.</i></li>
            <li><b>Am Ende / Zum Schluss</b> (В конце / В завершение) &rarr; <i>Zum Schluss schlafe ich.</i></li>
        </ul>
    </div>

    <!-- 6. Популярные разговорные выражения -->
    <div class="cheat-card">
        <h2>6. Популярные разговорные выражения (A1)</h2>
        <table>
            <tr><th>Выражение</th><th>Перевод</th></tr>
            <tr><td>Wie geht es dir / Ihnen?</td><td>Как у тебя / у Вас дела?</td></tr>
            <tr><td>Wie spät ist es? / Wie viel Uhr ist es?</td><td>Который час?</td></tr>
            <tr><td>Es tut mir leid.</td><td>Мне очень жаль / Извините.</td></tr>
            <tr><td>Kein Problem! / Macht nichts!</td><td>Без проблем! / Ничего страшного!</td></tr>
            <tr><td>Ich hätte gern...</td><td>Я бы хотел(а)... (при заказе/покупке)</td></tr>
            <tr><td>Wie bitte?</td><td>Что, простите? (повторите)</td></tr>
            <tr><td>Vielen Dank! — Gerne! / Nichts zu danken!</td><td>Большое спасибо! — Пожалуйста / Не за что!</td></tr>
        </table>
    </div>

    <!-- 7. Числа и Порядковые числительные -->
    <div class="cheat-card">
        <h2>7. Числа и Порядковые числительные (Ordinalzahlen)</h2>
        <p><b>Количественные числительные:</b></p>
        <p>1–12: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf.</p>
        <p>13–19: dreizehn, vierzehn... (число + zehn).</p>
        <p>Десятки: 20 – zwanzig, 30 – dreißig, 40 – vierzig, 50 – fünfzig, 60 – sechzig, 70 – siebzig, 80 – achtzig, 90 – neunzig.</p>
        <p>Сотни: 100 – hundert, 200 – zweihundert, 300 – dreihundert ... 1000 – tausend.</p>
        
        <h3 style="color: var(--accent); margin-top: 15px; margin-bottom: 8px;">Порядковые числительные (С какой / Который по счету?):</h3>
        <p>Образуются добавлением окончания <b>-te</b> (до 19) и <b>-ste</b> (от 20 и выше):</p>
        <table>
            <tr><th>Число</th><th>Немецкий</th><th>Перевод</th></tr>
            <tr><td>1-й</td><td><b>erste</b> (исключение)</td><td>первый</td></tr>
            <tr><td>2-й</td><td>zweite</td><td>второй</td></tr>
            <tr><td>3-й</td><td><b>dritte</b> (исключение)</td><td>третий</td></tr>
            <tr><td>4-й – 19-й</td><td>vierte, fünfte, sechste...</td><td>четвертый и т.д. (+te)</td></tr>
            <tr><td>7-й</td><td><b>siebte</b> (исключение)</td><td>седьмой</td></tr>
            <tr><td>8-й</td><td><b>achte</b> (исключение)</td><td>восьмой</td></tr>
            <tr><td>20-й и далее</td><td>zwanzigste, dreißigste...</td><td>двадцатый (+ste)</td></tr>
        </table>
    </div>
`;