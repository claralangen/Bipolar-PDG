class Sounds{
    constructor(){
        this.mainContainer = document.querySelector('.mainContainer');
    }
    readSound(src){
        const sound = document.createElement('audio');
        sound.setAttribute('src',src);
        sound.setAttribute('autoplay', true);
        this.mainContainer.appendChild(sound);
    }
}

const instance = new Sounds();
export default instance;