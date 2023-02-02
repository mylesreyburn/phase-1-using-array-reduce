const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let batteryAdder = (accumulator, currentValue) => {
    console.log("Accum before:" + accumulator)
    accumulator = accumulator + currentValue
    console.log("Accum after:" + accumulator)
    return accumulator
}
let totalBatteries = batteryBatches.reduce(batteryAdder, 0)

console.log(totalBatteries)
