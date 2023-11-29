let firstString = "string"
console.log(typeof (firstString))

const q = 'He said "I\'d to keep going"'
console.log(q)

const statement = 'it\'s okay'
console.log(statement)

const name = "indah"
const hello = `hello ${name}`
console.log(hello)


console.log(firstString.at(1))

let n = ""
for (let i = firstString.length-1; i >= 0; i--) {
    n = n + firstString.at(i)
}

console.log(n)

// string to array

let a = "a;b;c;d;e;f;g"
let arr = a.split(";")

for (const val of arr) {
    console.log(val)
}
