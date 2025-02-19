const insta1 = document.querySelector(".imagem-insta1");

const insta2 = document.querySelector(".imagem-insta2");





function trocarEstilo() {
    if (insta2.style.opacity == 0) {

        insta2.style.opacity = 1

    } else {
        
        insta2.style.opacity = 0
    }
    
}




setInterval(trocarEstilo, 2500);