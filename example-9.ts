

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js
import { Kaiju, KaijuType } from "./example-8"
// Fix the rampage function so it makes use of the KaijuType enum

function rampage(kaiju: Kaiju, city: string): string {
	const { name, type, power } = kaiju
	let action: string
	switch (type) {
		case KaijuType.ape:
			action = 'smash'
			break

		case KaijuType.lizard:
			action = 'burn'
			break

		case KaijuType.flying:
			action = 'flap'
			break
	}
	let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`
	return result
}

const gojira = new Kaiju('Gojira', 90, KaijuType.lizard)
// Define two more monsters
const kong = new Kaiju('Kong', 120, KaijuType.ape)
const mothra = new Kaiju('Mothra', 100, KaijuType.flying)


console.log(rampage(gojira, 'tokyo'))
// Set the new monsts to rampage in a city
console.log(rampage(kong, 'austin'))
console.log(rampage(mothra, 'berlin'))
