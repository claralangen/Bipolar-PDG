(function () {
'use strict';

var styles = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\na {\n  text-decoration: none; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%;\n  font-family: 'Roboto',sans-serif;\n  font-weight: 400; }\n\nbody {\n  background-image: url(\"../src/assets/Background.svg\");\n  font-size: 1.9rem;\n  line-height: 3.6rem;\n  color: #2D4A84; }\n\n.mainContainer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: auto; }\n  .mainContainer .score {\n    position: absolute;\n    top: 6%;\n    right: 6%; }\n    .mainContainer .score-circle {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: white;\n      width: 50px;\n      height: 50px;\n      border-radius: 50px; }\n    .mainContainer .score-number {\n      font-weight: bold;\n      color: #DE4877; }\n  .mainContainer .title {\n    position: absolute;\n    top: 18%;\n    left: 25%;\n    font-family: Forte,serif;\n    font-size: 6rem;\n    color: white; }\n  .mainContainer .imgContainer {\n    margin-top: 4%;\n    display: flex;\n    justify-content: center; }\n    .mainContainer .imgContainer .bigIllu {\n      position: absolute;\n      top: 10%;\n      left: 6%; }\n  .mainContainer .textContainer {\n    display: flex;\n    flex-direction: column-reverse; }\n    .mainContainer .textContainer .paragraph {\n      margin: 10% auto 0;\n      padding: 1.8% 0 1.8% 10%;\n      width: 70%;\n      background: white;\n      border-radius: 10px; }\n    .mainContainer .textContainer .question {\n      width: 90%;\n      margin: 6% auto 0;\n      font-weight: bold;\n      font-size: 2.4rem; }\n    .mainContainer .textContainer .choice {\n      margin: 1.6% auto 0;\n      padding: 1.4%;\n      width: 90%;\n      background: white;\n      border-radius: 10px; }\n      .mainContainer .textContainer .choice:hover {\n        background: #46b3ea;\n        color: white;\n        box-shadow: 19px 13px 112px -26px rgba(0, 0, 0, 0.57);\n        cursor: pointer; }\n  .mainContainer .persosContainer {\n    display: flex;\n    justify-content: space-between;\n    width: 96%;\n    margin: 3% auto 0; }\n    .mainContainer .persosContainer-title {\n      font-family: Forte,serif;\n      font-size: 6rem;\n      color: white;\n      text-align: center; }\n    .mainContainer .persosContainer .perso {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 1.6%; }\n      .mainContainer .persosContainer .perso-name {\n        margin-top: 10%;\n        font-family: Forte, serif;\n        font-size: 3.6rem; }\n      .mainContainer .persosContainer .perso-description {\n        margin-top: 1%;\n        font-size: 2rem;\n        font-weight: bold;\n        color: #67A6E6;\n        text-align: center; }\n  .mainContainer .buttonContainer {\n    display: flex;\n    justify-content: center;\n    margin-top: 10%; }\n  .mainContainer .button {\n    text-align: center;\n    margin-right: 4%;\n    background-color: #8AEFAC;\n    border-radius: 50px;\n    box-shadow: 19px 13px 112px -26px rgba(0, 0, 0, 0.57);\n    padding: 1.4% 3%;\n    color: white;\n    font-weight: 400;\n    font-size: 2.2rem; }\n    .mainContainer .button:hover {\n      background: #46b3ea;\n      color: white;\n      box-shadow: 19px 13px 112px -26px rgba(0, 0, 0, 0.57);\n      cursor: pointer; }";

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
    bigIllustrationDisplay(src){
        const bigIllu = document.createElement('img');
        bigIllu.setAttribute('src',src);
        bigIllu.classList.add('bigIllu');
        this.imgContainer.appendChild(bigIllu);
        this.bigIllu = bigIllu;
    }
    deleteIllustration(){
        this.img.remove();
    }
    deleteBigIllu(){
        this.bigIllu.remove();
    }
}

const instance = new Illustration();

var src = "63f63281fdb622ba.svg"

class Sounds{
    constructor(){
        this.mainContainer = document.querySelector('.mainContainer');
    }
    readSound(src){
        const sound = document.createElement('audio');
        sound.setAttribute('src',src);
        sound.setAttribute('autoplay', true);
        this.mainContainer.appendChild(sound);
    }
}

const instance$1 = new Sounds();

var otarie = "f69f8a27819ecd65.mp3"

class Choices{
    constructor(){
        this.mainContainer = document.querySelector('.mainContainer');
        this.textContainer = document.querySelector('.textContainer');
        this.choicesContainer = document.querySelector('.choices');
        this.scoreContainer = document.querySelector('.score');
        this.buttonContainer = document.querySelector('.buttonContainer');
        this.score = 0;
    }
    scoreDisplay(){
        const scoreCircle = document.createElement('div');
        scoreCircle.classList.add('score-circle');
        this.scoreContainer.appendChild(scoreCircle);

        const scoreEl = document.createElement('p');
        scoreEl.classList.add('score-number');
        scoreCircle.appendChild(scoreEl);
        scoreEl.innerHTML = '0';

        this.scoreEl = scoreEl;
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
            this.choice = choice;

            choice.addEventListener('click',() =>{

                choices[i].callBack();
                this.score += choices[i].score;
                this.scoreEl.innerHTML = this.score;

            });
        }
    }
    titleDisplay(text){
        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = text;
        this.textContainer.appendChild(title);
        this.title = title;

    }
    staticTextDisplay(text){
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.innerHTML = text;
        this.choicesContainer.appendChild(paragraph);
        this.paragraph = paragraph;
    }
    buttonDisplay(text,callBack){
        const button = document.createElement('p');
        button.classList.add('button');
        if (text === 'Suivant'){
            this.buttonContainer.style.justifyContent = 'flex-end';
        }
        button.innerHTML = text;
        this.buttonContainer.appendChild(button);
        this.button = button;

        this.button.addEventListener('click',()=>{
            callBack();
        });
    }
    deleteText(){
        this.question.remove();
    }
    deleteChoice(){
       while(this.choicesContainer.hasChildNodes()){
           this.choicesContainer.removeChild(this.choicesContainer.firstChild);
       }
    }
    deleteButton(){
        this.button.remove();
    }
    deleteTitle(){
        this.title.remove();
    }
    deleteParagraph(){
        this.paragraph.remove();
    }
    deleteScore(){
        this.scoreContainer.remove();
    }


}

const instance$2 = new Choices();

var src$1 = "953b0df56dad08a5.svg"

var martine = "408eaf3295b59bcb.svg"

var youness = "4a38a90f5a4181d8.svg"

var elodie = "2e0f141e1616ec25.svg"

var gerard = "0c3e374d21e43de8.svg"

var choupi = "44604fdf2fd5d172.svg"

class Persos {
    constructor() {
        this.src = [martine, youness, elodie, gerard, choupi];
        this.names = ['Martine', 'Youness', 'Élodie', 'Gérard', 'Choupi'];
        this.descriptions = ['de la Compta', 'en dépression depuis sa promotion', 'beaucoup trop enjouée', 'Aime avoir le nez bouché', 'Le rat euh non chien mascotte'];
        this.mainContainer = document.querySelector('.mainContainer');
        this.textContainer = document.querySelector('.textContainer');
        this.button = document.querySelector('.buttonContainer');
    }

    displayCircles(){

        const persosContainer = document.createElement('div');
        persosContainer.classList.add('persosContainer');
        this.mainContainer.insertBefore(persosContainer, this.button);
        this.persosContainer = persosContainer;

        for (let i = 0; i < this.src.length; i++) {
            const persoContainer = document.createElement('div');
            persoContainer.classList.add('perso');
            persosContainer.appendChild(persoContainer);

            const circle = document.createElement('img');
            circle.setAttribute('src', this.src[i]);
            persoContainer.appendChild(circle);

            const name = document.createElement('p');
            name.classList.add('perso-name');
            name.innerHTML = this.names[i];
            persoContainer.appendChild(name);

            const description = document.createElement('p');
            description.classList.add('perso-description');
            description.innerHTML = this.descriptions[i];
            persoContainer.appendChild(description);
        }
    }



    titleDisplay(text) {
        const title = document.createElement('p');
        title.classList.add('persosContainer-title');
        title.innerHTML = text;
        this.textContainer.appendChild(title);

        this.title = title;
    }



    deletePage() {
        this.persosContainer.remove();
        this.button.remove();
        this.title.remove();
    }
}

const instance$3 = new Persos();

var src$2 = "76d30dc0f3f6a6b8.svg"

var sound = "df449e97da5d1c85.wav"

var src$3 = "bfe41e16a209c3b2.svg"

var src$4 = "78d63a8bbdd2bed7.svg"

var src$5 = "96fad2a4496ad10d.svg"

var src$6 = "b3a0b3f05767bc9c.svg"

var src$7 = "632bf2c26c0606d9.svg"

var src$8 = "d4299c628f6c61a2.svg"

var src$9 = "b829e90e438350da.svg"

const paragraph ='CAprès vous avoir ligoté et bâillonné,' +'</br>'+
    'Vos collègues à bout de nerfs, vous on fait marcher à quatres pattes,' +'</br>'+
    'Tiré par un Choupi surexcité à travers tout l’étage\n'+'</br>'+
    'L’entreprise a fait faillite.'+'</br>'+
    'Suite à cette humiliation vous quittez l’entreprise'+'</br>'+
    'Vous êtes toujours un con, mais en plus de cela,'+ '</br>'+
    'Maintenant vous avez une peur bleue des chihuahuas\n';

function final2() {
    instance.bigIllustrationDisplay(src$9);
    instance$2.staticTextDisplay(paragraph);
    instance$2.buttonDisplay('Recommencer',()=>{
        home();
    });
}

const paragraph$1 ='Choupi est mort.' +'</br>'+
'Les médias ont relayés l’info, ce qui vous a valu une réputation de tueur de chihuahuas.' +'</br>'+
'Face à cette esclandre, les investisseurs se sont détournés de Chyuncho.'+'</br>'+
'L’entreprise a fait faillite.'+'</br>'+
'Perché sur un tas de croquettes en or, '+'</br>'+
'En cause, votre racisme d’un autre âge, votre misogynie et votre manque de considération pour les animaux+'+ '</br>'+
'Ah et Gérard est également mort lorsqu’il a sauté du 28ème étage en pensant naïvement qu’il réussirait à sauver Choupi';

function final1() {
    instance.bigIllustrationDisplay(src$9);
    instance$2.staticTextDisplay(paragraph$1);
    instance$2.buttonDisplay('Recommencer',()=>{
        home();
    });
}

const question = 'Des coups d’agrafeuses sur les bras, des bics dans les yeux et des lancés de post-its, c’est la guerre au bureau';
const choice1= 'Vous menacez de jetez Choupi par la fenêtre si tout le monde ne se remet pas au travail';
const choice2= 'Martine est si belle lorsqu’elle tord le cou à Youness, vos assaillants profitent de votre béatitude pour vous mettre un sac à litière sur la tête';


function test1() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    final1();
}
function test2() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    final2();
}


