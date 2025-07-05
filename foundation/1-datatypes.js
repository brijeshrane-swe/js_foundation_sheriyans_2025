/**
 * 1-datatypes
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
    input: process.stdin, output: process.stdout
});

function datatypeSymbol(input) {
    // Process input here
    console.log("Processing input:", input);

    const obj1 = {
        name: Symbol(input), age: 25, isStudent: Symbol(false),
    }

    const obj2 = {
        name: input, age: 25, isStudent: Symbol(false),
    }
    console.log(`Name: ${obj1.name === obj2.name}\nAge: ${obj1.age === obj2.age}\nIs Student: ${obj1.isStudent === obj2.isStudent}`); // false, true, false, because Symbol is unique

    let field = Symbol("name");
    obj1[field] = "Sheriyan";

    console.log("Obj1:", obj1);
}

// Read a single line input
rl.question("Enter input: ", (answer) => {
    datatypeSymbol(answer);
    rl.close();
});
