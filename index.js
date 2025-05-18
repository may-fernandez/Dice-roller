
function rollDice() {
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let  i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random()*6) + 1; // Da un numero random entre 1 y 6
        values.push(value); // Guardo los valores en values[]
        images.push(`<img src="assets/Dice-${value}.png" alt = "Dice ${value}">`); // Dependiendo el valor del dado muestra el png
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`; // Muestra los valores del dado separados por una ,
    diceImages.innerHTML = images.join('');

}