function massacre(){
    instance.illustrationDisplay(src$8);
    instance$2.questionDisplay(question);
    instance$2.choicesDisplay([
        {
            text: choice1,
            callBack: test1,
        },
        {
            text:choice2,
            callBack: test2,
        }
    ]);
}

var src$10 = "1699e594f3e10ecf.svg"

const paragraph$2 ='Martine est comme la mère que vous n’avez jamais eu' +'</br>'+
    'Vous lui avez confiez toutes vos angoisses' +'</br>'+
    'Elle ne vous a pas rabaissé quand vous avez montré des signes de faiblesses'+'</br>'+
    'Elle a d’ailleurs pris les reines de la compagnie pour votre bien'+'</br>'+
    'Loin de la liberté d’expression'+'</br>'+
    'Loin des féminazis'+ '</br>'+
    'Seulement c’est étrange vous n’avez plus aucune responsabilité,'+ '</br>'+
    'Et elle vous demande toujours de vous taire en réunion ...';

function final4() {
    instance.bigIllustrationDisplay(src$10);
    instance$2.staticTextDisplay(paragraph$2);
    instance$2.buttonDisplay('Recommencer',()=>{
        home();
    });
}

var src$11 = "d0408bd32a396d69.svg"

const paragraph$3 ='Vous décidez de vous enfuir en Chine avec Martine' +'</br>'+
    'Vos collègues à bout de nerfs, vous on fait marcher à quatres pattes,' +'</br>'+
    'Pour vivre le parfait amour'+'</br>'+
    'Loin de la bienpensance'+'</br>'+
    'Loin de la liberté d’expression'+'</br>'+
    'Loin des féminazis'+ '</br>'+
    'Loin des animaux bien traités'+ '</br>'+
    'Enfin vous allez pouvoir déguster de vrais hot dogs';

