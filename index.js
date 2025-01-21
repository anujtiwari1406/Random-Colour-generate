const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const body = document.querySelector('body');

const div = document.createElement('div')

body.appendChild(div);




div.appendChild(h1);
div.appendChild(button);
div.classList.add('center')

function changeColor() {
    this.style.color = 'black';
    const n1 = Math.floor(Math.random() * 255);
    const n2 = Math.floor(Math.random() * 255);
    const n3 = Math.floor(Math.random() * 255);
    const rgb = `rgb(${n1}, ${n2}, ${n3})`;
    body.style.backgroundColor = `${rgb}`;
    h1.innerHTML = `${rgb}`;

}


button.addEventListener('click', changeColor);

