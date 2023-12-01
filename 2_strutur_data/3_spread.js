const data1 = ["januari", "feb", "mar", "apr", "mei", "juni"]
const data2 = [ "jul","agustus", "sept", "okt", "nov", "des"]

const Car2 = {
    name : "bmw",
    speed : 100,
}

const Car1 = {
    name : "mercy",
    speed : 300,
}

const mergeCar = {...Car1, ...Car2}

console.log(mergeCar)

console.log(data1)
console.log(data2)

console.log(...data1)
console.log(...data2)

const bulan = [...data1, ...data2]

for (const b of bulan) {
    console.log(b)
}