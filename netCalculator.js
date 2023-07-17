const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your basic salary: ", function(basicSalaryInput) {
  rl.question("Enter your net benefits: ", function(benefitsInput) {
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    // Calculate gross pay
    const grossPay = basicSalary + benefits;

    // Subtract pretax deductions and nontaxable arrangements
    const pretaxDeductions = 0;
    const nontaxableArrangements = 0;
    const taxableWages = grossPay - pretaxDeductions - nontaxableArrangements;

    // Calculate Payee Tax
    let payeeTax = 0;
    if (taxableWages > 24000 && taxableWages <= 32333) {
      payeeTax = (0.1 * (taxableWages - 24000)) + 2000;
    } else if (taxableWages > 32333 && taxableWages <= 40333) {
      payeeTax = (0.15 * (taxableWages - 32333)) + 2600;
    } else if (taxableWages > 40333 && taxableWages <= 48333) {
      payeeTax = (0.20 * (taxableWages - 40333)) + 3900;
    } else if (taxableWages > 48333 && taxableWages <= 56333) {
      payeeTax = (0.25 * (taxableWages - 48333)) + 5800;
    } else if (taxableWages > 56333) {
      payeeTax = (0.3 * (taxableWages - 56333)) + 7800;
    }

    // Calculate NHIF Deductions
    let nhifDeductions = 0;
    if (grossPay >= 10000 && grossPay <= 19999) {
      nhifDeductions = 150;
    } else if (grossPay >= 20000 && grossPay <= 24999) {
      nhifDeductions = 300;
    } else if (grossPay >= 25000 && grossPay <= 29999) {
      nhifDeductions = 400;
    } else if (grossPay >= 30000 && grossPay <= 34999) {
      nhifDeductions = 500;
    } else if (grossPay >= 35000 && grossPay <= 39999) {
      nhifDeductions = 600;
    } else if (grossPay >= 40000 && grossPay <= 44999) {
      nhifDeductions = 750;
    } else if (grossPay >= 45000 && grossPay <= 49999) {
      nhifDeductions = 850;
    } else if (grossPay >= 50000 && grossPay <= 59999) {
      nhifDeductions = 1000;
    } else if (grossPay >= 60000 && grossPay <= 69999) {
      nhifDeductions = 1100;
    } else if (grossPay >= 70000 && grossPay <= 79999) {
      nhifDeductions = 1200;
    } else if (grossPay >= 80000 && grossPay <= 89999) {
      nhifDeductions = 1300;
    } else if (grossPay >= 90000 && grossPay <= 99999) {
      nhifDeductions = 1400;
    } else if (grossPay >= 100000) {
      nhifDeductions = 1500;
    }

    // Calculate NSSF Deductions
    const nssfDeductions = 0.06 * grossPay;

    // Calculate net pay
    const deductions = payeeTax + nhifDeductions + nssfDeductions;
    const netPay = grossPay - deductions;

    console.log(`Gross Pay: ${grossPay}`);
    console.log(`Payee Tax: ${payeeTax}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Pay: ${netPay}`);

    rl.close();
  });
});
