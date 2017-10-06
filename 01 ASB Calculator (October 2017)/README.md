# ASB LOAN CALCULATOR

## What this calculator does
Based on these variables:
- loan amount
- loan duration
- set of monthly repayment options
- fixed interest rate,

the calculator projects the following:
- number of years and months taken to fully repay the loan
- the total amount paid (principal + interest)
- the total that is paid for interest

## Improving this calculator
In real situations, interest rate is calculated based on number of days in a month.
the formula is:
````
(remaining loan amount * interest rate / days in a year ) * days in that month
````
e.g. for loan of RM 100,000, the interest rate for January (31 days) is calculated as follows:
````
(RM 100,000 * (4.8/100) / 365 ) * 31
````