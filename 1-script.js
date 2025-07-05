import readline from "readline";

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question("Enter a number: ", function(input) {
    if (input >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

    // Always close the interface when done
    rl.close();
});
