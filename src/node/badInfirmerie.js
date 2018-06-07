import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/infirmerie.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import massacre from './badMassacre';
import final4 from './badFinal4';
import final3 from './badFinal3';


const question = 'Martine vous rejoint à l’infirmerie pour soigner votre nez ensanglanté';
const choice1= 'Vous pleurez dans ses bras comme un bébé';
const choice2= 'Vous lui retirer ses vêtements de mamie avec entrain';
const choice3= 'Vous l’enrôler pour prendre d’assaut l’open space';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    final4();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    final3();
}
function test3() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    massacre();
}

export default function(){
    illustration.illustrationDisplay(src);
    choices.questionDisplay(question);
    choices.choicesDisplay([
        {
            text: choice1,
            callBack: test1,
        },
        {
            text:choice2,
            callBack: test2,
        },
        {
            text:choice3,
            callBack: test3,
        }
    ])
}