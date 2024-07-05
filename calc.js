const sevenBtn = document.getElementById("seven");
const display = document.getElementById("display");
const btns = document.querySelectorAll(".btns");
const numbers = document.querySelectorAll(".numbers");
const operator = document.querySelectorAll(".operator")
const equal = document.getElementById("equal");


// console.log("as", numbers);
// 1, 2
// prevValue = currValue "1" "2"
// currValue = display.value "1" "2" "3"

let prevValue = "" 
let currValue = ""

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    preValue = currValue
    console.log("preValue", preValue)
    display.value += numbers[i].textContent;
    if (btns[i].innerText === "c") {
      display.value = "";
    }
    else if (operator[i].textContent === "+"){
      display.value = ""
    } 
    currValue = display.value
  });
}

    console.log("preValue", preValue)

let result = 0;
equal.addEventListener("click", function(){
  console.log("curr, pre",currValue)
  result = Number(preValue) + Number(currValue)
  console.log("result", result)
  // display.value = result
})

// switch(numbers[i].textContent){
// case "+"{
//   equal.addEventListener("click", function(){
//     currValue + prevValue
//     console.log("gn")
//   })
// }
// }



// sevenBtn.addEventListener("click", () => {
//   console.log("seven clicked", sevenBtn.textContent);
//   display.value = sevenBtn.textContent;
// });
// compute(numbers, operator)
// switch case "+" result = numbers.sum
// function compute (numbers, operator){
//   switch(btns[i].textContent){
//     case{

//     }
//   }
  

// }
