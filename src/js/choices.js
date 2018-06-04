class Choices{
    constructor(){
        this.textContainer = document.querySelector('.text');
        this.choicesContainer = document.querySelector('.choices');
        this.scoreEl= document.querySelector('.score-number');
        this.score = 0;
    }
    questionDisplay(text){
        const question = document.createElement('p');
        question.classList.add('question');
        question.innerHTML = text;
        this.textContainer.appendChild(question);

        this.question = question;
    }
    choicesDisplay(choices){

        for (let i = 0; i < choices.length; i++) {
            const choice = document.createElement('p');
            choice.classList.add('choice');
            choice.innerHTML = choices[i].text;
            this.choicesContainer.appendChild(choice);
            this.choice =  choice;

            choice.addEventListener('click',() =>{

                choices[i].callBack();
                this.score += choices[i].score;
                this.scoreEl.innerHTML = this.score;

            })
        }
    }
    deleteText(){
        this.question.remove();
    }
    deleteChoice(){
       while(this.choicesContainer.hasChildNodes()){
           this.choicesContainer.removeChild(this.choicesContainer.firstChild);
       }
    }
}

const instance = new Choices();
export default instance;