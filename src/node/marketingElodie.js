import choices from '../js/choices';
import illustration from '../js/illustration.js';
import src from '../assets/illu2.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import cantine from './cantine';

const question = 'Elodie présente la stratégie marketing sur les nouvelles lasagnes pour caniches';
const choice1= 'Vous parlez à tout le monde de Fifi votre fox terrier avec des trémolos dans la voix, c’était votre tout premier ami\n';
const choice2= 'Vous faites une blague douteuse sur les cheveux de Martine, rapport avec les caniches, oui vous avez un humour de merde';
const choice3= 'Vous faites remarquer à Elodie qu’elle ne parle pas assez fort et que ses seins vous déconcentrent, Gérard prendra le relais';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    cantine();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    cantine()
}
function test3() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    cantine()
}

export default function(){
    illustration.illustrationDisplay(src);
    choices.questionDisplay(question);
    choices.choicesDisplay([
        {
            text: choice1,
            callBack: test1,
            score: 2
        },
        {
            text:choice2,
            callBack: test2,
            score: -1
        },
        {
            text:choice3,
            callBack: test3,
            score: -2
        }
    ])
}