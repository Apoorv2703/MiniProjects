let button = document.querySelector("button");
let diceOne = document.querySelector("#dice-one");
let diceTwo = document.querySelector("#dice-two");
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

let icons = ["" , "fa-solid fa-dice-one","fa-solid fa-dice-two","fa-solid fa-dice-three","fa-solid fa-dice-four","fa-solid fa-dice-five","fa-solid fa-dice-six"]


let rollDice = ()=>{
    return Math.floor(Math.random()*6 + 1)
}



let getResult = ()=>{
    let resultOne = rollDice();
    let resultTwo = rollDice();
    let sum = resultOne + resultTwo;

diceOne.style.transform = "rotate(360deg)"
diceTwo.style.transform = "rotate(360deg)"

    diceOne.className = icons[resultOne]
    diceTwo.className = icons[resultTwo]

    setTimeout(()=>{
        diceOne.style.transform = "rotate(0deg)"
diceTwo.style.transform = "rotate(0deg)"


    },250)

    

    if(sum === 2 || sum === 6 || sum ===12){
        h1.innerText = "Winner";
        p.innerText = "Sum :" + sum;
    } else if( sum === 3 || sum === 5 || sum === 10){
        h1.innerText = "looser";
        p.innerText = "Sum :" + sum;

    }else{
        h1.innerText = "Try again";
        p.innerText = "Sum :" + sum;

    }
}

button.addEventListener("click" , getResult);

