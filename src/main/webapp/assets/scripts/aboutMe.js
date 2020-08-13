import AnimatedAboMe from "./components/animatedAbout.js"

const footerTitle2 = document.querySelector(".fotter_tittle2");
const footerTitle = document.querySelector('.fotter_tittle1');


const animationsAboutMe = new AnimatedAboMe(footerTitle2,footerTitle)

window.addEventListener("scroll", () => {
    let coords = footerTitle2.getBoundingClientRect()
    

    if(coords.y <= 600){
        animationsAboutMe.remove3()
        animationsAboutMe.startLeft()
        animationsAboutMe.headerButton()
    }
})