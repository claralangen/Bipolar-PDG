import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/racisme.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import infirmerie from './badInfirmerie';
import massacre from './badMassacre';


const question = 'Quel plaisantin, vous n’avez pas pu résister (pour la 20ème fois) à faire une remarque raciste à Youness. Vous recevez un poing dans la gueule.';
const choice1= 'Vous vous enfuyez en rampant comme le lâche que vous êtes';
const choice2= 'Vous retirez votre pantalon rose pour l’étrangler avec';
const choice3= 'Gérard vient à votre rescousse avec sa grosse bedaine';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    infirmerie();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    massacre();
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