import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/bench.svg';
import home from "./home";


const paragraph ='CAprès vous avoir ligoté et bâillonné,' +'</br>'+
    'Vos collègues à bout de nerfs, vous on fait marcher à quatres pattes,' +'</br>'+
    'Tiré par un Choupi surexcité à travers tout l’étage\n'+'</br>'+
    'L’entreprise a fait faillite.'+'</br>'+
    'Suite à cette humiliation vous quittez l’entreprise'+'</br>'+
    'Vous êtes toujours un con, mais en plus de cela,'+ '</br>'+
    'Maintenant vous avez une peur bleue des chihuahuas\n';

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