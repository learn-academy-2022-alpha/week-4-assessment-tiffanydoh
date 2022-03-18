// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("jest-circus")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.



// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

    // Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("shuffle", () => {
        // A test/it method, nested within the describe block, that in plain words, describe what the function does.
            it("removes the first item from the array and shuffles the remaining content", () => {
            const colors1 = ["purple", "blue", "green", "yellow", "pink"]
            // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
            const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
            // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        // An expect method, nested within the test block, calling on shuffle function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects because there are two arrays to be passed as arguments.
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(colors1))
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(colors2))
             })
        })
        // ● shuffle › removes the first item from the array and shuffles the remaining content

        // ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.
        //Psuedo Code:
            //Input: an array of colors
            //Output: First item in array is gone and the array is shuffled. 
            //Process:
                //Create a function called shuffle where an array is taken in as a parameter. 
                //To make the code dynamic, use shift() built in method to remove first item in the array. 
                // Create an if statement where if the array length is bigger than 0 than it will use the splice method. 
                // Splice method allows us to change the array by moving around existing elements or adding/deleting elements.
                // Use some kind of randomizer to shuffle the array around. It will randomize the position. 
                // Declare this change to occur at the 0 index of the array.
                // When using splice, it will split up string into an array, so join it back to create one array.

var colorStorage = [""]
const shuffle = (array) => {
   array.shift()
   let length = array.length
   for(let i = 0; i < length; i++){
       if(length > 0){
    colorStorage.push(array.splice(Math.floor(Math.random() * array.length), 1))
       }
   }
   return colorStorage.join(",")
}

// PASS  ./code-challenges.test.js
// shuffle
//   ✓ removes the first item from the array and shuffles the remaining content (4 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
    //Psuedo-Code for Jest Test:
        // A describe method that lists the name of the function OR naming of the particular test.
        describe("minAndMax", () => {
        // A test/it method, nested within the describe block, that in plain words, describe what the function does.
            it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
                const nums1 = [3, 56, 90, -8, 0, 23, 6]
                // Expected output: [-8, 90]
                const nums2 = [109, 5, 9, 67, 8, 24]
                // Expected output: [5, 109]
            //An expect method, nested within the test block, calling on minAndMax function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expect that takes in two arrays as arguments.
            expect(minAndMax(nums1)).toEqual([-8, 90])
            expect(minAndMax(nums2)).toEqual([5, 109])
            })
        })
    //     ● minAndMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order

    // ReferenceError: minAndMax is not defined



// b) Create the function that makes the test pass.
        //Psuedo-Code:
            //Input: an array of numbers
            //Output: A new array with a min and max. 
            //Process:
                // Create a function where an array is the parameter.
                //Declare two variables where low takes a min and high takes a max num of the array. 
                // Use the .filter to return a new array with only the values necessary. 
                // Set value === to low and === to high. 

const minAndMax = (array) => {
    let low = Math.min(...array)
    let high = Math.max(...array)
return array.filter(value=> {
    return value === low && value === high
// This is where I get confused because i figured it would return the [min,max] in that order. Similar to how when we would do the challenges with typeof operators it would return the values how we wanted it. All i get back is []. When I do the value === low without the high, I would get [min]. And vice versa. But when i put those together nothing comes out. 
})
}

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.579 s, estimated 1 s



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
    //Psuedo-Code for Jest Test:
        //A describe method that lists the name of the function OR naming of the particular test.
        describe("noDuplicates", () => {
        // A test/it method, nested within the describe block, that in plain words, describe what the function does.
            it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
            const testArray1 = [3, 7, 10, 5, 4, 3, 3]
            const testArray2 = [7, 8, 2, 3, 1, 5, 4]
            // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        //An expect method, nested within the test block, calling on noDuplicates function, followed by the toEqual() matcher that checks the expected output of the function return. Create 1 expect that takes in two arrays as arguments.
        expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
            })
        })
        // ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values

        // ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.
    //Pseudo-Code:
        //Input: Two arrays
        //Output: one array with no duplicate numbers
        //Process:
            //Ceate a function that takes in two arrays as a parameter. 
            //Declare another array where two two arrays are connected to make one array. 
            // Use .filter because we are returning a new array where there is a shorter array with no duplicates. 
            // Have to use value and index because to get no duplicates there can only be one index for a specific number. 
            // Get the index of a value and set it stricly equals to index, this ensures that only one number can have one index. 
const noDuplicates = (array1, array2) => {
    let testArray3 = array1.concat(array2)
    return testArray3.filter((value,index) => {
        return testArray3.indexOf(value) === index
    })
}
// PASS  ./code-challenges.test.js
// noDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (3 ms)