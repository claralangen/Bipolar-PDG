import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/illu1.svg';
import sounds from '../js/sounds';
import sound from '../assets/button.wav';

const question = 'Au détour d’un couloir vous tombez sur Gérard qui parle à Martine avec entrain de sa collection de mouchoir aux motifs aquatiques';
const choice1= 'Vous parlez à Gérard du dossier en cours, tout en lançant des regards appuyés à Martine';
const choice2= '“Mais tu vois pas que t’emmerdes tout le monde avec tes mouchoirs ! Circulez, retournez bossez !”';
const choice3= '“Oh incroyable moi aussi je collectionne les mouchoirs ! Mais avec des dinosaures dessus !”';


function test1() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();

}
function test2() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();

}
function test3() {
    sounds.readSound(sound);
    choices.deleteText();
    choices.deleteChoice();
    illustration.deleteIllustration();

}

export default function(){
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
            score: -1
        },
        {
            text:choice3,
            callBack: test3,
            score: 2
        }
    ])
}