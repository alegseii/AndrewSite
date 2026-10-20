// База правил — уровень A2.
// Сюда перенесены темы из старой шпаргалки, которые выходят за рамки A1.
// Чтобы добавить тему, вставь новый блок <div class="cheat-card"> в конец строки.
const cheatSheetA2 = `
    <!-- 1. Präteritum всех глаголов -->
    <div class="cheat-card">
        <h2>1. Präteritum: слабые, сильные и модальные глаголы</h2>
        <p>Präteritum — письменная и официальная форма прошедшего времени. В устной речи для большинства глаголов используют Perfekt, но <i>sein, haben</i> и модальные глаголы почти всегда стоят в Präteritum.</p>
        <table>
            <tr><th>Лицо</th><th>Слабые и модальные (основа + -te)</th><th>Сильные (своя основа)</th></tr>
            <tr><td>ich</td><td>machte, konnte</td><td>ging (без окончания)</td></tr>
            <tr><td>du</td><td>machtest, konntest</td><td>gingst</td></tr>
            <tr><td>er / sie / es</td><td>machte, konnte</td><td>ging (без окончания)</td></tr>
            <tr><td>wir</td><td>machten, konnten</td><td>gingen</td></tr>
            <tr><td>ihr</td><td>machtet, konntet</td><td>gingt</td></tr>
            <tr><td>sie / Sie</td><td>machten, konnten</td><td>gingen</td></tr>
        </table>
        <ul>
            <li>У <i>ich</i> и <i>er / sie / es</i> форма всегда одинаковая.</li>
            <li>Основа на -d, -t: добавляется <b>-e-</b>: <i>arbeitete, du arbeitetest; fand, du fandest</i>.</li>
            <li>Основа на -s, -ß: у <i>du</i> окончание только <b>-t</b>: <i>du aßt, du last</i>.</li>
            <li>Модальные теряют умлаут: <i>können &rarr; konnte, müssen &rarr; musste, dürfen &rarr; durfte, mögen &rarr; mochte</i>.</li>
            <li>Сильные глаголы (<i>gehen &rarr; ging, kommen &rarr; kam, sehen &rarr; sah</i>) нужно учить вместе с формой Präteritum.</li>
        </ul>
        <p class="tip">💡 Потренироваться можно на вкладке «Тренажёр Präteritum».</p>
    </div>

    <!-- 2. Причина и следствие -->
    <div class="cheat-card">
        <h2>2. Причина и следствие: weil, denn, deshalb, dass</h2>
        <table>
            <tr><th>Слово</th><th>Функция</th><th>Тип предложения</th><th>Глагол</th><th>Пример</th></tr>
            <tr>
                <td><b>weil</b></td><td>причина</td><td>придаточное (Nebensatz)</td><td>в самом конце</td>
                <td><i>Er geht, weil er krank ist.</i></td>
            </tr>
            <tr>
                <td><b>denn</b></td><td>причина</td><td>главное (Hauptsatz)</td><td>на 2-м месте</td>
                <td><i>Er geht, denn er ist krank.</i></td>
            </tr>
            <tr>
                <td><b>deshalb / deswegen / daher</b></td><td>следствие</td><td>главное (Hauptsatz)</td><td>на 2-м месте (инверсия)</td>
                <td><i>Er ist krank. Deshalb geht er.</i></td>
            </tr>
            <tr>
                <td><b>dass</b></td><td>«что» (придаточное дополнительное)</td><td>придаточное (Nebensatz)</td><td>в самом конце</td>
                <td><i>Es ist schön, dass du da bist.</i></td>
            </tr>
        </table>
        <ul>
            <li>Если придаточное с <i>weil</i> стоит <b>перед</b> главным, то главное начинается с глагола: <i>Weil er krank ist, <b>geht er</b> nach Hause.</i></li>
            <li><i>deshalb</i> — самое нейтральное, <i>deswegen</i> — более разговорное, <i>daher</i> — немного более книжное.</li>
        </ul>
    </div>

    <!-- 3. Genitiv -->
    <div class="cheat-card">
        <h2>3. Падеж Genitiv (Wessen?)</h2>
        <ul>
            <li><b>Genitiv (Wessen? Чей?):</b> принадлежность и владение: <i>das Auto des Mannes</i>.</li>
            <li>В разговорной речи часто заменяется на <b>von + Dativ</b>: <i>das Auto von dem Mann</i>.</li>
            <li>У мужского и среднего рода существительное получает окончание <b>-s / -es</b>: <i>des Mannes, des Kindes, des Lehrers</i>.</li>
        </ul>
        <table>
            <tr><th>Падеж</th><th>м.</th><th>ж.</th><th>ср.</th><th>мн.</th></tr>
            <tr><td><b>Genitiv</b></td><td>des ...-(e)s / eines</td><td>der / einer</td><td>des ...-(e)s / eines</td><td>der</td></tr>
        </table>
        <p><b>Предлоги с Genitiv:</b> <i>während</i> (во время), <i>wegen</i> (из-за), <i>trotz</i> (несмотря на), <i>statt</i> (вместо), <i>außerhalb</i>, <i>innerhalb</i>. В разговорной речи после них нередко используют Dativ (<i>wegen dem Wetter</i>).</p>
    </div>
`;
