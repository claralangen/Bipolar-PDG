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
    deleteIllustration(){
        this.img.remove();
    }
}

const instance = new Illustration();
export default instance;