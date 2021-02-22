let coinFlip = Math.round(Math.random());

let choice = prompt("Choose Heads or Tails by entering \"h\" or \"t\":");

// heads = 0, tails = 1
if (choice === "h") {
    Number(choice = 0);
} else if (choice == "t") {
    Number(choice = 1);
}
else {
    alert("You did not enter \"h\" or \"t\". The following results will not be accurate.");
}

console.log(typeof choice);

// nested conditional statements
if (choice < 1) {  //choice is Heads
    if (coinFlip < 1) { // and coinFlip is Heads
        console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
        alert("The flip was heads and you chose heads...you win!");
    } else { //coinFlip is Tails
        console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
        alert("The flip was tails but you chose heads...you lose!");
    }
} else if (choice >= 1) {  //choice is Tails
    if (coinFlip < 1) { // and coinFlip is Heads
        console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
        alert("The flip was heads but you chose tails...you lose!");
    } else { //coinFlip is Tails
        console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("You did not enter \"h\" or \"t\" in the first step correctly. Please restart the game.");
}



/*  //Did this with if else
if (coinFlip < 1 && choice < 1) {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip < 1 && choice >= 1) {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip >= 1 && choice < 1) {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip >= 1 && choice >= 1) {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("The flip was tails and you chose tails...you win!");
} else {
    console.log(`coinFlip: ${coinFlip}\nchoice: ${choice}`);
    alert("You did not enter \"h\" or \"t\" in the first step correctly. Please restart the game.");
}
*/