const moon = document.querySelector('#moon');
const text = document.querySelector('#text');
const train = document.querySelector('#train');
const desertmoon = document.querySelector('#desert-moon');
const man = document.querySelector('#man');

window.addEventListener("scroll",()=>{
    const value = window.scrollY;
    moon.style.top = value * .9 + 'px';
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left =  value * 1.5 + 'px';

    desertmoon.style.top = value * .3 + 'px';
    man.style.left = value * .5 + 'px';
});




const calcScrollvalue = ()=> {
    const progress  = document.getElementById('progress');
    const pos = document.documentElement.scrollTop;

    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100)/ calcHeight);

    if(pos > 100){
        progress.style.display = 'none';
    }else{
        progress.style.display = 'grid';
    }

    progress.addEventListener("click",() =>{
        document.documentElement.scrollTop = 0;
    });

    progress.style.background = `linear-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
}

window.onscroll = calcScrollvalue;
window.onload = calcScrollvalue;