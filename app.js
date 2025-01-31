// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Condicionales, funciones, Array

//Requerimientos: Agregar nombres,necesita validación de datos de entrada
//Es necesario ingresar un nombre en el campo si está vacio

//Puse un limite de nombres en un Array de 5 para que no sea infinito el ciclo

let amigos = [];
let numeroMaximo = 5;

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;
    let listaAmigos = document.getElementById('listaAmigos');//aqui se define la lista para los amigos
    
    if (nombre === "") {
        alert("Es necesario ingresar un nombre"); //Las validaciones en caso de que no hubiera ingresado texto
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado");//Validación para un nombre repetido
        return;
    }
    
    if (amigos.length >= numeroMaximo) {
        alert(`Ya has agregado los ${numeroMaximo} ${numeroMaximo === 1 ? 'amigo' : 'amigos'} permitidos.`);
        return;
    }

    amigos.push(nombre);
    listaAmigos.innerHTML = amigos.join('<br>');//implemeté el uso de <br> para dejar la lista en vertical
    console.log(amigos);
    
    input.value = "";
    }  

function sortearAmigo() {
    if (amigos.length < numeroMaximo) {
        alert(`Debes ingresar ${numeroMaximo} ${numeroMaximo === 1 ? 'amigo' : 'amigos'} antes de sortear.`);
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);//de la lista de amigo aleatorio se escoge uno de los nombres
    let amigoSecreto = amigos[amigoAleatorio];
    console.log(amigoSecreto);
    
    let resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;

}
