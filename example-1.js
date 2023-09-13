// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// Run the code here and look at the results
// Does it look right? 
// What went wrong?

// .toFixed() method converts the 'amount' value to a string with
// 2 decimal places. This causes the 'tax' vaule to be the result 
// of multiplying a string with a number. This then affects the 
// return value of getPriceWithTax(), because you are effectively
// concatenating a string (price) with a number (tax). To fix this, 
// append the .toFixed() method to the return value of (price + tax)

function correctPriceWithTax(amount, rate) {
	const price = amount
	const tax = price * (rate / 100)
	return (price + tax).toFixed(2)
}

const correctAmount = correctPriceWithTax(23.99, 9.5)
console.log(`The correct amount is: ${correctAmount}`)
