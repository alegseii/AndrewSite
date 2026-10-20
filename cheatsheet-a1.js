// База правил — уровень A1.
// Каждая тема — один блок <div class="cheat-card" id="a1-...">. Чтобы добавить тему, вставь новый блок
// и строку в содержание (первый блок). Уровень A2 лежит в cheatsheet-a2.js (переменная cheatSheetA2).
const cheatSheetA1 = `
    <div class="cheat-card">
        <h2>Содержание A1</h2>
        <ol class="cheat-toc">
            <li><a href="#a1-pron">Произношение и особые буквы</a></li>
            <li><a href="#a1-gender">Существительные: род и артикли</a></li>
            <li><a href="#a1-plural">Множественное число</a></li>
            <li><a href="#a1-praesens">Präsens: правильные глаголы и изменение корня</a></li>
            <li><a href="#a1-sein">sein, haben, werden, wissen</a></li>
            <li><a href="#a1-order">Порядок слов</a></li>
            <li><a href="#a1-wh">Вопросительные слова</a></li>
            <li><a href="#a1-neg">Отрицание: nicht и kein</a></li>
            <li><a href="#a1-cases">Падежи: Nominativ, Akkusativ, Dativ</a></li>
            <li><a href="#a1-prep">Предлоги и падежи</a></li>
            <li><a href="#a1-place">Wo? Wohin? Woher?</a></li>
            <li><a href="#a1-timeprep">Предлоги времени</a></li>
            <li><a href="#a1-modal">Модальные глаголы</a></li>
            <li><a href="#a1-sep">Глаголы с отделяемой приставкой</a></li>
            <li><a href="#a1-imp">Imperativ</a></li>
            <li><a href="#a1-perfekt">Perfekt</a></li>
            <li><a href="#a1-praet">Präteritum: sein и haben</a></li>
            <li><a href="#a1-poss">Притяжательные местоимения</a></li>
            <li><a href="#a1-conj">Союзы und, oder, aber, denn</a></li>
            <li><a href="#a1-num">Числа</a></li>
            <li><a href="#a1-time">Время, дни, месяцы, даты</a></li>
            <li><a href="#a1-misc">Полезные конструкции</a></li>
            <li><a href="#a1-phrases">Разговорные выражения</a></li>
        </ol>
    </div>

    <!-- 1. Произношение -->
    <div class="cheat-card" id="a1-pron">
        <h2>1. Произношение и особые буквы</h2>
        <table>
            <tr><th>Буква / сочетание</th><th>Звучание</th><th>Пример</th></tr>
            <tr><td><b>ä</b></td><td>[э]</td><td>Mädchen, spät</td></tr>
            <tr><td><b>ö</b></td><td>[ё] (как в «берёза»)</td><td>schön, möchten</td></tr>
            <tr><td><b>ü</b></td><td>[ю] (как в «дюна», губы трубочкой)</td><td>Tür, müde</td></tr>
            <tr><td><b>ß</b></td><td>резкое [с] после долгой гласной</td><td>Straße, heißen</td></tr>
            <tr><td><b>ei</b></td><td>[ай]</td><td>nein, Eis</td></tr>
            <tr><td><b>ie</b></td><td>долгое [и]</td><td>Liebe, sieben</td></tr>
            <tr><td><b>eu / äu</b></td><td>[ой]</td><td>neu, Häuser</td></tr>
            <tr><td><b>ch</b> после a, o, u, au</td><td>[х]</td><td>Buch, acht</td></tr>
            <tr><td><b>ch</b> после остальных гласных и согласных</td><td>мягкое [хь]</td><td>ich, Milch</td></tr>
            <tr><td><b>sch</b></td><td>[ш]</td><td>Schule, schnell</td></tr>
            <tr><td><b>sp / st</b> в начале слова</td><td>[шп] / [шт]</td><td>sprechen, Student</td></tr>
            <tr><td><b>s</b> перед гласной</td><td>[з]</td><td>Sonne, sagen</td></tr>
            <tr><td><b>z, tz</b></td><td>[ц]</td><td>Zeit, Katze</td></tr>
            <tr><td><b>w</b></td><td>[в]</td><td>Wasser, wir</td></tr>
            <tr><td><b>v</b></td><td>чаще [ф]</td><td>Vater, vier</td></tr>
            <tr><td><b>j</b></td><td>[й]</td><td>ja, Jahr</td></tr>
        </table>
        <ul>
            <li>Все существительные пишутся с <b>большой буквы</b>, вежливое <i>Sie</i> (Вы) тоже.</li>
            <li>Двойная согласная после гласной обычно делает её краткой (<i>Bett</i>), одна согласная чаще оставляет гласную долгой (<i>Tag</i>).</li>
        </ul>
    </div>

    <!-- 2. Род и артикли -->
    <div class="cheat-card" id="a1-gender">
        <h2>2. Существительные: род и артикли</h2>
        <p>Три рода: <b>der</b> (м.), <b>die</b> (ж.), <b>das</b> (ср.). Во множественном числе артикль всегда <b>die</b>. Неопределённый артикль: <b>ein / eine / ein</b>, во мн. числе его нет.</p>
        <table>
            <tr><th>Род</th><th>Подсказки по окончанию и значению</th><th>Примеры</th></tr>
            <tr>
                <td><b>der</b></td>
                <td>-er (профессии), -ling, -ismus; дни недели, месяцы, времена года, стороны света</td>
                <td>der Lehrer, der Montag, der Mai, der Winter</td>
            </tr>
            <tr>
                <td><b>die</b></td>
                <td>-ung, -heit, -keit, -schaft, -tion, -ie, -ik, -ei, -in (женские профессии); многие слова на -e</td>
                <td>die Zeitung, die Freiheit, die Lehrerin, die Lampe</td>
            </tr>
            <tr>
                <td><b>das</b></td>
                <td>-chen, -lein (уменьшительные), -ment, -um; существительные из инфинитивов</td>
                <td>das Mädchen, das Zimmer, das Essen</td>
            </tr>
        </table>
        <p class="tip">💡 Это подсказки, а не законы (есть исключения: <i>der Name, das Ende</i>). Род часто не совпадает с русским, поэтому всегда учи слово сразу с артиклем.</p>
    </div>

    <!-- 3. Множественное число -->
    <div class="cheat-card" id="a1-plural">
        <h2>3. Множественное число</h2>
        <p>В словарях и в карточках тип мн. числа записан сокращённо: <i>-e</i>, <i>-en</i>, <i>¨-er</i> и т. д. Знак <b>¨</b> означает умлаут (a &rarr; ä, o &rarr; ö, u &rarr; ü, au &rarr; äu).</p>
        <table>
            <tr><th>Тип</th><th>Пример (ед. &rarr; мн.)</th></tr>
            <tr><td><b>-e</b></td><td>der Tag &rarr; die Tag<b>e</b></td></tr>
            <tr><td><b>¨-e</b></td><td>der Stuhl &rarr; die St<b>ü</b>hl<b>e</b></td></tr>
            <tr><td><b>-er</b> / <b>¨-er</b></td><td>das Kind &rarr; die Kind<b>er</b>; das Haus &rarr; die H<b>äu</b>s<b>er</b></td></tr>
            <tr><td><b>-n</b> / <b>-en</b></td><td>die Lampe &rarr; die Lampe<b>n</b>; die Frau &rarr; die Frau<b>en</b></td></tr>
            <tr><td><b>-nen</b> (для слов на -in)</td><td>die Lehrerin &rarr; die Lehrerin<b>nen</b></td></tr>
            <tr><td><b>-s</b> (часто иностранные слова)</td><td>das Auto &rarr; die Auto<b>s</b></td></tr>
            <tr><td><b>-</b> / <b>¨-</b> (без окончания)</td><td>der Lehrer &rarr; die Lehrer; der Bruder &rarr; die Br<b>ü</b>der</td></tr>
        </table>
        <ul>
            <li>Большинство <b>женских</b> существительных образуют мн. число на <i>-n / -en</i>.</li>
            <li>Мужские и средние слова на <i>-er, -el, -en</i> обычно остаются без окончания.</li>
            <li>В Dativ мн. числа добавляется <b>-n</b>: <i>mit den Kindern</i> (но не после -n и -s: <i>mit den Frauen, mit den Autos</i>).</li>
        </ul>
    </div>

    <!-- 4. Präsens -->
    <div class="cheat-card" id="a1-praesens">
        <h2>4. Präsens: правильные глаголы и изменение корня</h2>
        <table>
            <tr><th>Лицо</th><th>Окончание</th><th>lernen (учить)</th></tr>
            <tr><td>ich</td><td>-e</td><td>lerne</td></tr>
            <tr><td>du</td><td>-st</td><td>lernst</td></tr>
            <tr><td>er / sie / es</td><td>-t</td><td>lernt</td></tr>
            <tr><td>wir</td><td>-en</td><td>lernen</td></tr>
            <tr><td>ihr</td><td>-t</td><td>lernt</td></tr>
            <tr><td>sie / Sie</td><td>-en</td><td>lernen</td></tr>
        </table>
        <p><b>Особые случаи:</b></p>
        <ul>
            <li><b>Основа на -d, -t, -n (после согласной):</b> добавляется <b>-e-</b>: <i>arbeiten &rarr; du arbeitest, er arbeitet, ihr arbeitet</i>; <i>finden &rarr; du findest</i>; <i>öffnen &rarr; er öffnet</i>.</li>
            <li><b>Основа на -s, -ß, -z:</b> у <i>du</i> окончание только <b>-t</b>: <i>heißen &rarr; du heißt</i>, <i>tanzen &rarr; du tanzt</i>.</li>
        </ul>
        <p><b>Изменение корневой гласной</b> (только <i>du</i> и <i>er / sie / es</i>, остальные лица обычные):</p>
        <table>
            <tr><th>Изменение</th><th>Глагол</th><th>du</th><th>er / sie / es</th></tr>
            <tr><td rowspan="5">e &rarr; i</td><td>sprechen</td><td>sprichst</td><td>spricht</td></tr>
            <tr><td>nehmen</td><td>nimmst</td><td>nimmt</td></tr>
            <tr><td>geben</td><td>gibst</td><td>gibt</td></tr>
            <tr><td>essen</td><td>isst</td><td>isst</td></tr>
            <tr><td>helfen</td><td>hilfst</td><td>hilft</td></tr>
            <tr><td rowspan="2">e &rarr; ie</td><td>sehen</td><td>siehst</td><td>sieht</td></tr>
            <tr><td>lesen</td><td>liest</td><td>liest</td></tr>
            <tr><td rowspan="3">a &rarr; ä</td><td>fahren</td><td>fährst</td><td>fährt</td></tr>
            <tr><td>schlafen</td><td>schläfst</td><td>schläft</td></tr>
            <tr><td>laufen</td><td>läufst</td><td>läuft</td></tr>
        </table>
    </div>

    <!-- 5. sein, haben, werden, wissen -->
    <div class="cheat-card" id="a1-sein">
        <h2>5. sein, haben, werden, wissen</h2>
        <table>
            <tr><th>Лицо</th><th>sein (быть)</th><th>haben (иметь)</th><th>werden (становиться)</th><th>wissen (знать)</th></tr>
            <tr><td>ich</td><td>bin</td><td>habe</td><td>werde</td><td>weiß</td></tr>
            <tr><td>du</td><td>bist</td><td>hast</td><td>wirst</td><td>weißt</td></tr>
            <tr><td>er / sie / es</td><td>ist</td><td>hat</td><td>wird</td><td>weiß</td></tr>
            <tr><td>wir</td><td>sind</td><td>haben</td><td>werden</td><td>wissen</td></tr>
            <tr><td>ihr</td><td>seid</td><td>habt</td><td>werdet</td><td>wisst</td></tr>
            <tr><td>sie / Sie</td><td>sind</td><td>haben</td><td>werden</td><td>wissen</td></tr>
        </table>
        <ul>
            <li><i>Ich bin 25 Jahre alt.</i> (возраст выражается через <b>sein</b>)</li>
            <li><i>Ich habe Hunger / Durst / Zeit.</i> (haben + существительное)</li>
            <li><i>Er wird Arzt.</i> (стать кем-то); <i>Ich weiß es nicht.</i></li>
        </ul>
    </div>

    <!-- 6. Порядок слов -->
    <div class="cheat-card" id="a1-order">
        <h2>6. Порядок слов</h2>
        <p><b>Главное правило:</b> спрягаемый глагол в повествовательном предложении и в вопросе с W-словом стоит на <b>2-м месте</b>.</p>
        <table>
            <tr><th>Тип предложения</th><th>Схема</th><th>Пример</th></tr>
            <tr><td>Прямой порядок</td><td>Подлежащее + <b>глагол</b> + остальное</td><td>Ich <b>lerne</b> heute Deutsch.</td></tr>
            <tr><td>Обратный порядок (инверсия)</td><td>Другой член + <b>глагол</b> + подлежащее</td><td>Heute <b>lerne</b> ich Deutsch.</td></tr>
            <tr><td>Вопрос с W-словом</td><td>W-слово + <b>глагол</b> + подлежащее</td><td>Wann <b>kommst</b> du nach Hause?</td></tr>
            <tr><td>Вопрос «да / нет»</td><td><b>Глагол</b> на 1-м месте + подлежащее</td><td><b>Lernst</b> du Deutsch?</td></tr>
            <tr><td>Приказ</td><td><b>Глагол</b> на 1-м месте</td><td><b>Komm</b> bitte schnell!</td></tr>
        </table>
        <p><b>Рамочная конструкция (Satzklammer):</b> вторая часть глагола уходит <b>в конец</b> предложения.</p>
        <table>
            <tr><th>Случай</th><th>Пример</th></tr>
            <tr><td>Модальный глагол + инфинитив</td><td>Ich <b>kann</b> heute nicht <b>kommen</b>.</td></tr>
            <tr><td>Отделяемая приставка</td><td>Ich <b>stehe</b> um sieben Uhr <b>auf</b>.</td></tr>
            <tr><td>Perfekt (haben / sein + Partizip II)</td><td>Ich <b>habe</b> gestern Pizza <b>gegessen</b>.</td></tr>
        </table>
        <p class="tip">💡 Если в предложении есть время и место, время обычно стоит раньше: <i>Ich fahre morgen nach Berlin.</i></p>
    </div>

    <!-- 7. Вопросительные слова -->
    <div class="cheat-card" id="a1-wh">
        <h2>7. Вопросительные слова (W-Fragen)</h2>
        <table>
            <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>Wer?</b></td><td>кто</td><td>Wer ist das?</td></tr>
            <tr><td><b>Was?</b></td><td>что</td><td>Was machst du?</td></tr>
            <tr><td><b>Wo?</b></td><td>где</td><td>Wo wohnst du?</td></tr>
            <tr><td><b>Woher?</b></td><td>откуда</td><td>Woher kommst du?</td></tr>
            <tr><td><b>Wohin?</b></td><td>куда</td><td>Wohin gehst du?</td></tr>
            <tr><td><b>Wann?</b></td><td>когда</td><td>Wann beginnt der Kurs?</td></tr>
            <tr><td><b>Wie?</b></td><td>как</td><td>Wie heißt du? Wie geht es dir?</td></tr>
            <tr><td><b>Warum?</b></td><td>почему</td><td>Warum lernst du Deutsch?</td></tr>
            <tr><td><b>Wie viel? / Wie viele?</b></td><td>сколько (ед. / мн. число)</td><td>Wie viel kostet das? Wie viele Kinder hast du?</td></tr>
            <tr><td><b>Welcher / Welche / Welches?</b></td><td>какой (по роду)</td><td>Welcher Bus fährt zum Bahnhof?</td></tr>
            <tr><td><b>Wie lange? / Wie alt?</b></td><td>как долго / сколько лет</td><td>Wie alt bist du?</td></tr>
        </table>
    </div>

    <!-- 8. Отрицание -->
    <div class="cheat-card" id="a1-neg">
        <h2>8. Отрицание: nicht и kein</h2>
        <table>
            <tr><th>Слово</th><th>Когда</th><th>Пример</th></tr>
            <tr>
                <td><b>kein</b></td>
                <td>вместо <i>ein / eine</i> и там, где артикля нет (мн. число, неисчисляемые существительные)</td>
                <td>Ich habe <b>kein</b> Auto. / Ich habe <b>keine</b> Zeit. / Ich trinke <b>keinen</b> Kaffee.</td>
            </tr>
            <tr>
                <td><b>nicht</b></td>
                <td>всё остальное: глагол, прилагательное, существительное с определённым артиклем или притяжательным местоимением, наречие, предлог с существительным</td>
                <td>Ich arbeite <b>nicht</b>. / Das ist <b>nicht</b> gut. / Das ist <b>nicht</b> mein Buch.</td>
            </tr>
        </table>
        <p><b>Место nicht:</b></p>
        <ul>
            <li>Отрицается весь глагол &rarr; <i>nicht</i> в <b>конце</b>: <i>Ich kenne ihn <b>nicht</b>.</i></li>
            <li>Отрицается конкретное слово &rarr; <i>nicht</i> <b>перед ним</b>: <i><b>Nicht</b> heute, morgen!</i></li>
            <li>В рамочной конструкции <i>nicht</i> стоит <b>перед второй частью</b>: <i>Ich komme <b>nicht</b> mit. / Ich habe das <b>nicht</b> gewusst.</i></li>
        </ul>
        <table>
            <tr><th>kein</th><th>м.</th><th>ж.</th><th>ср.</th><th>мн.</th></tr>
            <tr><td>Nominativ</td><td>kein</td><td>keine</td><td>kein</td><td>keine</td></tr>
            <tr><td>Akkusativ</td><td><b>keinen</b></td><td>keine</td><td>kein</td><td>keine</td></tr>
            <tr><td>Dativ</td><td>keinem</td><td>keiner</td><td>keinem</td><td>keinen</td></tr>
        </table>
        <p style="margin-top:8px;"><b>Ja / Nein / Doch:</b> <i>doch</i> — это «да» в ответ на отрицательный вопрос. <i>Kommst du nicht mit? — <b>Doch</b>, ich komme mit.</i></p>
    </div>

    <!-- 9. Падежи -->
    <div class="cheat-card" id="a1-cases">
        <h2>9. Падежи: Nominativ, Akkusativ, Dativ</h2>
        <ul>
            <li><b>Nominativ (Wer? Was?):</b> подлежащее; именная часть после <i>sein, werden, bleiben</i>.</li>
            <li><b>Akkusativ (Wen? Was?):</b> прямое дополнение (<i>Ich sehe den Mann</i>).</li>
            <li><b>Dativ (Wem?):</b> косвенное дополнение, «получатель» (<i>Ich helfe dem Mann</i>).</li>
        </ul>
        <table>
            <tr><th>Падеж</th><th>м.</th><th>ж.</th><th>ср.</th><th>мн.</th></tr>
            <tr><td><b>Nominativ</b></td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die</td></tr>
            <tr><td><b>Akkusativ</b></td><td><b>den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die</td></tr>
            <tr><td><b>Dativ</b></td><td><b>dem / einem</b></td><td><b>der / einer</b></td><td><b>dem / einem</b></td><td><b>den</b> (+ -n у сущ.)</td></tr>
        </table>
        <p class="tip">💡 В Akkusativ меняется <b>только мужской род</b> (der &rarr; den, ein &rarr; einen). У женского, среднего рода и мн. числа Akkusativ совпадает с Nominativ.</p>
        <p><b>Личные местоимения:</b></p>
        <table>
            <tr><th>Падеж</th><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie / Sie</th></tr>
            <tr><td>Nominativ</td><td>ich</td><td>du</td><td>er</td><td>sie</td><td>es</td><td>wir</td><td>ihr</td><td>sie / Sie</td></tr>
            <tr><td>Akkusativ</td><td>mich</td><td>dich</td><td>ihn</td><td>sie</td><td>es</td><td>uns</td><td>euch</td><td>sie / Sie</td></tr>
            <tr><td>Dativ</td><td>mir</td><td>dir</td><td>ihm</td><td>ihr</td><td>ihm</td><td>uns</td><td>euch</td><td>ihnen / Ihnen</td></tr>
        </table>
        <p><i>Ich sehe dich. / Wie geht es dir? / Das gefällt mir. / Ich schenke ihr Blumen.</i></p>
        <p><b>Частые глаголы:</b> с Akkusativ — <i>haben, kaufen, brauchen, sehen, lesen, essen, trinken, machen, lernen, suchen, finden</i>; с Dativ — <i>helfen, gefallen, gehören, schmecken, danken</i>.</p>
    </div>

    <!-- 10. Предлоги и падежи -->
    <div class="cheat-card" id="a1-prep">
        <h2>10. Предлоги и падежи</h2>
        <ul>
            <li><b>Всегда Dativ:</b> <i>aus, bei, mit, nach, seit, von, zu</i> (а также <i>ab, gegenüber</i>).</li>
            <li><b>Всегда Akkusativ:</b> <i>für, durch, gegen, ohne, um</i> (а также <i>bis</i>).</li>
            <li><b>Двойные предлоги:</b> <i>in, an, auf, vor, hinter, neben, über, unter, zwischen</i>. На вопрос <b>Wo?</b> (где) &rarr; <b>Dativ</b>, на вопрос <b>Wohin?</b> (куда) &rarr; <b>Akkusativ</b>.</li>
        </ul>
        <table>
            <tr><th>Wo? (Dativ)</th><th>Wohin? (Akkusativ)</th></tr>
            <tr><td>Ich bin <b>in der</b> Schule.</td><td>Ich gehe <b>in die</b> Schule.</td></tr>
            <tr><td>Das Buch liegt <b>auf dem</b> Tisch.</td><td>Ich lege das Buch <b>auf den</b> Tisch.</td></tr>
        </table>
        <p><b>Слияния предлога с артиклем:</b> in + dem = <b>im</b>, an + dem = <b>am</b>, in + das = <b>ins</b>, an + das = <b>ans</b>, zu + dem = <b>zum</b>, zu + der = <b>zur</b>, von + dem = <b>vom</b>, bei + dem = <b>beim</b>.</p>
    </div>

    <!-- 11. Wo? Wohin? Woher? -->
    <div class="cheat-card" id="a1-place">
        <h2>11. Wo? Wohin? Woher?</h2>
        <table>
            <tr><th>Что</th><th>Wo? (где)</th><th>Wohin? (куда)</th><th>Woher? (откуда)</th></tr>
            <tr>
                <td>Города и страны без артикля</td>
                <td><b>in</b> Berlin</td><td><b>nach</b> Berlin</td><td><b>aus</b> Berlin</td>
            </tr>
            <tr>
                <td>Страны с артиклем (die Schweiz, die Türkei)</td>
                <td><b>in der</b> Schweiz</td><td><b>in die</b> Schweiz</td><td><b>aus der</b> Schweiz</td>
            </tr>
            <tr>
                <td>Здания и помещения</td>
                <td><b>in der</b> Schule</td><td><b>in die</b> Schule</td><td><b>aus der</b> Schule</td>
            </tr>
            <tr>
                <td>Люди и учреждения «к кому-то»</td>
                <td><b>beim</b> Arzt</td><td><b>zum</b> Arzt</td><td><b>vom</b> Arzt</td>
            </tr>
            <tr>
                <td>Дом</td>
                <td><b>zu Hause</b></td><td><b>nach Hause</b></td><td><b>von zu Hause</b></td>
            </tr>
        </table>
    </div>

    <!-- 12. Предлоги времени -->
    <div class="cheat-card" id="a1-timeprep">
        <h2>12. Предлоги времени</h2>
        <table>
            <tr><th>Предлог</th><th>Когда</th><th>Пример</th></tr>
            <tr><td><b>um</b></td><td>точное время</td><td>um 8 Uhr</td></tr>
            <tr><td><b>am</b></td><td>дни недели, части дня, даты, выходные</td><td>am Montag, am Morgen, am 5. Mai, am Wochenende</td></tr>
            <tr><td><b>im</b></td><td>месяцы, времена года</td><td>im Juli, im Winter</td></tr>
            <tr><td><b>von ... bis</b></td><td>от ... до</td><td>von 9 bis 17 Uhr</td></tr>
            <tr><td><b>ab</b></td><td>начиная с</td><td>ab Montag</td></tr>
            <tr><td><b>vor / nach</b> (+ Dativ)</td><td>до / после</td><td>vor dem Essen, nach der Arbeit</td></tr>
            <tr><td><b>seit</b> (+ Dativ)</td><td>с каких пор, уже (срок)</td><td>seit einem Jahr</td></tr>
            <tr><td><b>in</b> (+ Dativ)</td><td>через (какое-то время)</td><td>in zwei Wochen</td></tr>
        </table>
        <p class="tip">💡 Исключение: <i>in der Nacht</i> (ночью), но <i>am Morgen, am Abend</i>.</p>
    </div>

    <!-- 13. Модальные глаголы -->
    <div class="cheat-card" id="a1-modal">
        <h2>13. Модальные глаголы</h2>
        <table>
            <tr><th>Лицо</th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>sollen</th><th>möchten</th></tr>
            <tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
            <tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>darfst</td><td>sollst</td><td>möchtest</td></tr>
            <tr><td>er / sie / es</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>möchte</td></tr>
            <tr><td>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>sollen</td><td>möchten</td></tr>
            <tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>dürft</td><td>sollt</td><td>möchtet</td></tr>
            <tr><td>sie / Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>sollen</td><td>möchten</td></tr>
        </table>
        <table>
            <tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>können</b></td><td>мочь, уметь</td><td>Ich kann gut schwimmen.</td></tr>
            <tr><td><b>müssen</b></td><td>должен, надо</td><td>Ich muss heute arbeiten.</td></tr>
            <tr><td><b>wollen</b></td><td>хотеть (твёрдое намерение)</td><td>Wir wollen nach Italien fahren.</td></tr>
            <tr><td><b>dürfen</b></td><td>можно, разрешено</td><td>Hier darf man nicht rauchen.</td></tr>
            <tr><td><b>sollen</b></td><td>следует, должен (по чьему-то поручению)</td><td>Ich soll den Arzt anrufen.</td></tr>
            <tr><td><b>möchten</b></td><td>хотел(а) бы (вежливо)</td><td>Ich möchte einen Kaffee.</td></tr>
        </table>
        <ul>
            <li><b>Структура:</b> модальный глагол на 2-м месте, смысловой глагол в <b>инфинитиве в конце</b>: <i>Ich kann heute nicht kommen.</i></li>
            <li>У <i>ich</i> и <i>er / sie / es</i> форма одинаковая и без окончания.</li>
            <li>Если смысл понятен, смысловой глагол можно опустить: <i>Ich muss nach Hause. / Ich kann Deutsch.</i></li>
            <li>⚠️ <b>nicht müssen</b> = «не нужно», <b>nicht dürfen</b> = «нельзя».</li>
        </ul>
    </div>

    <!-- 14. Отделяемые приставки -->
    <div class="cheat-card" id="a1-sep">
        <h2>14. Глаголы с отделяемой приставкой</h2>
        <table>
            <tr><th>Инфинитив</th><th>Präsens</th><th>С модальным</th><th>Perfekt</th></tr>
            <tr><td>auf|stehen</td><td>Ich stehe um 7 Uhr <b>auf</b>.</td><td>Ich muss früh <b>aufstehen</b>.</td><td>Ich bin <b>aufgestanden</b>.</td></tr>
            <tr><td>ein|kaufen</td><td>Wir kaufen <b>ein</b>.</td><td>Wir wollen <b>einkaufen</b>.</td><td>Wir haben <b>eingekauft</b>.</td></tr>
            <tr><td>an|rufen</td><td>Er ruft mich <b>an</b>.</td><td>Er will mich <b>anrufen</b>.</td><td>Er hat mich <b>angerufen</b>.</td></tr>
            <tr><td>mit|kommen</td><td>Kommst du <b>mit</b>?</td><td>Kannst du <b>mitkommen</b>?</td><td>Bist du <b>mitgekommen</b>?</td></tr>
        </table>
        <ul>
            <li>В Präsens и Imperativ приставка уходит <b>в конец</b> предложения.</li>
            <li>Частые приставки: <i>an-, auf-, aus-, ein-, mit-, vor-, zu-, ab-, fern-, zurück-</i>. Ударение падает на приставку.</li>
            <li><b>Неотделяемые</b> приставки (<i>be-, ge-, emp-, ent-, er-, ver-, zer-</i>) не отрываются: <i>besuchen &rarr; Ich besuche dich.</i></li>
        </ul>
    </div>

    <!-- 15. Imperativ -->
    <div class="cheat-card" id="a1-imp">
        <h2>15. Повелительное наклонение (Imperativ)</h2>
        <table>
            <tr><th>Обращение</th><th>Правило</th><th>Пример (machen / kommen)</th></tr>
            <tr><td><b>du</b></td><td>основа глагола, без <i>du</i></td><td><b>Mach!</b> / <b>Komm!</b></td></tr>
            <tr><td><b>ihr</b></td><td>форма на <i>-t</i>, без <i>ihr</i></td><td><b>Macht!</b> / <b>Kommt!</b></td></tr>
            <tr><td><b>Sie</b></td><td>инфинитив + <i>Sie</i></td><td><b>Machen Sie!</b> / <b>Kommen Sie!</b></td></tr>
        </table>
        <ul>
            <li>У глаголов с <b>e &rarr; i / ie</b> изменение сохраняется: <i>Sprich! Lies! Nimm! Gib! Sieh!</i> (а у <i>a &rarr; ä</i> нет: <i>Fahr! Schlaf!</i>).</li>
            <li>Основа на -d, -t, -n: добавляется <b>-e</b>: <i>Arbeite! Warte! Öffne!</i></li>
            <li>Отделяемая приставка в конце: <i>Steh auf! / Stehen Sie auf!</i></li>
            <li>⚠️ Исключение <b>sein</b>: <i>Sei! Seid! Seien Sie!</i> Для вежливости добавляй <i>bitte</i>.</li>
        </ul>
    </div>

    <!-- 16. Perfekt -->
    <div class="cheat-card" id="a1-perfekt">
        <h2>16. Perfekt (разговорное прошедшее время)</h2>
        <p><b>Схема:</b> подлежащее + <b>haben / sein</b> (2-е место) + ... + <b>Partizip II</b> (в конце). <i>Ich habe gestern Pizza gegessen. / Ich bin nach Berlin gefahren.</i></p>
        <table>
            <tr><th>Тип</th><th>Правило Partizip II</th><th>Примеры</th></tr>
            <tr><td>Слабые глаголы</td><td>ge- + основа + <b>-t</b></td><td>machen &rarr; gemacht, arbeiten &rarr; gearbeitet</td></tr>
            <tr><td>Сильные глаголы</td><td>ge- + основа (часто с изменением корня) + <b>-en</b></td><td>schreiben &rarr; geschrieben, fahren &rarr; gefahren, essen &rarr; gegessen</td></tr>
            <tr><td>Отделяемая приставка</td><td><b>ge-</b> между приставкой и корнем</td><td>auf<b>ge</b>standen, ein<b>ge</b>kauft</td></tr>
            <tr><td>Неотделяемая приставка, <i>-ieren</i></td><td><b>без ge-</b></td><td>besucht, verstanden, telefoniert</td></tr>
            <tr><td>sein / haben</td><td>особые формы</td><td>gewesen / gehabt</td></tr>
        </table>
        <table>
            <tr><th>Вспомогательный глагол</th><th>Когда</th></tr>
            <tr><td><b>sein</b></td><td>глаголы движения (fahren, gehen, kommen, fliegen), смены состояния (aufstehen, einschlafen, aufwachen), а также <i>sein, werden, bleiben</i></td></tr>
            <tr><td><b>haben</b></td><td>все остальные глаголы</td></tr>
        </table>
        <p class="tip">💡 Потренироваться можно на вкладке «Тренажёр Perfekt».</p>
    </div>

    <!-- 17. Präteritum: sein и haben -->
    <div class="cheat-card" id="a1-praet">
        <h2>17. Präteritum: sein и haben</h2>
        <p>В разговорной речи на уровне A1 в Präteritum используют в основном <i>sein</i> и <i>haben</i>, а остальные глаголы ставят в Perfekt.</p>
        <table>
            <tr><th>Лицо</th><th>sein &rarr; war</th><th>haben &rarr; hatte</th></tr>
            <tr><td>ich / er / sie / es</td><td>war</td><td>hatte</td></tr>
            <tr><td>du</td><td>warst</td><td>hattest</td></tr>
            <tr><td>wir / sie / Sie</td><td>waren</td><td>hatten</td></tr>
            <tr><td>ihr</td><td>wart</td><td>hattet</td></tr>
        </table>
        <p><i>Ich war gestern zu Hause. / Wir hatten keine Zeit.</i> Остальные глаголы в Präteritum смотри в разделе A2.</p>
    </div>

    <!-- 18. Притяжательные -->
    <div class="cheat-card" id="a1-poss">
        <h2>18. Притяжательные местоимения</h2>
        <p>Основа зависит от <b>владельца</b>, окончание — от <b>рода, числа и падежа</b> того, чем владеют (как у <i>ein / eine</i>).</p>
        <table>
            <tr><th>Владелец</th><th>Основа</th><th>Владелец</th><th>Основа</th></tr>
            <tr><td>ich (мой)</td><td><b>mein</b></td><td>wir (наш)</td><td><b>unser</b></td></tr>
            <tr><td>du (твой)</td><td><b>dein</b></td><td>ihr (ваш)</td><td><b>euer</b></td></tr>
            <tr><td>er / es (его)</td><td><b>sein</b></td><td>sie (их)</td><td><b>ihr</b></td></tr>
            <tr><td>sie (её)</td><td><b>ihr</b></td><td>Sie (Ваш)</td><td><b>Ihr</b></td></tr>
        </table>
        <table>
            <tr><th>Падеж</th><th>м.</th><th>ж.</th><th>ср.</th><th>мн.</th></tr>
            <tr><td>Nominativ</td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>
            <tr><td>Akkusativ</td><td><b>meinen</b></td><td>meine</td><td>mein</td><td>meine</td></tr>
            <tr><td>Dativ</td><td>meinem</td><td>meiner</td><td>meinem</td><td>meinen</td></tr>
        </table>
        <p class="tip">💡 У <i>euer</i> при окончании выпадает <i>e</i>: <i>eure, euren, eurem, eurer</i>.</p>
    </div>

    <!-- 19. Союзы -->
    <div class="cheat-card" id="a1-conj">
        <h2>19. Союзы und, oder, aber, denn</h2>
        <table>
            <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>und</b></td><td>и</td><td>Ich lerne Deutsch und er lernt Englisch.</td></tr>
            <tr><td><b>oder</b></td><td>или</td><td>Trinkst du Tee oder Kaffee?</td></tr>
            <tr><td><b>aber</b></td><td>но</td><td>Ich möchte kommen, aber ich habe keine Zeit.</td></tr>
            <tr><td><b>denn</b></td><td>потому что</td><td>Ich bleibe zu Hause, denn ich bin krank.</td></tr>
        </table>
        <ul>
            <li>Эти союзы стоят «на нулевой позиции» и <b>не меняют порядок слов</b>: глагол после них остаётся на 2-м месте.</li>
            <li>Перед <i>aber</i> и <i>denn</i> ставится запятая, перед <i>und / oder</i> обычно нет.</li>
        </ul>
    </div>

    <!-- 20. Числа -->
    <div class="cheat-card" id="a1-num">
        <h2>20. Числа</h2>
        <table>
            <tr><th>0–12</th><th>13–19</th><th>Десятки</th></tr>
            <tr>
                <td>0 null, 1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn, 11 elf, 12 zwölf</td>
                <td>13 dreizehn, 14 vierzehn, 15 fünfzehn, 16 sechzehn, 17 siebzehn, 18 achtzehn, 19 neunzehn</td>
                <td>20 zwanzig, 30 dreißig, 40 vierzig, 50 fünfzig, 60 sechzig, 70 siebzig, 80 achtzig, 90 neunzig, 100 (ein)hundert, 1000 (ein)tausend</td>
            </tr>
        </table>
        <ul>
            <li><b>Единицы идут перед десятками</b> и соединяются через <i>und</i>, всё пишется слитно: 21 <i>einundzwanzig</i>, 35 <i>fünfunddreißig</i>, 99 <i>neunundneunzig</i>.</li>
            <li>Сотни и тысячи: 101 <i>hunderteins</i>, 250 <i>zweihundertfünfzig</i>.</li>
            <li>У 16 и 17 в составе чисел отпадают буквы: <i>sechzehn, sechzig; siebzehn, siebzig</i>.</li>
        </ul>
    </div>

    <!-- 21. Время, дни, месяцы, даты -->
    <div class="cheat-card" id="a1-time">
        <h2>21. Время, дни недели, месяцы, даты</h2>
        <p><b>Вопросы:</b> <i>Wie spät ist es? / Wie viel Uhr ist es?</i> — <i>Um wie viel Uhr beginnt der Kurs?</i></p>
        <table>
            <tr><th>Время</th><th>Официально (24 ч)</th><th>В разговоре (12 ч)</th></tr>
            <tr><td>8:00</td><td>acht Uhr</td><td>acht Uhr</td></tr>
            <tr><td>8:05</td><td>acht Uhr fünf</td><td>fünf nach acht</td></tr>
            <tr><td>8:15</td><td>acht Uhr fünfzehn</td><td>Viertel nach acht</td></tr>
            <tr><td>8:30</td><td>acht Uhr dreißig</td><td><b>halb neun</b> (половина девятого)</td></tr>
            <tr><td>8:45</td><td>acht Uhr fünfundvierzig</td><td>Viertel vor neun</td></tr>
            <tr><td>8:55</td><td>acht Uhr fünfundfünfzig</td><td>fünf vor neun</td></tr>
            <tr><td>14:30</td><td>vierzehn Uhr dreißig</td><td>halb drei</td></tr>
        </table>
        <p><b>Дни недели</b> (все мужского рода): der Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. <i>am Montag</i>. Части дня: <i>der Morgen, Vormittag, Mittag, Nachmittag, Abend, die Nacht</i>; <i>morgens, abends</i> = «по утрам, по вечерам».</p>
        <p><b>Месяцы</b> (мужского рода): Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember. <i>im Mai</i>. <b>Времена года:</b> der Frühling, Sommer, Herbst, Winter. <i>im Sommer</i>.</p>
        <p><b>Дата:</b> <i>Der Wievielte ist heute? — Heute ist der 5. Mai</i> (der fünfte Mai). <i>Ich habe am 5. Mai Geburtstag</i> (am fünften Mai).</p>
        <ul>
            <li><b>Порядковые числа:</b> 1. <i>erste</i>, 2. <i>zweite</i>, 3. <i>dritte</i>, 7. <i>siebte</i>, 8. <i>achte</i>; с 4 до 19 — число + <b>-te</b> (<i>vierte, zehnte</i>); с 20 — число + <b>-ste</b> (<i>zwanzigste</i>).</li>
            <li>После <i>am</i> порядковое число получает <b>-n</b>: <i>am ersten, am dritten, am zwanzigsten</i>.</li>
        </ul>
    </div>

    <!-- 22. Полезные конструкции -->
    <div class="cheat-card" id="a1-misc">
        <h2>22. Полезные конструкции</h2>
        <table>
            <tr><th>Конструкция</th><th>Значение</th><th>Пример</th></tr>
            <tr><td><b>es gibt</b> + Akkusativ</td><td>есть, имеется</td><td>Hier gibt es einen Supermarkt. / Es gibt keine Milch.</td></tr>
            <tr><td><b>man</b></td><td>безличное «говорят, можно, принято»</td><td>Man spricht hier Deutsch.</td></tr>
            <tr><td><b>gern</b></td><td>с удовольствием, любить делать</td><td>Ich trinke gern Tee.</td></tr>
            <tr><td><b>lieber</b></td><td>предпочитать</td><td>Ich trinke lieber Kaffee.</td></tr>
            <tr><td><b>am liebsten</b></td><td>больше всего люблю</td><td>Am liebsten trinke ich Wasser.</td></tr>
            <tr><td><b>Ich möchte / Ich hätte gern</b></td><td>я бы хотел(а) (при заказе, в магазине)</td><td>Ich hätte gern einen Kaffee.</td></tr>
        </table>
    </div>

    <!-- 23. Разговорные выражения -->
    <div class="cheat-card" id="a1-phrases">
        <h2>23. Разговорные выражения</h2>
        <table>
            <tr><th>Ситуация</th><th>Выражения</th></tr>
            <tr><td>Приветствие и прощание</td><td>Hallo! / Guten Morgen! / Guten Tag! / Guten Abend! / Gute Nacht! / Tschüss! / Auf Wiedersehen! / Bis bald! / Bis morgen!</td></tr>
            <tr><td>Знакомство</td><td>Wie heißen Sie? — Ich heiße ... / Woher kommen Sie? — Ich komme aus ... / Wo wohnen Sie? — Ich wohne in ... / Was sind Sie von Beruf? — Ich bin ... von Beruf.</td></tr>
            <tr><td>Как дела</td><td>Wie geht es dir / Ihnen? — Gut, danke. Und dir / Ihnen?</td></tr>
            <tr><td>Вежливость</td><td>Bitte. / Danke! — Gerne! / Entschuldigung. / Es tut mir leid. / Kein Problem! / Macht nichts!</td></tr>
            <tr><td>Если не понял</td><td>Wie bitte? / Noch einmal, bitte. / Langsamer, bitte. / Ich verstehe nicht. / Was heißt ... auf Deutsch?</td></tr>
            <tr><td>В магазине и кафе</td><td>Ich hätte gern ... / Was kostet das? / Wie viel kostet das? / Das macht 5 Euro. / Zusammen oder getrennt?</td></tr>
        </table>
    </div>
`;
