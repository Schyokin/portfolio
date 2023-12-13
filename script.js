const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const contact = document.getElementById('ctn');

let ind = 0;


function ClickLink1(){
    if(ind !==0){ window.open('https://schyokin.github.io/new_project/');}
}

function ClickLink2(){
    if(ind !==0){ window.open('https://schyokin.github.io/calculate/');}
}

function contactMouseLeave(){
    if(ind !==0){ contact.innerHTML ="Контакты";}
}

function contactMouseOver(){
    if(ind !==0){contact.innerHTML ="schyokin@mail.ru";}
}

image1.addEventListener('click', (event) => { ind = 1; ClickLink1()});
image2.addEventListener('click', (event) => { ind = 1; ClickLink2()});
contact.addEventListener('mouseleave', (event) => {ind = 1; contactMouseLeave()});
contact.addEventListener('mouseover', (event) => { ind = 1; contactMouseOver()});