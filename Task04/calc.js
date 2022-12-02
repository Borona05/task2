let answer = undefined;

function bias_string(string, number) {
    for (var i = 0; i < number; i++) {
        string = string.charAt(string.length - 1) + string.substr(0, string.length - 1);
    }
    return string;
}

function create_blocks() {
    let text_alert_top = document.createElement('div');
    let text_alert_bottom = document.createElement('div');

    text_alert_top.classList = 'text_alert top';
    text_alert_bottom.classList = 'text_alert bottom';
    text_alert_top.style.animation = '0.5s show_block';
    text_alert_bottom.style.animation = '0.5s show_block';

    for (let i = 0; i < 8; i++){
        let line_text = 'Я бегающий текст Я бегающий текст Я бегающий текст Я бегающий текст Я бегающий текст ';

        let top_div = document.createElement('div');
        let bottom_div = document.createElement('div');

        let top_div_bias = Math.floor(Math.random() * line_text.length);
        let bottom_div_bias = Math.floor(Math.random() * line_text.length);

        top_div.innerHTML = bias_string(line_text, top_div_bias);
        bottom_div.innerHTML = bias_string(line_text, bottom_div_bias);

        text_alert_top.append(top_div);
        text_alert_bottom.append(bottom_div);
    }

    document.body.append(text_alert_top);
    document.body.append(text_alert_bottom);

    setInterval(function () {
        for (let i = 0; i < 8; i++) {
            if (Math.random() > 0.7) {
                text_alert_top.children[i].innerHTML = bias_string(text_alert_top.children[i].innerHTML, 1);
            }

            if (Math.random() > 0.7) {
                text_alert_bottom.children[i].innerHTML = bias_string(text_alert_bottom.children[i].innerHTML, 1);
            }
        }
    }, 175);
}

function what_do_button_logic() {
    let what_do_button = document.getElementById('what_do_button');
    what_do_button.onclick = function () {
        what_do_button.style.animation = '0.5s hide_block';

        let hint_block = document.createElement('div');

        hint_block.innerHTML = 'Исчезает';
        hint_block.classList = 'hint_block';
        hint_block.style.animation = '0.5s show_block';

        document.body.append(hint_block);

        setTimeout(function () {
            what_do_button.parentNode.removeChild(what_do_button);
        }, 480);

        setTimeout(function () {
            hint_block.style.animation = '0.5s hide_block';

            let second_hint_block = document.createElement('div');

            second_hint_block.innerHTML = 'И говорит, что бегающий текст выглядит подозрительно';
            second_hint_block.classList = 'hint_block';
            second_hint_block.id = 'second_hint_block';
            second_hint_block.style.animation = '0.5s show_block';

            document.body.append(second_hint_block);

            setTimeout(function () {
                hint_block.parentNode.removeChild(hint_block);
            }, 480);

            let false_secret = document.createElement('div');

            false_secret.innerHTML = 'Thank you Mario! But your <span>princess</span> секрет is in another <span>castle</span> углу';
            false_secret.classList = 'false_secret';

            document.body.append(false_secret);

            let secret = document.createElement('div');
            let cat = document.createElement('img');

            secret.classList = 'secret';
            cat.src = '/Task04/cat.jpg';
            cat.id = 'cat';

            secret.append(cat);
            document.body.append(secret);

            cat.onmouseover = function (){
                second_hint_block.style.animation = '0.5s hide_block';
                setTimeout(function () {
                    second_hint_block.parentNode.removeChild(second_hint_block);
                }, 480);

                let new_hint_block = document.createElement('div');

                new_hint_block.innerHTML = 'О нет! Вы напугали котика. Но зато он сказал, что ответ: ' + answer;
                new_hint_block.classList = 'hint_block';
                new_hint_block.style.animation = '0.5s show_block';

                document.body.append(new_hint_block);

                cat.style.transform = 'translate(' + Math.random()*100 + 'vh, ' + Math.random()*100 + 'vh)'

                setInterval(function () {
                    cat.style.transform = 'translate(' + Math.random()*100 + 'vh, ' + Math.random()*100 + 'vh)'
                }, 2000);

                cat.onmouseover = function () { return false; }
            }
        }, 1750);
    }
}

function on_story() {
    let what_do_button = document.createElement('div')

    what_do_button.id = 'what_do_button';
    what_do_button.classList.add('what_do_button');
    what_do_button.innerHTML = 'Что же делает эта кнопка?<br>Интересно? Нажмите, чтобы узнать';
    what_do_button.style.animation = '0.5s show_block';

    document.body.innerHTML = '';
    document.body.append(what_do_button)

    what_do_button_logic();
    create_blocks();
}

function plus() {
    var x = parseInt(document.getElementById('txtX').value);
    var y = parseInt(document.getElementById('txtY').value);
    var z = x + y;

    document.getElementById('txtZ').value = z;
    document.getElementById('btnPlus').className = 'pressed';
    document.getElementById('btnMinus').className = '';

    answer = z;

    on_story();
}

function minus() {
    var x = parseInt(document.getElementById('txtX').value);
    var y = parseInt(document.getElementById('txtY').value);
    var z = x - y;

    document.getElementById('txtZ').value = z;
    document.getElementById('btnMinus').className = 'pressed';
    document.getElementById('btnPlus').className = '';

    answer = z;

    on_story();
}