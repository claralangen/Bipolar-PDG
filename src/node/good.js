import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/bus.svg';


const paragraph ='Vous êtes bien trop gentil,' +'</br>'+
    'La vie d\'entreprise n\'est vraiment pas faite pour vous '+'</br>'+
    'Penser au profit avant l\'humain, c\'est fini !' +'</br>'+
    'Vous partez construire une école en Ouganda+'+ '</br>';

const illu = illustration.bigIllu;

function illuPosition(){
    illu.style.top = 42 + '%';
    illu.style.right = 10 + '%';
}

export default function() {
    illustration.bigIllustrationDisplay(src);
    choices.staticTextDisplay(paragraph);
}