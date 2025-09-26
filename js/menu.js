document.querySelector('#menu').addEventListener('click', abrir_menu);

let clique = 1

function abrir_menu(){

let menu = document.querySelector('.quiz');

let abri = document.getElementById('menu')

clique++

if (clique%2 == 0){

menu.style.transition= '0.3s';
menu.style.top = '35px';
abri.style.transform = 'rotate(89deg)';
}
else{

    menu.style.top = '-30px';
    abri.style.transform = 'rotate(0deg)';

}
}