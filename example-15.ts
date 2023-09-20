// This function returns a function that returns a string
// Add the types: 

function sayHello2(): () => string {
    return () => 'Hello!'
}
// This variable contains a function that returns a string
const hello2 = sayHello()
// Calling the function returns the string
console.log(hello2()) // Hello!
console.log(hello2()) // Hello!
console.log(hello2()) // Hello!
console.log(hello2()) // Hello!

function mathematizer2(n: number): (x: number) => number {
    let sum: number = n
    return (x: number) => x * n
}

const m2: (x: number) => number = mathematizer2(3)
console.log(m2(3))   // 9
console.log(m2(2))   // 6
console.log(m2(10))  // 30
console.log(m2(111)) // 333



