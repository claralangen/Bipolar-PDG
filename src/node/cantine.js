import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/cantine.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import gerard from './gerard';


const question = 'Les ventres gargouillent, midi sonne, il est l’heure de se rendre à la cantine avec toute l’équipe:\n';
const choice1= 'Vous faites un scandale sur l’obligation de manger de la bouffe halal';
const choice2= 'Vous annoncez à tout le monde que dorénavant, on oublie les tickets restos, la cantine suffira amplement ';
const choice3= 'Au cours du repas, Elodie vous ouvre les yeux sur la viande qu’il y a a dans votre assiette, vous décidez de devenir végétarien';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    gerard();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    gerard();
}
function test3() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    gerard();
}

export default function(){
    illustration.illustrationDisplay(src);
    choices.questionDisplay(question);
    choices.choicesDisplay([
        {
            text: choice1,
            callBack: test1,
            score: -2
        },
        {
            text:choice2,
            callBack: test2,
            score: -1
        },
        {
            text:choice3,
            callBack: test3,
            score: 3
        }
    ])
}