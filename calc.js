const sevenBtn = document.getElementById("seven");
const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");

// console.log("as", btns);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    console.log(btns[i]);
    display.value += btns[i].textContent;
    if (btns[i].textContent === "+") {
      display.value = "";
      // prevValue, currentValue
      // arr=[] arr.push("1") -> arr=["1", "2"]
    }
  });
}
// sevenBtn.addEventListener("click", () => {
//   console.log("seven clicked", sevenBtn.textContent);
//   display.value = sevenBtn.textContent;
// });
// compute(numbers, operator)
// switch case "+" result = numbers.sum
function compute (numbers, operator){
  switch(btns[i].textContent){
    case{

    }
  }
  

}
