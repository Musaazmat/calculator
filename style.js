const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharas = ["%", "*", "/", "-", "+", "="];
let output = "0";


// Define function to calculate based on button clicked
const calculate = (btnValue) => {
        if (btnValue === "=" && output !== "0" ) {
                // If output has % replace it with '/100' before evaluating
                output = eval(output.replace("%", "/100").replace("x","*"));

        }

        else if (btnValue === "AC") {
                output = "0"
        }
        else if (btnValue === "DEL") {
                // If DEL button is clicked remove the last character from the output
                output = output.toString().slice(0, -1);
        }
        

        
        else {
                // If output is empty and button is specialCharas then return
                if (output === "" && specialCharas.includes(btnValue)) return;
                output += btnValue;
        }
        display.value = output;
}

buttons.forEach((button) => {
        button.addEventListener("click", (e) => calculate(e.target.dataset.value));

});

