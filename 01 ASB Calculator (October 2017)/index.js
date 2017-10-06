// variables
let years = 30; console.log(`Loan duration is ${years} years.`);
let months = years * 12;
let loanAmount = 100000; console.log(`Loan amount is RM${loanAmount}.`);
let interestRate = (4.8/100); console.log(`Interest rate is ${interestRate * 100}%.`);
let monthyPayment = 540; console.log(`Monthly payment is RM${monthyPayment}.`);

// yearly loop
function renderProjection (months, loanAmount, interestRate, monthyPayment) {
	let totalPaid = 0;
	let totalInterest = 0;
	let loanBalance = loanAmount;

	console.log(`=======================================\nFor payment option of RM ${monthyPayment} per month:`)

	for (let i =1; i < months + 1; i++) {
		// monthly loop

		totalPaid += monthyPayment;
		currentInterest = (loanBalance * interestRate)/12;
		totalInterest += currentInterest;
		loanBalance = (loanBalance - monthyPayment) + currentInterest;

		// log the monthly details
		// console.log(`month ${i} | payment: RM${monthyPayment} | interest: RM${Math.round(currentInterest)} |remaining: ${loanBalance}/${loanAmount}`);

		// end of loan
		if (loanBalance < 0) {
			return console.log(`Loan is completed within ${i} months (${roundToTwo(i/12)} years).\nTotal paid is RM ${totalPaid}, out of which RM ${roundToTwo(totalInterest)} is for interest.`);
		}
	};
}; // function renderProjection

let paymentOptions = [540,1000,2000,5000];

paymentOptions.forEach((paymentOption) => {
	renderProjection(months, loanAmount, interestRate, paymentOption);
});

// utils

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
