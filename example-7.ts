
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.

// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content

enum Suit {
	Hearts,
	Diamonds,
	Clubs,
	Spades
}

type Card = { suit: Suit, value: number }

const ace: Card = {
	suit: Suit.Spades,
	value: 1
}

console.log(ace);

// Compile the code and check what type script says: 
// tsc example-7.ts

export {
	Suit,
	Card
}
