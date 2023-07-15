//prompts the user to enter input
var marks = parseInt(prompt("Enter student marks (between 0 and 100):"));

//validate the input marks
if (marks >= 0 && marks <= 100) {
    console.log("Invalid marks!Marks should be between 0 and 100");
}else {
    //Generate and diplay the grade
    let grade ;
    if (marks > 79) {
        grade = "A";
    }else if (marks >= 60) {
        grade = "B";
    }else if (marks >= 49) {
        grade = "C";
    }else if (marks >= 40) {
        grade = "D";
    }else {
        grade = "E";
    }
    console.log("Grade:", grade);
}