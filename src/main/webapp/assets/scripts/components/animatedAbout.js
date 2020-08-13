class AnimatedAboMe {
    constructor(footerTitle2, footerTitle) {
        this.footerTitle2 = footerTitle2;
        this.footerTitle = footerTitle;
    }
    
    startLeft() {
        const data = this.footerTitle2;
        data.classList.add('animate__animated', 'animate__fadeInLeft');
    }

    headerButton() {
        const data = this.footerTitle;
        data.classList.add('animate__animated', 'animate__zoomIn', 'animate__delay-1s');
    }

    remove3() {
        const datas = [this.footerTitle2, this.footerTitle];
        for(let i = 0; i < datas.length; i++){
            datas[i].classList.remove('animate__fadeOutLeft');
        }
    }
}




export default AnimatedAboMe