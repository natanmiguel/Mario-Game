const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fim = document.querySelector('.fim');
const ponto = document.querySelector('.ponto')
const cenario = document.querySelector('.gameMario')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvemPosition = nuvem.offsetLeft;
    
    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;
       /// mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';
        nuvem.style.left = `${nuvemPosition}px`;
        nuvem.style.animation = 'none';
        mario.classList.add('morreu');
        mario.style.bottom = `-150px`;
        //mario.style.animation = 'none';
        fim.style.display = 'block';
       ponto.classList.add('scoreFinal');
        clearInterval(loop);
        clearInterval(score)

    }
}, 10);

const score = setInterval(() => {
   ponto.innerHTML = `<p>SCORE:<span> ${setInterval(score)}</span></p>`
   
   if(setInterval(score) >= 100){
    cenario.classList.add('chaoLava');
   } if (setInterval(score) >= 200) {
    cenario.classList.add('dark');
   }
   
}, 100);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);