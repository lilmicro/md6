import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));


const button1 = document.querySelector(".button1") as HTMLElement;
const squere1 = document.querySelector(".squere1") as HTMLElement;
button1.addEventListener("click", () =>{ {
    button1.addEventListener("click", () => {
      squere1.style.backgroundColor = "yellow";
    });
  }})

const button2 = document.querySelector(".button2");
const squere2 = document.querySelector(".squere2");
button2.addEventListener("click", () =>{
    squere2.textContent = "SUCCESS"
});


const button3 = document.querySelector(".button3");
const squere3 = document.querySelector(".squere3") as HTMLElement;
button3.addEventListener("click",() =>{
    squere3.style.opacity = "0.0";
} );

const button4 = document.querySelector(".button4") as HTMLElement;
const squere4 = document.querySelector(".squere4") as HTMLElement;
button4.addEventListener("click",() =>{
    if (squere4.style.opacity === "100%") {
         squere4.style.opacity = "0%";
    } else  if (squere4.style.opacity === "0%"){
         squere4.style.opacity = "100%";
    }
} );

const button5 = document.querySelector(".button5");
const squere5 = document.querySelector(".squere5") as HTMLElement;
const colors = ["#017187", "rgba(92.12, 1, 135, 0.71)", "#18D5E1", "#E2CF22", "rgba(135, 17.08, 1, 0.56);"]
let colorIndex = 0;
button5.addEventListener("click",() =>{
    squere5.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
})

const button6 = document.querySelector(".button6");
const squere6 = document.querySelector(".squere6") as HTMLElement;
const counter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
button6.addEventListener("click",() =>{
    let index = 0;
    function changeText() {
        squere6.textContent = counter[index];
index++;
    if (index < counter.length){
        setTimeout (changeText, 3000);
    }}
    changeText();
})

const button7 = document.querySelector(".button7")as HTMLElement;
const squere = document.querySelectorAll(".squere") as NodeListOf<HTMLElement>;
const body = document.querySelector("body") as HTMLElement;
button7.addEventListener("click", () =>{
    squere.forEach((squere) =>{
    squere.style.backgroundColor = "#18D5E1";
    });
    body.style.backgroundColor = "#000000";
})


squere1.addEventListener("mousemove", () =>{
    squere1.style.backgroundColor = "red";
})



 let index = 0;
    let timeout1 : NodeJS.Timeout | null = null;
    const counter1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
squere5.addEventListener("mousemove", () =>{
    function changeText() {
        squere5.textContent = counter1[index];
        index++;
    if (index < counter1.length){
        timeout1 = setTimeout(changeText,2000);
    }}
    changeText();
})

squere5.addEventListener("mouseout", () =>{
    function resetCounter() {
        squere5.textContent = "0";
        index = 0;
        if (timeout1 !== null) {
            clearTimeout(timeout1);
        }}
        resetCounter();
})


