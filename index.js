//readline module is used to accept input ,which is a built-in module in Node.js for reading input from the command line. 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompts the user to enter input
rl.question("Enter student marks (between 0 and 100): ", function(answer) {
    const marks = parseInt(answer);

    // Validate the input marks
    if (marks < 0 || marks > 100) {
        console.log("Invalid marks! Marks should be between 0 and 100");
    } else {
        // Generate and display the grade
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 49) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }
        console.log("Grade:", grade);
    }

    rl.close();
});
