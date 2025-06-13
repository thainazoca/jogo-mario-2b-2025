const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe)
                                    
const jump = () => {
  mario.classList.remove.add("jump);

 seTimeout(() => {
    mario.classList.remove("Jump");
  }
           ,500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  cobst marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

                         if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                           pipe.style.animation = "none";
                           pipe.style.left = ${pipePosition}px`;

                           mario.style.animation = "none";
                           mario.style.left = `${marioPosition}px`;
                           }
                           })
                           document.addEventListener("keydown", jump);
