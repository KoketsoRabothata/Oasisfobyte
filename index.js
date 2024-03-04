hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const animate1 = (word) => {
    word.classList.add("animate");
 }
 
    let  word = document.querySelectorAll(".word") 
        
        const animateAll = (animate) => {
            setTimeout( () => {
                animate1(word[0]);
                setTimeout(() =>{
                    animate1(word[1]);
                    setTimeout(() =>{
                        animate1(word[2])
                    }, 1000)
                }, 1000) 
            }, 1000) 
 }
 
 animateAll(animate1) 