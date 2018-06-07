import choices from '../js/choices';
import persos from '../js/persos';
import reunion from './reunion';


export default function (){
    persos.displayCircles();
    persos.titleDisplay('L’équipe de chokédirection');
    choices.buttonDisplay('Suivant',()=>{
        persos.deletePage();
        reunion();
    });

}
