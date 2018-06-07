class Choices{
    constructor(){
        this.mainContainer = document.querySelector('.mainContainer');
        this.textContainer = document.querySelector('.textContainer');
        this.choicesContainer = document.querySelector('.choices');
        this.scoreContainer = document.querySelector('.score');
        this.buttonContainer = document.querySelector('.buttonContainer');
        this.score = 0;
    }
    scoreDisplay(){
        const scoreCircle = document.createElement('div');
        scoreCircle.classList.add('score-circle');
        this.scoreContainer.appendChild(scoreCircle);

        const scoreEl = document.createElement('p');
        scoreEl.classList.add('score-number');
        scoreCircle.appendChild(scoreEl);
        scoreEl.innerHTML = '0';

        this.scoreEl = scoreEl;
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
            this.choice = choice;

            choice.addEventListener('click',() =>{

                choices[i].callBack();
                this.score += choices[i].score;
                this.scoreEl.innerHTML = this.score;

            })
        }
    }
    titleDisplay(text){
        const title = document.createElement('p');
        title.classList.add('title');
        title.innerHTML = text;
        this.textContainer.appendChild(title);
        this.title = title;

    }
    staticTextDisplay(text){
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.innerHTML = text;
        this.choicesContainer.appendChild(paragraph);
        this.paragraph = paragraph;
    }
    buttonDisplay(text,callBack){
        const button = document.createElement('p');
        button.classList.add('button');
        if (text === 'Suivant'){
            this.buttonContainer.style.justifyContent = 'flex-end';
        }
        button.innerHTML = text;
        this.buttonContainer.appendChild(button);
        this.button = button;

        this.button.addEventListener('click',()=>{
            callBack();
        })
    }
    deleteText(){
        this.question.remove();
    }
    deleteChoice(){
       while(this.choicesContainer.hasChildNodes()){
           this.choicesContainer.removeChild(this.choicesContainer.firstChild);
       }
    }
    deleteButton(){
        this.button.remove();
    }
    deleteTitle(){
        this.title.remove();
    }
    deleteParagraph(){
        this.paragraph.remove();
    }
    deleteScore(){
        this.scoreContainer.remove();
    }


}

const instance = new Choices();
export default instance;