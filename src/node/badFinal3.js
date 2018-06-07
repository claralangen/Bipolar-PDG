import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/chine.svg';
import home from "./home";


const paragraph ='Vous décidez de vous enfuir en Chine avec Martine' +'</br>'+
    'Vos collègues à bout de nerfs, vous on fait marcher à quatres pattes,' +'</br>'+
    'Pour vivre le parfait amour'+'</br>'+
    'Loin de la bienpensance'+'</br>'+
    'Loin de la liberté d’expression'+'</br>'+
    'Loin des féminazis'+ '</br>'+
    'Loin des animaux bien traités'+ '</br>'+
    'Enfin vous allez pouvoir déguster de vrais hot dogs';

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