// JS EXERCISES - ALL DONE

// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"

let x = 'John', y = 'Doe'
console.log(`${x} <> ${y}`)


// 22) Create an object with properties such name, surname, email

let me = {
    name: 'Hasan', 
    surname: 'Sattar',
    email: 'hasan@sattar.com'
}

console.log(me)


// 23) Delete the email property from the previously created object

delete me.email
console.log(me)


// 24) Create an array with 10 strings in it

let stringArray = [ ]
for (let i = 0; i < 10; i++) {
    stringArray.push('String')
}

console.log(stringArray)


// 25) Print in the console every string from the previous array

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i])
}


// 26) Create an array with 100 random numbers in it

let randomNumArray = [ ]
for (let i = 0; i < 100; i++) {
    randomNum = Math.floor(Math.random() * 100 + 1)
    randomNumArray.push(randomNum)
}

console.log(randomNumArray)


// 27) Write a function to get the maximum and minimum values from the previously created array


const findMaxandMin = arr => {
    let maximumValue = arr[0]
    let minimumValue = arr[0]

    for (element of arr) {
        if (element > maximumValue) {
            maximumValue = element
        }
        if (element < minimumValue) {
            minimumValue = element
        }
    }
    // for (element of arr) {
    // }
    
    console.log(maximumValue, minimumValue)
}   

findMaxandMin(randomNumArray)

// 28) Create an array of arrays, in which every array has 10 random numbers

let arrayOfArrays = [ ]
let arrayInArray = [ ]

for (let i = 0; i < 5; i++) {
    arrayInArray = []
    for (let j = 0; j < 10; j++) {
        randomNum = Math.floor(Math.random() * 1000 + 1)
        arrayInArray.push(randomNum)
    }
    arrayOfArrays.push(arrayInArray)
}

console.log(arrayOfArrays)


// 29) Create a function that gets 2 arrays as parameters and returns the longest one

const longestArray = (arr1, arr2) => {
    return arr1.length > arr2.length ? console.log('Array 1') : console.log('Array 2')
}

longestArray(arrayOfArrays, randomNumArray)


// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

const whichArraySumIsGreater = (arr1, arr2) => {
    let firstArraySum = 0
    let secondArraySum = 0
    for (arr of arr1) {
        firstArraySum += arr
    }
    for (arr of arr2) {
        secondArraySum += arr
    }
    console.log(firstArraySum)
    console.log(secondArraySum)
    return firstArraySum > secondArraySum ? console.log(`First Array: ${firstArraySum}`) : console.log(`Second Array: ${secondArraySum}`)
}   

whichArraySumIsGreater(randomNumArray, arrayInArray)