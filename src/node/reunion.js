import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/illu1.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import marketingElodie from './marketingElodie';

const question = 'Lors de votre première réunion avec l’équipe de direction:';
const choice1= 'Vous croisez le regard de Martine, et votre coeur chavire';
const choice2= 'Vous demandez à Youness de changer de place avec Elodie, histoire de profiter de la vue, hé hé';
const choice3= 'Vous offrez viennoiseries et café à tout le monde pour faire bonne impression';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    marketingElodie();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    marketingElodie();
}
function test3() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    marketingElodie();
}

export default function(){
    choices.scoreDisplay();
    illustration.illustrationDisplay(src);
    choices.questionDisplay(question);
    choices.choicesDisplay([
        {
        text: choice1,
        callBack: test1,
        score: 1
    },
    {
        text:choice2,
        callBack: test2,
        score: -2
    },
    {
        text:choice3,
        callBack: test3,
        score: 2
    }
    ])
}