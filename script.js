// import data from './gatitos.json'; 
// const word = data.name;
// console.log(word);

const cardTitles = document.querySelectorAll('.card-title');
let cardText = document.querySelectorAll('.card-text');
const fotoGatos = document.querySelectorAll('.fotoGatos');

// console.log(cardText);

function cargarAnimales() {
    fetch('gatitos.json')
    .then(response => response.json())
    .then(gatitos => {
        gatitos.forEach((gatito, index) => {
        const { nombre, raza, edad, sexo } = gatito;
        cardTitles[index].textContent = nombre;
        
        let ul = document.createElement('ul');
        const liEdad = document.createElement('li');
        liEdad.textContent = `Edad: ${edad}`;
        ul.appendChild(liEdad);
        const liRaza = document.createElement('li');
        liRaza.textContent = `Raza: ${raza}`;
        ul.appendChild(liRaza);
        const liSexo = document.createElement('li');
        liSexo.textContent = `Sexo: ${sexo}`;
        ul.appendChild(liSexo);
        cardText[index].appendChild(ul);

        // const fotoGato = document.createElement('img');
        if (gatito.img) {
            fotoGatos[index].src = gatito.img;
        }
        // fotoGatos.appendChild(fotoGato);


        // console.log(fotoGato);
        
        
       
        // console.log(ul);


        });    
    });





}
cargarAnimales();