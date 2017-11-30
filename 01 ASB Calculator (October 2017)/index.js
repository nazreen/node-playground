// variables
let years = 30;
let months = years * 12;
let loanAmount = 100000;
let interestRate = (4.8/100);

// yearly loop
function renderProjection (months, loanAmount, interestRate, monthlyPayment) {
	let totalPaid = 0;
	let totalInterest = 0;
	let loanBalance = loanAmount;

	console.log(`\n=======================================\nFor payment option of RM ${formatNumber(monthlyPayment)} per month:`)

	for (let i =1; i < months + 1; i++) {
		// monthly loop

		totalPaid += monthlyPayment;
		currentInterest = (loanBalance * interestRate)/12;
		totalInterest += currentInterest;
		loanBalance = (loanBalance - monthlyPayment) + currentInterest;

		// log the monthly details
		// console.log(`month ${i} | payment: RM${monthlyPayment} | interest: RM${Math.round(currentInterest)} |remaining: ${loanBalance}/${loanAmount}`);

		// end of loan
		if (loanBalance < 0) {
			return console.log(`Loan is completed within ${i} months (${monthsToText(i)}).\nTotal paid is RM ${formatNumber(totalPaid)}, out of which RM ${formatNumber(totalInterest)} is for interest.`);
		}
	};
}; // function renderProjection

console.log(`\nLoan duration is ${years} years.`);
console.log(`Loan amount is RM${formatNumber(loanAmount)}.`);
console.log(`Interest rate is ${interestRate * 100}%.`);

let paymentOptions = [540,1000,2000,5000];

paymentOptions.forEach((paymentOption) => {
	renderProjection(months, loanAmount, interestRate, paymentOption);
});

// utils

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function monthsToText(months) {
	return(months / 12 | 0) + " years and " + months % 12 +" months"
}

function formatNumber(x) {
	let rounded = roundToTwo(x);
	let roundedWithCommas = numberWithCommas(rounded);
	return roundedWithCommas;
}
