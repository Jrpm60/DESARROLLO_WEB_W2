// esta actividad es para practicar haciendo el DOM
// Josew R. Pablo
// 2021-09-07

document.body.append("hola de nuevo en l1.js");


// crear un elemento <p> para añadir una nueva transaccion

const p = document.createElement('p');
p.innerHTML = 'Hola de nuevo PPP  en l1.js';
p.style.backgroundColor = 'green';

document.body.appendChild(p);

const div =document.querySelector('div');

console.log(div.innerHTML);
console.log(div.innerText);
console.log(div.innerContent);


document.body.removeChild(div);

const h1 = document.querySelector('h1');
console.log(h1.getAttribute('title'));
h1.setAttribute('title', "otro atributo");
console.log(h1.getAttribute('title'));

h1.classList.add('color-red')
h1.classList.add('border-blue')

// agregar un estilo dinamico al primer div

const d =document.querySelector('div');

if (d) {
    d.classList.add('color-red');
}



