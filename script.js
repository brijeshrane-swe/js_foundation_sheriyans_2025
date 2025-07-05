/**
 * A template file to write code in JavaScript file and console.
 *
 * Problem:
 * [Describe the problem here]
 *
 * Input:
 * [Describe the input]
 *
 * Output:
 * [Describe the output]
 *
 * Example:
 * [Provide example input/output]
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(input) {
    // Process input here
    console.log("Processing input:", input);

    // Example: Split string by space
    const tokens = input.trim().split(/\s+/);
    console.log("Tokens:", tokens);
}

// Read a single line input
rl.question("Enter input: ", (answer) => {
    solve(answer);
    rl.close();
});
