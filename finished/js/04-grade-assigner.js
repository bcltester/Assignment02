let grade = prompt("Enter your score (must be between 1 and 100):","Number between 1 and 100");
if (grade < 1 || grade > 100) {
    alert("The number you entered is not between 1 and 100. You need to enter a number that is at least 1 and at most 100.");
}

if (grade >= 90 && grade <= 100) {
    console.log("You received an A.");
} else if (grade >= 80 && grade <= 89) {
    console.log("You received an B.");
} else if (grade >= 70 && grade <= 79) {
    console.log("You received an C.");
} else if (grade >= 60 && grade <= 69) {
    console.log("You received an D.");
} else {
    console.log("You received an F.");
}