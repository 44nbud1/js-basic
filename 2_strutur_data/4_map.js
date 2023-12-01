const myMap = new Map();

myMap.set("key1", "value1")
myMap.set("key2", "value2")
myMap.set("key3", "value3")
myMap.set("key4", "value4")

console.log(myMap.get("key2"))
console.log(myMap.size)

console.log("````````````")

for (let [k, v] of myMap) {
    console.log(k)
    console.log(v)
}

console.log("````````````")

for (let k of myMap.keys()) {
    console.log(k)
}

console.log("````````````")

for (let v of myMap.values()) {
    console.log(v)
}

console.log("````````````")

for (let [k, v] of myMap.entries()) {
    console.log(k)
    console.log(v)
}

console.log("````````````")

myMap.forEach(function (k,v) {
    console.log(k)
    console.log(v)
})