let arr = ["anisa","nana", "lily", "lego"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

for (const name of arr) {
    console.log(name)
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

let count = 1
do {
    console.log("fist attempt")
    console.log(count)
    count++

} while (count <= 5)

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

let i = 0

while (i <= 10) {
    console.log(i)
    i++
}
