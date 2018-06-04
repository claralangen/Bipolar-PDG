(function () {
'use strict';

var styles = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\na {\n  text-decoration: none; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%;\n  font-family: 'Roboto',sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-image: url(\"../src/assets/Background.svg\");\n  font-size: 1.9rem;\n  color: #2D4A84; }\n\n.header {\n  width: 94%;\n  margin-top: 4%;\n  display: flex;\n  justify-content: flex-end; }\n  .header .score {\n    width: 26%;\n    display: flex;\n    justify-content: flex-end; }\n    .header .score-circle {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: white;\n      width: 50px;\n      height: 50px;\n      border-radius: 50px; }\n    .header .score-number {\n      font-weight: bold;\n      color: #DE4877; }\n\n.text {\n  display: flex;\n  flex-direction: column-reverse; }\n  .text .question {\n    width: 90%;\n    margin: 6% auto 0;\n    font-weight: bold;\n    font-size: 2.4rem; }\n  .text .choice {\n    margin: 1.6% auto 0;\n    padding: 1.8%;\n    width: 90%;\n    background: white;\n    border-radius: 10px; }\n    .text .choice:hover {\n      background: #46b3ea;\n      color: white;\n      box-shadow: 19px 13px 112px -26px rgba(0, 0, 0, 0.57);\n      cursor: pointer; }";

class Choices{
    constructor(){
        this.textContainer = document.querySelector('.text');
        this.choicesContainer = document.querySelector('.choices');
        this.scoreEl= document.querySelector('.score-number');
        this.score = 0;
    }
    questionDisplay(text){
        const question = document.createElement('p');
        question.classList.add('question');
        question.innerHTML = text;
        this.textContainer.appendChild(question);

        this.question = question;
    }
    choicesDisplay(choices){

        for (let i = 0; i < choices.length; i++) {
            const choice = document.createElement('p');
            choice.classList.add('choice');
            choice.innerHTML = choices[i].text;
            this.choicesContainer.appendChild(choice);
            this.choice =  choice;

            choice.addEventListener('click',() =>{

                choices[i].callBack();
                this.score += choices[i].score;
                this.scoreEl.innerHTML = this.score;

            });
        }
    }
    deleteText(){
        this.question.remove();
    }
    deleteChoice(){
       while(this.choicesContainer.hasChildNodes()){
           this.choicesContainer.removeChild(this.choicesContainer.firstChild);
       }
    }
}

const instance = new Choices();

class Illustration {
    constructor(){
        this.imgContainer = document.querySelector('.imgContainer');
    }
    illustrationDisplay(src){
        const illustration = document.createElement('img');
        illustration.setAttribute('src',src);
        illustration.classList.add('img');
        this.imgContainer.appendChild(illustration);
        this.img = illustration;
    }
    deleteIllustration(){
        this.img.remove();
    }
}

const instance$1 = new Illustration();

var src = "76d30dc0f3f6a6b8.svg"

class Sounds{
    constructor(){
        this.textContainer = document.querySelector('.text');
    }
    readSound(src){
        const sound = document.createElement('audio');
        sound.setAttribute('src',src);
        sound.setAttribute('autoplay', true);
        this.textContainer.appendChild(sound);
    }
}

const instance$2 = new Sounds();

var sound = "df449e97da5d1c85.wav"

var src$1 = "bfe41e16a209c3b2.svg"

const question = 'Au détour d’un couloir vous tombez sur Gérard qui parle à Martine avec entrain de sa collection de mouchoir aux motifs aquatiques';
const choice1= 'Vous parlez à Gérard du dossier en cours, tout en lançant des regards appuyés à Martine';
const choice2= '“Mais tu vois pas que t’emmerdes tout le monde avec tes mouchoirs ! Circulez, retournez bossez !”';
const choice3= '“Oh incroyable moi aussi je collectionne les mouchoirs ! Mais avec des dinosaures dessus !”';


function test1() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();

}
function test2() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();

}
function test3() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();

}

function gerard(){
    instance$1.illustrationDisplay(src);
    instance.questionDisplay(question);
    instance.choicesDisplay([
        {
            text: choice1,
            callBack: test1,
            score: 1
        },
        {
            text:choice2,
            callBack: test2,
            score: -1
        },
        {
            text:choice3,
            callBack: test3,
            score: 2
        }
    ]);
}

const question$1 = 'Les ventres gargouillent, midi sonne, il est l’heure de se rendre à la cantine avec toute l’équipe:\n';
const choice1$1= 'Vous faites un scandale sur l’obligation de manger de la bouffe halal';
const choice2$1= 'Vous annoncez à tout le monde que dorénavant, on oublie les tickets restos, la cantine suffira amplement ';
const choice3$1= 'Au cours du repas, Elodie vous ouvre les yeux sur la viande qu’il y a a dans votre assiette, vous décidez de devenir végétarien';


function test1$1() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    gerard();
}
function test2$1() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    gerard();
}
function test3$1() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    gerard();
}

function cantine(){
    instance$1.illustrationDisplay(src);
    instance.questionDisplay(question$1);
    instance.choicesDisplay([
        {
            text: choice1$1,
            callBack: test1$1,
            score: -2
        },
        {
            text:choice2$1,
            callBack: test2$1,
            score: -1
        },
        {
            text:choice3$1,
            callBack: test3$1,
            score: -3
        }
    ]);
}

const question$2 = 'Elodie présente la stratégie marketing sur les nouvelles lasagnes pour caniches';
const choice1$2= 'Vous parlez à tout le monde de Fifi votre fox terrier avec des trémolos dans la voix, c’était votre tout premier ami\n';
const choice2$2= 'Vous faites une blague douteuse sur les cheveux de Martine, rapport avec les caniches, oui vous avez un humour de merde';
const choice3$2= 'Vous faites remarquer à Elodie qu’elle ne parle pas assez fort et que ses seins vous déconcentrent, Gérard prendra le relais';


function test1$2() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    cantine();
}
function test2$2() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    cantine();
}
function test3$2() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    cantine();
}

function marketingElodie(){
    instance$1.illustrationDisplay(src$1);
    instance.questionDisplay(question$2);
    instance.choicesDisplay([
        {
            text: choice1$2,
            callBack: test1$2,
            score: 2
        },
        {
            text:choice2$2,
            callBack: test2$2,
            score: -1
        },
        {
            text:choice3$2,
            callBack: test3$2,
            score: -2
        }
    ]);
}

const question$3 = 'Lors de votre première réunion avec l’équipe de direction:';
const choice1$3= 'Vous croisez le regard de Martine, et votre coeur chavire';
const choice2$3= 'Vous demandez à Youness de changer de place avec Elodie, histoire de profiter de la vue, hé hé';
const choice3$3= 'Vous offrez viennoiseries et café à tout le monde pour faire bonne impression';


function test1$3() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    marketingElodie();
}
function test2$3() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    marketingElodie();
}
function test3$3() {
    instance$2.readSound(sound);
    instance.deleteText();
    instance.deleteChoice();
    instance$1.deleteIllustration();
    marketingElodie();
}

function reunion(){
    instance$1.illustrationDisplay(src);
    instance.questionDisplay(question$3);
    instance.choicesDisplay([
        {
        text: choice1$3,
        callBack: test1$3,
        score: 1
    },
    {
        text:choice2$3,
        callBack: test2$3,
        score: -2
    },
    {
        text:choice3$3,
        callBack: test3$3,
        score: 2
    }
    ]);
}

const styleEl = document.createElement('style');
styleEl.innerHTML = styles;
document.head.appendChild(styleEl);

reunion();

}());
//# sourceMappingURL=bundle.js.map