function final3() {
    instance.bigIllustrationDisplay(src$11);
    instance$2.staticTextDisplay(paragraph$3);
    instance$2.buttonDisplay('Recommencer',()=>{
        home();
    });
}

const question$1 = 'Martine vous rejoint à l’infirmerie pour soigner votre nez ensanglanté';
const choice1$1= 'Vous pleurez dans ses bras comme un bébé';
const choice2$1= 'Vous lui retirer ses vêtements de mamie avec entrain';
const choice3= 'Vous l’enrôler pour prendre d’assaut l’open space';


function test1$1() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    final4();
}
function test2$1() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    final3();
}
function test3() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    massacre();
}

function infirmerie(){
    instance.illustrationDisplay(src$7);
    instance$2.questionDisplay(question$1);
    instance$2.choicesDisplay([
        {
            text: choice1$1,
            callBack: test1$1,
        },
        {
            text:choice2$1,
            callBack: test2$1,
        },
        {
            text:choice3,
            callBack: test3,
        }
    ]);
}

const question$2 = 'Quel plaisantin, vous n’avez pas pu résister (pour la 20ème fois) à faire une remarque raciste à Youness. Vous recevez un poing dans la gueule.';
const choice1$2= 'Vous vous enfuyez en rampant comme le lâche que vous êtes';
const choice2$2= 'Vous retirez votre pantalon rose pour l’étrangler avec';
const choice3$1= 'Gérard vient à votre rescousse avec sa grosse bedaine';


