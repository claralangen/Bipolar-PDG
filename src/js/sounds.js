class Sounds{
    constructor(){
        this.textContainer = document.querySelector('.text');
    }
    readSound(src){
        const sound = document.createElement('audio');
        sound.setAttribute('src',src);
        sound.setAttribute('autoplay', true);
        this.textContainer.appendChild(sound);
    }
}

const instance = new Sounds();
export default instance;