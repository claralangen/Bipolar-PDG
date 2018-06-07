import illustration from '../js/illustration';
import src from '../assets/illuHome.svg';
import sound from '../js/sounds';
import otarie from '../assets/otarie.mp3';
import choices from '../js/choices';
import intro from './intro';


export default function (){
    illustration.illustrationDisplay(src);
    sound.readSound(otarie);
    choices.buttonDisplay('Commencez l\'histoire',()=>{
        illustration.deleteIllustration();
        choices.deleteButton();
        intro();
    });

}
