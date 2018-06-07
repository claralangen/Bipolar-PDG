import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/Fight.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';
import final2 from './badFinal2';
import final1 from './badFinal1';


const question = 'Des coups d’agrafeuses sur les bras, des bics dans les yeux et des lancés de post-its, c’est la guerre au bureau';
const choice1= 'Vous menacez de jetez Choupi par la fenêtre si tout le monde ne se remet pas au travail';
const choice2= 'Martine est si belle lorsqu’elle tord le cou à Youness, vos assaillants profitent de votre béatitude pour vous mettre un sac à litière sur la tête';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    final1();
}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();
    final2();
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
        }
    ])
}