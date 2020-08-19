function NavBurguer(){
    this.burguer = document.querySelector(".burguer_menu")
    this.navList = document.querySelector(".nav_list")
    this.listItem = document.querySelectorAll(".nav_list ul > li")
}

NavBurguer.prototype.start = function(){
    this.burguer.addEventListener("click",()=>{
        this.navList.classList.toggle('open');
        this.burguer.classList.toggle('ex');
        
        this.listItem.forEach((link,index) => {
            if(link.style.animation ){
                link.style.animation  = ``;
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        })
    })
}

export default NavBurguer;