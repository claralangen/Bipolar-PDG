import martine from '../assets/martine.svg';
import youness from '../assets/youness.svg';
import elodie from '../assets/elodie.svg';
import gerard from '../assets/gerard.svg';
import choupi from '../assets/choupi.svg';

class Persos {
    constructor() {
        this.src = [martine, youness, elodie, gerard, choupi];
        this.names = ['Martine', 'Youness', 'Élodie', 'Gérard', 'Choupi'];
        this.descriptions = ['de la Compta', 'en dépression depuis sa promotion', 'beaucoup trop enjouée', 'Aime avoir le nez bouché', 'Le rat euh non chien mascotte'];
        this.mainContainer = document.querySelector('.mainContainer');
        this.textContainer = document.querySelector('.textContainer');
        this.button = document.querySelector('.buttonContainer');
    }

    displayCircles(){

        const persosContainer = document.createElement('div');
        persosContainer.classList.add('persosContainer');
        this.mainContainer.insertBefore(persosContainer, this.button);
        this.persosContainer = persosContainer;

        for (let i = 0; i < this.src.length; i++) {
            const persoContainer = document.createElement('div');
            persoContainer.classList.add('perso');
            persosContainer.appendChild(persoContainer);

            const circle = document.createElement('img');
            circle.setAttribute('src', this.src[i]);
            persoContainer.appendChild(circle);

            const name = document.createElement('p');
            name.classList.add('perso-name');
            name.innerHTML = this.names[i];
            persoContainer.appendChild(name);

            const description = document.createElement('p');
            description.classList.add('perso-description');
            description.innerHTML = this.descriptions[i];
            persoContainer.appendChild(description);
        }
    }



    titleDisplay(text) {
        const title = document.createElement('p');
        title.classList.add('persosContainer-title');
        title.innerHTML = text;
        this.textContainer.appendChild(title);

        this.title = title;
    }



    deletePage() {
        this.persosContainer.remove();
        this.button.remove();
        this.title.remove();
    }
}

const instance = new Persos();
export default instance;