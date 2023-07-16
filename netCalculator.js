const basicSalary = 50000;
const benefits = 10000;

// Calculate gross pay
const grossPay = basicSalary + benefits;

// Subtract pretax deductions and nontaxable arrangements
const pretaxDeductions = 0;
const nontaxableArrangements = 0;
const taxableWages = grossPay - pretaxDeductions - nontaxableArrangements;

//  Calculate Payee Tax
let payeeTax = 0;
if (taxableWages > 24000) {
  payeeTax = (0.1 * (taxableWages - 24000)) + 2000;
}

// Calculate NHIF Deductions
let nhifDeductions = 0;
if (grossPay >= 10000) {
  nhifDeductions = 500;
}

// Calculate NSSF Deductions
const nssfDeductions = 0.06 * grossPay;

//Calculate net pay
const deductions = payeeTax + nhifDeductions + nssfDeductions;
const netPay = grossPay - deductions;

console.log(`Gross Pay: ${grossPay}`);
console.log(`Payee Tax: ${payeeTax}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Pay: ${netPay}`);