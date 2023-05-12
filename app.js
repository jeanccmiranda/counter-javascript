
const buttons = document.querySelectorAll(".btn");
const counterSpan = document.querySelector(".counter");
let counter = 0;



function changeCounterColor(){
    if(counter > 0){
        counterSpan.style.color = "green";
    }

    else if( counter < 0){
        counterSpan.style.color = "red";
    }

    else {
        counterSpan.style.color = "black";
    }
}
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(button.id === "btn-reset") {
            counter = 0;
            counterSpan.textContent = counter;
            changeCounterColor();

        }

        else if(button.id === "btn-decrease") {
           counter--
           counterSpan.textContent = counter;
           changeCounterColor();
        }

        else if(button.id === "btn-increase") {
            counter++;
            counterSpan.textContent = counter;
            changeCounterColor();
           
        }

    })
})