function test1$2() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    infirmerie();
}
function test2$2() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    massacre();
}
function test3$1() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    massacre();
}

function bad(){
    instance.illustrationDisplay(src$6);
    instance$2.questionDisplay(question$2);
    instance$2.choicesDisplay([
    {
        text: choice1$2,
        callBack: test1$2,
    },
    {
        text:choice2$2,
        callBack: test2$2,
    },
    {
        text:choice3$1,
        callBack: test3$1,
    }
    ]);
}

var src$12 = "d9917e40373e600c.svg"

const paragraph$4 ='Vous êtes bien trop gentil,' +'</br>'+
    'La vie d\'entreprise n\'est vraiment pas faite pour vous '+'</br>'+
    'Penser au profit avant l\'humain, c\'est fini !' +'</br>'+
    'Vous partez construire une école en Ouganda+'+ '</br>';

function good() {
    instance.bigIllustrationDisplay(src$12);
    instance$2.staticTextDisplay(paragraph$4);
}

const question$3 = 'Au détour d’un couloir vous tombez sur Gérard qui parle à Martine avec entrain de sa collection de mouchoir aux motifs aquatiques';
const choice1$3= 'Vous parlez à Gérard du dossier en cours, tout en lançant des regards appuyés à Martine';
const choice2$3= '“Mais tu vois pas que t’emmerdes tout le monde avec tes mouchoirs ! Circulez, retournez bossez !”';
const choice3$2= '“Oh incroyable moi aussi je collectionne les mouchoirs ! Mais avec des dinosaures dessus !”';


function test1$3() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    instance$2.deleteScore();
    if (instance$2.score < 0){
        bad();
    }else{
        good();
    }
}
function test2$3() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    instance$2.deleteScore();
    if (instance$2.score < 0){
        bad();
    }else{
        good();
    }
}
function test3$2() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    instance$2.deleteScore();
    if (instance$2.score < 0){
        bad();
    }else{
        good();
    }

}

function gerard$1(){
    instance.illustrationDisplay(src$5);
    instance$2.questionDisplay(question$3);
    instance$2.choicesDisplay([
        {
            text: choice1$3,
            callBack: test1$3,
            score: 1
        },
        {
            text:choice2$3,
            callBack: test2$3,
            score: -1
        },
        {
            text:choice3$2,
            callBack: test3$2,
            score: 2
        }
    ]);
}

const question$4 = 'Les ventres gargouillent, midi sonne, il est l’heure de se rendre à la cantine avec toute l’équipe:\n';
const choice1$4= 'Vous faites un scandale sur l’obligation de manger de la bouffe halal';
const choice2$4= 'Vous annoncez à tout le monde que dorénavant, on oublie les tickets restos, la cantine suffira amplement ';
const choice3$3= 'Au cours du repas, Elodie vous ouvre les yeux sur la viande qu’il y a a dans votre assiette, vous décidez de devenir végétarien';


