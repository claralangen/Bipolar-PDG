import choices from '../js/choices';
import illustration from '../js/illustration';
import src from '../assets/bench.svg';
import home from "./home";


const paragraph ='Choupi est mort.' +'</br>'+
'Les médias ont relayés l’info, ce qui vous a valu une réputation de tueur de chihuahuas.' +'</br>'+
'Face à cette esclandre, les investisseurs se sont détournés de Chyuncho.'+'</br>'+
'L’entreprise a fait faillite.'+'</br>'+
'Perché sur un tas de croquettes en or, '+'</br>'+
'En cause, votre racisme d’un autre âge, votre misogynie et votre manque de considération pour les animaux+'+ '</br>'+
'Ah et Gérard est également mort lorsqu’il a sauté du 28ème étage en pensant naïvement qu’il réussirait à sauver Choupi';

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