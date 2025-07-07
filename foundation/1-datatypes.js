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

function datatypeBigint(input) {
    // Process input here
    console.log("Processing input:", input);
    const maxSafeInteger = Number.MAX_SAFE_INTEGER;
    let bigIntValue = BigInt(input);
    let maxNum = BigInt(Number.MAX_SAFE_INTEGER);

    console.log(`Max Number: ${maxSafeInteger}`);
    console.log(`${maxNum} + ${bigIntValue}`)
    console.log(`Result: ${maxNum+bigIntValue}`);
}

function coercion() {
    // Coercion example
    let num = 10;
    let str = "20";
    let addResult = str + num; // Coerces number to string
    // + has two roles: addition and concatenation
    let subResult = str - num; // Coerces string to number
    // - always coerces to number
    console.log("Coerced Result:", addResult); // "1020"
    console.log("Coerced Result:", subResult); // 10
}

function truthyFalsy(input) {
    // Truthy and Falsy values
    const arr = [
        0, false, "", null, undefined, NaN, 1, "hello", [], {}, 42, true, "0", [1, 2], function() {}, Symbol("sym")
    ];
    console.log("Array of values:", arr);

    const index = Number(input);

    if (isNaN(index)) {
        console.log("❌ Invalid input. Please enter a number.");
    } else {
        if (index < 0 || index >= arr.length) {
            console.log("Input out of range. Please enter a valid index between 0 and", arr.length - 1);
            return;
        }

        const value = arr[index];

        if (value) {
            console.log("Truthy value at index", index + ":", value);
        } else {
            console.log("Falsy value at index", index + ":", value);
        }
    }
}

// Read a single line input
function askInput() {
    rl.question("Enter input or (exit/quit): ", (answer) => {
        if ((answer.toLowerCase() === "exit") || (answer.toLowerCase() === "quit")) {
            console.log("Exiting...");
            rl.close();
            return;
        }
        // datatypeSymbol(answer);
        // datatypeBigint(answer);
        // coercion();
        // truthyFalsy(answer);
        // Ask again
        askInput();
    });
}

askInput();