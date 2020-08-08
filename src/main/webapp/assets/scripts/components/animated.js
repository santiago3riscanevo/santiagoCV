function Animated(headerText,buttonHeader,aboutText,aboutcontact,quote,experience){
    this.headerText = headerText;
    this.buttonHeader = buttonHeader;
    this.aboutText = aboutText;
    this.aboutcontact = aboutcontact;
    this.quote = quote;
    this.experience = experience;
}


Animated.prototype.startLeft = function(){
    const data = this.headerText;
    data.classList.add('animate__animated', 'animate__fadeInLeft')
}

Animated.prototype.headerButton = function(){
    const data = this.buttonHeader;
    data.classList.add('animate__animated','animate__zoomIn', 'animate__delay-1s')
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

export default Animated