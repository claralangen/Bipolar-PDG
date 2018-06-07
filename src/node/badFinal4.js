import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/martineLeader.svg';
import home from './home';


const paragraph ='Martine est comme la mère que vous n’avez jamais eu' +'</br>'+
    'Vous lui avez confiez toutes vos angoisses' +'</br>'+
    'Elle ne vous a pas rabaissé quand vous avez montré des signes de faiblesses'+'</br>'+
    'Elle a d’ailleurs pris les reines de la compagnie pour votre bien'+'</br>'+
    'Loin de la liberté d’expression'+'</br>'+
    'Loin des féminazis'+ '</br>'+
    'Seulement c’est étrange vous n’avez plus aucune responsabilité,'+ '</br>'+
    'Et elle vous demande toujours de vous taire en réunion ...';

const illu = illustration.bigIllu;

function illuPosition(){
    illu.style.top = 42 + '%';
    illu.style.right = 10 + '%';
}

export default function() {
    illustration.bigIllustrationDisplay(src);
    choices.staticTextDisplay(paragraph);
    choices.buttonDisplay('Recommencer',()=>{
        home()
    })
}