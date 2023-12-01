const v = [2,2,2,3,3,1,9,8,9]

const map = new Map();

for (let val of v) {
    let count = map.get(val)

    if (count) {
        // re-set
        map.set(val, ++count)
    } else {
        map.set(val, 1)
    }

    for (let [k,v] of map) {

        if (v > 1) {
            console.log("k: ", k, " v: ", v)
        }
    }
}
