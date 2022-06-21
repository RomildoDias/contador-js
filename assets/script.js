
let numero = 0



function increment(){
    numero++
    display()
    
} 
function decrement(){
    numero--
    display()
}
function display(){
    const contador = document.querySelector('.zero');
    contador.innerHTML = numero;
}

display()