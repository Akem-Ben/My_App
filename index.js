// let input = document.getElementById('input')
// let button = document.querySelectorAll("button")

// let output = "";

// const calculate = (value) => {
//     console.log(value)
//     input.value = output
// }

// button.forEach(button=>{
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value))
// })


// button.forEach(button=>{
//     button.addEventListener("click", (e) => console.log(e.target.dataset.value))
// })
// console.log(input, button)

// let arr = [2,4,6,8,10,12]
// let newArr = []
// arr.forEach((element)=> newArr.push(element * 2))

// console.log(newArr)

function calculateResult(input) {
    // Evaluate the expression
    let result = eval(input);
  
    // Check if the result has more than 15 characters
    if (result.toString().length > 15) {
      // If more than 15 characters, round it off to 15 characters
      return parseFloat(result).toPrecision(15);
    } else {
      // If 15 characters or less, return the original result
      return result;
    }
  }