function test1$4() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    gerard$1();
}
function test2$4() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    gerard$1();
}
function test3$3() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    gerard$1();
}

function cantine(){
    instance.illustrationDisplay(src$4);
    instance$2.questionDisplay(question$4);
    instance$2.choicesDisplay([
        {
            text: choice1$4,
            callBack: test1$4,
            score: -2
        },
        {
            text:choice2$4,
            callBack: test2$4,
            score: -1
        },
        {
            text:choice3$3,
            callBack: test3$3,
            score: 3
        }
    ]);
}

const question$5 = 'Elodie présente la stratégie marketing sur les nouvelles lasagnes pour caniches';
const choice1$5= 'Vous parlez à tout le monde de Fifi votre fox terrier avec des trémolos dans la voix, c’était votre tout premier ami\n';
const choice2$5= 'Vous faites une blague douteuse sur les cheveux de Martine, rapport avec les caniches, oui vous avez un humour de merde';
const choice3$4= 'Vous faites remarquer à Elodie qu’elle ne parle pas assez fort et que ses seins vous déconcentrent, Gérard prendra le relais';


function test1$5() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    cantine();
}
function test2$5() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    cantine();
}
function test3$4() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    cantine();
}

function marketingElodie(){
    instance.illustrationDisplay(src$3);
    instance$2.questionDisplay(question$5);
    instance$2.choicesDisplay([
        {
            text: choice1$5,
            callBack: test1$5,
            score: 2
        },
        {
            text:choice2$5,
            callBack: test2$5,
            score: -1
        },
        {
            text:choice3$4,
            callBack: test3$4,
            score: -2
        }
    ]);
}

const question$6 = 'Lors de votre première réunion avec l’équipe de direction:';
const choice1$6= 'Vous croisez le regard de Martine, et votre coeur chavire';
const choice2$6= 'Vous demandez à Youness de changer de place avec Elodie, histoire de profiter de la vue, hé hé';
const choice3$5= 'Vous offrez viennoiseries et café à tout le monde pour faire bonne impression';


function test1$6() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    marketingElodie();
}
function test2$6() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    marketingElodie();
}
function test3$5() {
    instance$1.readSound(sound);
    instance$2.deleteText();
    instance$2.deleteChoice();
    instance.deleteIllustration();
    marketingElodie();
}

function reunion(){
    instance$2.scoreDisplay();
    instance.illustrationDisplay(src$2);
    instance$2.questionDisplay(question$6);
    instance$2.choicesDisplay([
        {
        text: choice1$6,
        callBack: test1$6,
        score: 1
    },
    {
        text:choice2$6,
        callBack: test2$6,
        score: -2
    },
    {
        text:choice3$5,
        callBack: test3$5,
        score: 2
    }
    ]);
}

function persos$1 (){
    instance$3.displayCircles();
    instance$3.titleDisplay('L’équipe de chokédirection');
    instance$2.buttonDisplay('Suivant',()=>{
        instance$3.deletePage();
        reunion();
    });

}

const paragraph$5 = 'Fraîchement parachuté au poste de pdg de Chyuncho,' +'</br>'+
    'Entreprise mondialement reconnue pour sa gamme de plats préparés de luxe' +'</br>'+
    'réservés aux animaux de compagnie.'+'</br>'+
    'Vous pesez dans le game, '+'</br>'+
    'Perché sur un tas de croquettes en or, '+'</br>'+
    'Mais attention, tout ce que vous ferez aura des conséquences.'+'</br>'+
    'Faites les bons choix.';

function intro (){
    instance.bigIllustrationDisplay(src$1);
    instance$2.titleDisplay('Paul Émile Bonkonar');
    instance$2.staticTextDisplay(paragraph$5);
    instance$2.buttonDisplay('Suivant',()=>{
        instance.deleteBigIllu();
        instance$2.deleteButton();
        instance$2.deleteTitle();
        instance$2.deleteParagraph();
        persos$1();
    });


}

function home (){
    instance.illustrationDisplay(src);
    instance$1.readSound(otarie);
    instance$2.buttonDisplay('Commencez l\'histoire',()=>{
        instance.deleteIllustration();
        instance$2.deleteButton();
        intro();
    });

}

const styleEl = document.createElement('style');
styleEl.innerHTML = styles;
document.head.appendChild(styleEl);

home();

}());
//# sourceMappingURL=bundle.js.map
