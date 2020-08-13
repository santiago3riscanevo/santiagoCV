function Animated(headerText,buttonHeader,aboutText,aboutcontact,quote,experience, experienciaTitle,footerTitle2,footerTitle){
    this.headerText = headerText;
    this.buttonHeader = buttonHeader;
    this.aboutText = aboutText;
    this.aboutcontact = aboutcontact;
    this.quote = quote;
    this.experience = experience;
    this.experienciaTitle = experienciaTitle;
    this.footerTitle2 = footerTitle2;
    this.footerTitle = footerTitle;
}


Animated.prototype.startLeft = function(){
    const data = this.headerText;
    data.classList.add('animate__animated', 'animate__fadeInLeft')
}

Animated.prototype.startLeft2 = function(){
    const data = this.footerTitle2;
    data.classList.add('animate__animated', 'animate__fadeInLeft')
}


Animated.prototype.headerButton = function(){
    const data = this.buttonHeader;
    data.classList.add('animate__animated','animate__zoomIn', 'animate__delay-1s')
    
}

Animated.prototype.headerButton2 = function(){
    const data = this.experienciaTitle;
    data.classList.add('animate__animated','animate__zoomIn')
}

Animated.prototype.headerButton3 = function(){
    const data = this.footerTitle;
    data.classList.add('animate__animated','animate__zoomIn','animate__delay-1s')
}

Animated.prototype.aboutUp = function(){
    const data = this.aboutText;
    data.classList.add('animate__animated','animate__fadeInUp')
}

Animated.prototype.aboutUp2 = function(){
    const data = this.quote;
    data.classList.add('animate__animated','animate__fadeInUp')
}

Animated.prototype.aboutContact = function(){
    const data = this.aboutcontact;
    data.forEach(e => {
        e.classList.add('animate__animated','animate__zoomIn', 'animate__delay-1s')
    });
}

Animated.prototype.aboutContact2 = function(){
    const data = this.experience;
    data.forEach(e => {
        e.classList.add('animate__animated','animate__zoomIn', 'animate__delay-1s')
    });
}

Animated.prototype.remove = function(){
    const data = this.quote;
    data.classList.remove('animate__fadeOutLeft')
}

Animated.prototype.remove2 = function(){
    const data = this.experienciaTitle;
    data.classList.remove('animate__fadeOutLeft')
}

Animated.prototype.remove3 = function(){
    const data2 = this.footerTitle2
    const data3 = this. footerTitle
    data2.classList.remove('animate__fadeOutLeft')
    data3.classList.remove('animate__fadeOutLeft')
}
export default Animated