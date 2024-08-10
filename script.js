const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharas = ["%", "x", "/", "-", "+", "=", "."];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // If output has %, replace it with '/100' before evaluating
        output = eval(output.replace("%", "/100").replace("x", "*"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        // If DEL button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    } else {
        // If output is empty and button is specialCharas then return
        if (output === "" && specialCharas.includes(btnValue)) return;
        
        // Prevent repeating special characters
        if (specialCharas.includes(btnValue)) {
            const lastChar = output.slice(-1);
            if (specialCharas.includes(lastChar)) return; // If the last character is also special, return
        }
        
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => 
        calculate(e.target.dataset.value)
    );
});
