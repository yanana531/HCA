"use strict";
// import $ from 'jquery';
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
{
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 10,
        initialSlide: 1,
        loop: true,
        autoplay: {
            delay: 1200,
            disableOnInteraction: true
        },
    });
}
{
    $(function () {
        var pagetop = $('#page_top');
        // ボタン非表示
        pagetop.hide();
        // 100px スクロールしたらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            }
            else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
}
{
    var question_1 = document.getElementById('question');
    var choices_1 = document.getElementById('choices');
    var btn_1 = document.getElementById('btn');
    var result_1 = document.getElementById('result');
    var scoreComment_1 = document.querySelector('#result > h1');
    var scoreLabel_1 = document.querySelector('#result > p');
    var tweetlink_1 = document.getElementById('tweet');
    var quizSet_1 = shuffle([
        { q: 'ひろゆかないの本業は？', c: ['整体師', 'バーテンダー', 'YouTuber'] },
        { q: 'ひろゆかないがやったことのある役は？', c: ['ひげおやじモノマネ', 'キンコン西野モノマネ', '横山緑モノマネ'] },
        { q: 'ひろゆかないの飼っている犬の名前は？', c: ['ディタ', 'ディーン', 'ディディ'] },
        { q: 'ひろゆかないの地元はどこ？', c: ['広島県', '兵庫県', '東京都北区赤羽'] },
        { q: 'ひろゆかないが挑戦したことのあるSNSは？', c: ['TikTok', '17LIVE', 'Facebook'] },
        { q: 'ひろゆかないの一番好きなマンガは？', c: ['バトルロワイヤル', 'ハンターハンター', '北斗の拳'] },
        { q: 'ひろゆかないがコラボしたことがあるのは？', c: ['遠藤チャンネル', 'へずまりゅう', 'ステハゲチャンネル'] },
        { q: 'ひろゆかないの年齢は？', c: ['34歳', '37歳', '29歳'] },
        { q: 'ひろゆかないがモノマネを始めたきっかけは？', c: ['幼なじみの提案', '奥さんの勧め', '会社の宴会芸'] },
        { q: 'ひろゆかないの趣味は？', c: ['温泉', '海外旅行', '映画'] },
    ]);
    var currentNum_1 = 0;
    var isAnswered_1;
    var comment_1 = '';
    var score_1 = 0;
    function shuffle(arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    }
    function checkAnswer(li) {
        if (isAnswered_1) {
            return;
        }
        isAnswered_1 = true;
        if (li.textContent === quizSet_1[currentNum_1].c[0]) {
            li.classList.add('correct');
            score_1++;
        }
        else {
            li.classList.add('wrong');
        }
        btn_1.classList.remove('disabled');
    }
    function setQuiz() {
        isAnswered_1 = false;
        question_1.textContent = quizSet_1[currentNum_1].q;
        while (choices_1.firstChild) {
            choices_1.removeChild(choices_1.firstChild);
        }
        var shuffledChoices = shuffle(__spreadArrays(quizSet_1[currentNum_1].c));
        shuffledChoices.forEach(function (choice) {
            var li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', function () {
                checkAnswer(li);
            });
            choices_1.appendChild(li);
        });
        if (currentNum_1 === quizSet_1.length - 1) {
            btn_1.textContent = '結果を見る';
        }
    }
    setQuiz();
    btn_1.addEventListener('click', function () {
        if (btn_1.classList.contains('disabled')) {
            return;
        }
        btn_1.classList.add('disabled');
        if (score_1 > 7) {
            comment_1 = '優秀！！';
        }
        else if (score_1 > 4) {
            comment_1 = 'ほう！';
        }
        else if (score_1 > 1) {
            comment_1 = 'うひょ...';
        }
        else {
            comment_1 = 'お、おう...';
        }
        if (currentNum_1 === quizSet_1.length - 1) {
            scoreComment_1.textContent = comment_1;
            scoreLabel_1.textContent = "\u30B9\u30B3\u30A2 : " + score_1 + "0 / " + quizSet_1.length + "0";
            result_1.classList.remove('hidden');
            tweetlink_1.href = "https://twitter.com/share?url=https://www.hiroyukanai-creative-agency.com/firsttest.html%0d&related=hiroyukanai&hashtags=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A&text=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A\u521D\u7D1A\u306B\u6311\u6226\u3057\u307E\u3057\u305F\uFF01%0d\u7D50\u679C\u306F" + score_1 + "0\u70B9\u3067\u3057\u305F\uFF01%0d";
        }
        else {
            currentNum_1++;
            setQuiz();
        }
    });
}
{
    var question_2 = document.getElementById('question');
    var choices_2 = document.getElementById('choices');
    var btn_2 = document.getElementById('btn');
    var result_2 = document.getElementById('result');
    var scoreComment_2 = document.querySelector('#result > h1');
    var scoreLabel_2 = document.querySelector('#result > p');
    var tweetlink_2 = document.getElementById('tweet');
    var quizSet_2 = shuffle([
        { q: 'ひろゆかないの好きな色は？', c: ['黒', '赤', '黄'] },
        { q: 'ひろゆかないの身長は？', c: ['176cm', '172cm', '180cm'] },
        { q: 'ひろゆかないの体重は？', c: ['67kg', '65kg', '71kg'] },
        { q: 'ひろゆかないの血液型は？', c: ['A型', 'O型', 'B型'] },
        { q: 'モノマネ用のサングラスは元々何のために使っていた？', c: ['ドライブ', '釣り', '登山'] },
        { q: 'ひろゆかないの好きなアーティストは？', c: ['Mr.Children', 'BUMP OF CHICKEN', 'ORANGE RANGE'] },
        { q: 'パソコンはなぜMacを使っている？', c: ['友達にもらったから', 'ひろゆきの逆張り', '普段から使っているから'] },
        { q: '元ネタの再現動画がまだないセリフは？', c: ['それってあなたの感想ですよね？', '嘘を嘘であると見抜ける人でないと…', 'なんですか？しゃぞーって。'] },
        { q: '一番最初に登場したスピンオフは？', c: ['ひげおやじモノマネ', '落合陽一モノマネ', '三浦瑠麗モノマネ'] },
        { q: 'ひろゆかないが第一回のオフ会に来たときの服装は？', c: ['スーツ', '黄色いパーカー', 'タンクトップ'] },
    ]);
    var currentNum_2 = 0;
    var isAnswered_2;
    var comment_2 = '';
    var score_2 = 0;
    function shuffle(arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    }
    function checkAnswer(li) {
        if (isAnswered_2) {
            return;
        }
        isAnswered_2 = true;
        if (li.textContent === quizSet_2[currentNum_2].c[0]) {
            li.classList.add('correct');
            score_2++;
        }
        else {
            li.classList.add('wrong');
        }
        btn_2.classList.remove('disabled');
    }
    function setQuiz() {
        isAnswered_2 = false;
        question_2.textContent = quizSet_2[currentNum_2].q;
        while (choices_2 === null || choices_2 === void 0 ? void 0 : choices_2.firstChild) {
            choices_2 === null || choices_2 === void 0 ? void 0 : choices_2.removeChild(choices_2.firstChild);
        }
        var shuffledChoices = shuffle(__spreadArrays(quizSet_2[currentNum_2].c));
        shuffledChoices.forEach(function (choice) {
            var li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', function () {
                checkAnswer(li);
            });
            choices_2 === null || choices_2 === void 0 ? void 0 : choices_2.appendChild(li);
        });
        if (currentNum_2 === quizSet_2.length - 1) {
            btn_2.textContent = '結果を見る';
        }
    }
    setQuiz();
    btn_2 === null || btn_2 === void 0 ? void 0 : btn_2.addEventListener('click', function () {
        if (btn_2 === null || btn_2 === void 0 ? void 0 : btn_2.classList.contains('disabled')) {
            return;
        }
        btn_2.classList.add('disabled');
        if (score_2 > 7) {
            comment_2 = '優秀！！';
        }
        else if (score_2 > 4) {
            comment_2 = 'ほう！';
        }
        else if (score_2 > 1) {
            comment_2 = 'うひょ...';
        }
        else {
            comment_2 = 'お、おう...';
        }
        if (currentNum_2 === quizSet_2.length - 1) {
            scoreComment_2.textContent = comment_2;
            scoreLabel_2.textContent = "\u30B9\u30B3\u30A2 : " + score_2 + "0 / " + quizSet_2.length + "0";
            result_2.classList.remove('hidden');
            tweetlink_2.href = "https://twitter.com/share?url=https://www.hiroyukanai-creative-agency.com/secondtest.html%0d&related=hiroyukanai&hashtags=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A&text=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A\u4E2D\u7D1A\u306B\u6311\u6226\u3057\u307E\u3057\u305F\uFF01%0d\u7D50\u679C\u306F" + score_2 + "0\u70B9\u3067\u3057\u305F\uFF01%0d";
        }
        else {
            currentNum_2++;
            setQuiz();
        }
    });
}
{
    var question_3 = document.getElementById('question');
    var choices_3 = document.getElementById('choices');
    var btn_3 = document.getElementById('btn');
    var result_3 = document.getElementById('result');
    var scoreComment_3 = document.querySelector('#result > h1');
    var scoreLabel_3 = document.querySelector('#result > p');
    var tweetlink_3 = document.getElementById('tweet');
    var quizSet_3 = shuffle([
        { q: 'ひろゆかないがしたことのあるアンダーグラウンドな仕事は？', c: ['キャバクラのボーイ', '風俗のボーイ', 'スカウトマン'] },
        { q: 'ひろゆかないが結婚した23歳当時の職業は？', c: ['フリーター', '自営業', 'ニート'] },
        { q: 'ひろゆかない動画の中でバズりの先駆けになった動画は？', c: ['もしもひろゆきが万引きGメンだったら', 'もしもひろゆきが鶴の恩返しをされたら', 'もしもひろゆきがバスガイドだったら'] },
        { q: 'ひろゆかないの奥さんが許せない男は？', c: ['デブ', 'ハゲ', '亭主関白'] },
        { q: 'ひろゆかないが広島から上京して初めて住んだ場所は？', c: ['渋谷区富ヶ谷', '豊島区東池袋', '世田谷区千歳烏山'] },
        { q: 'ひろゆかないの現在の目標はチャンネル登録10万だがそれはなぜ？', c: ['ニックネームの横にチェックマークがほしいから', '銀の盾がほしいから', 'YouTubeだけで食っていきたいから'] },
        { q: 'ひろゆかないの過去録画のアーカイブが非公開やメンバーシップ限定になってしまっているのは何故？', c: ['下ネタが多めだったから', 'サングラスをかけていなかったから', '政治や宗教について話していたから'] },
        { q: 'かつて、ひろゆき×ひろゆかないのコラボ企画を実現するべくひろゆかないが募ろうとした企画は？', c: ['クラウドファンディング', '署名活動', 'ペンギン村でしつこくDMを送り続ける'] },
        { q: 'ひろゆかないが昔コンプレックスだったのは？', c: ['顔の輪郭', '目つき', '髪質、髪の量'] },
        { q: 'ひろゆかないが最近やっている運動は？', c: ['水泳', 'テニス', 'キックボクシング'] },
    ]);
    var currentNum_3 = 0;
    var isAnswered_3;
    var comment_3 = '';
    var score_3 = 0;
    function shuffle(arr) {
        var _a;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    }
    function checkAnswer(li) {
        if (isAnswered_3) {
            return;
        }
        isAnswered_3 = true;
        if (li.textContent === quizSet_3[currentNum_3].c[0]) {
            li.classList.add('correct');
            score_3++;
        }
        else {
            li.classList.add('wrong');
        }
        btn_3.classList.remove('disabled');
    }
    function setQuiz() {
        isAnswered_3 = false;
        question_3.textContent = quizSet_3[currentNum_3].q;
        while (choices_3 === null || choices_3 === void 0 ? void 0 : choices_3.firstChild) {
            choices_3.removeChild(choices_3.firstChild);
        }
        var shuffledChoices = shuffle(__spreadArrays(quizSet_3[currentNum_3].c));
        shuffledChoices.forEach(function (choice) {
            var li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', function () {
                checkAnswer(li);
            });
            choices_3 === null || choices_3 === void 0 ? void 0 : choices_3.appendChild(li);
        });
        if (currentNum_3 === quizSet_3.length - 1) {
            btn_3.textContent = '結果を見る';
        }
    }
    setQuiz();
    btn_3 === null || btn_3 === void 0 ? void 0 : btn_3.addEventListener('click', function () {
        if (btn_3.classList.contains('disabled')) {
            return;
        }
        btn_3.classList.add('disabled');
        if (score_3 > 7) {
            comment_3 = '優秀！！';
        }
        else if (score_3 > 4) {
            comment_3 = 'ほう！';
        }
        else if (score_3 > 1) {
            comment_3 = 'うひょ...';
        }
        else {
            comment_3 = 'お、おう...';
        }
        if (currentNum_3 === quizSet_3.length - 1) {
            scoreComment_3.textContent = comment_3;
            scoreLabel_3.textContent = "\u30B9\u30B3\u30A2 : " + score_3 + "0 / " + quizSet_3.length + "0";
            result_3.classList.remove('hidden');
            tweetlink_3.href = "https://twitter.com/share?url=https://www.hiroyukanai-creative-agency.com/thirdtest.html%0d&related=hiroyukanai&hashtags=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A&text=\u3072\u308D\u3086\u304B\u306A\u3044\u691C\u5B9A\u4E0A\u7D1A\u306B\u6311\u6226\u3057\u307E\u3057\u305F\uFF01%0d\u7D50\u679C\u306F" + score_3 + "0\u70B9\u3067\u3057\u305F\uFF01%0d";
        }
        else {
            currentNum_3++;
            setQuiz();
        }
    });
}