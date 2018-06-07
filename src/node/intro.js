import illustration from '../js/illustration';
import src from '../assets/illuFoot.svg';
import choices from '../js/choices';
import persos from './persos';

const paragraph = 'Fraîchement parachuté au poste de pdg de Chyuncho,' +'</br>'+
    'Entreprise mondialement reconnue pour sa gamme de plats préparés de luxe' +'</br>'+
    'réservés aux animaux de compagnie.'+'</br>'+
    'Vous pesez dans le game, '+'</br>'+
    'Perché sur un tas de croquettes en or, '+'</br>'+
    'Mais attention, tout ce que vous ferez aura des conséquences.'+'</br>'+
    'Faites les bons choix.';

export default function (){
    illustration.bigIllustrationDisplay(src);
    choices.titleDisplay('Paul Émile Bonkonar');
    choices.staticTextDisplay(paragraph);
    choices.buttonDisplay('Suivant',()=>{
        illustration.deleteBigIllu();
        choices.deleteButton();
        choices.deleteTitle();
        choices.deleteParagraph();
        persos();
    });


}
