const Car = {
    name : "BMW",
    speed : 160,
}

// destructive
const {name, speed} = Car
console.log(name, speed)
// with custom class

const {name: nameCar, speed: speedCar} = Car

const CarReq = {
    nameCar: nameCar,
    speedCar: speedCar,
}

console.log(CarReq.nameCar, CarReq.speedCar)

let a = 1;
let b = 2;

console.log("sblm: ", a)
console.log("sblm: ", b)

a = a + b
b = a - b
a = a - b

console.log("sesudah: ", a)
console.log("sesudah: ", b)