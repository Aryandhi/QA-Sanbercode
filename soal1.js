const { stdin, stdout } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please input number (only: more than 0, and even number) : ", number => {
    if (number < 0) {
        console.log("ERROR MESSAGE: Sorry, Please Input number more than 0");
        readline.close();
    } 
    else if (number % 2 != 0) {
        console.log("ERROR MESSAGE: Sorry, Please Input Even Number");
        readline.close();
    }
    else {
        console.log(`root of number ${number} is: `+ Math.sqrt(number));
        readline.close();
    }
})