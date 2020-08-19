import Animated from "./components/animated.js"
import NavBurguer from "./components/burguerMenu.js"

//get datas
const headerText = document.querySelector('.header_left_text')
const buttonHeader = document.querySelector('.header_button')
const aboutText = document.querySelector('.about_text')
const aboutContact = document.querySelectorAll('.contact_button')
// => quote 
const quote = document.getElementById("quote")
// => experience
const experienciaTitle = document.querySelector(".experience_title")
const experience = document.querySelectorAll(".experience_card")
// => footer
const footerTitle2 = document.querySelector(".fotter_tittle2")
const footerTitle = document.querySelector('.fotter_tittle1')
//call Object
window.animations = new Animated(headerText,buttonHeader,aboutText,aboutContact,quote,experience,experienciaTitle,footerTitle2,footerTitle)

const startBurguer = new NavBurguer();

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
        animations.remove2()
        animations.headerButton2()
    }

    if(coords.y <= 5){
        animations.remove3()
        animations.startLeft2()
        animations.headerButton3()
    }
})

startBurguer.start()


