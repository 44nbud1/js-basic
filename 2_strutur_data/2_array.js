let isEligibleArr = [true,true,true,false,true,false,true]

// mendapatkan index ke 0
console.log(isEligibleArr[0])
isEligibleArr[0] = false
console.log(isEligibleArr[0])

// nambahin array di belakang
isEligibleArr.push(false)

// menghapus array dari belakang
isEligibleArr.pop()
console.log(isEligibleArr)

// menghapus array dari depan
isEligibleArr.shift()
console.log(isEligibleArr)

// menambah array dari depan
isEligibleArr.unshift(true,true)
console.log(isEligibleArr)

// delete array

delete isEligibleArr[0]
console.log(isEligibleArr)

// menghapus index ke 2 sebanyak 1 kali
isEligibleArr.splice(0,1)
console.log(isEligibleArr)

// mwnyisipkan value di tengah index
isEligibleArr.splice(0,1, false)
console.log(isEligibleArr)

