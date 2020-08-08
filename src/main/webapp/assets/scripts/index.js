import Animated from "./components/animated.js"

//get datas
const headerText = document.querySelector('.header_left_text')

const buttonHeader = document.querySelector('.header_button')

const aboutText = document.querySelector('.about_text')

const aboutContact = document.querySelectorAll('.contact_button')

// => quote 
const quote = document.getElementById("quote")

// => experience
const experience = document.querySelectorAll(".experience_card")

//call Object
window.animations = new Animated(headerText,buttonHeader,aboutText,aboutContact,quote,experience)

//execute
window.addEventListener("DOMContentLoaded", function(){
    animations.startLeft()
    animations.headerButton()
    animations.aboutUp()
    animations.aboutContact()
})

window.addEventListener("scroll", () => {
    let coords = quote.getBoundingClientRect()

    if(coords.y <= 600){
        animations.remove();
        animations.aboutUp2();
    }

    if(coords.y <= 440){
        animations.aboutContact2()
    }
})
