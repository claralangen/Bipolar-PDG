class Illustration {
    constructor(){
        this.imgContainer = document.querySelector('.imgContainer');
    }
    illustrationDisplay(src){
        const illustration = document.createElement('img');
        illustration.setAttribute('src',src);
        illustration.classList.add('img');
        this.imgContainer.appendChild(illustration);
        this.img = illustration;
    }
    bigIllustrationDisplay(src){
        const bigIllu = document.createElement('img');
        bigIllu.setAttribute('src',src);
        bigIllu.classList.add('bigIllu');
        this.imgContainer.appendChild(bigIllu);
        this.bigIllu = bigIllu;
    }
    deleteIllustration(){
        this.img.remove();
    }
    deleteBigIllu(){
        this.bigIllu.remove();
    }
}

const instance = new Illustration();
export default instance;