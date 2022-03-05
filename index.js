// TRYING TO DO EVENET LISTENERS WHEN I DIDN'T EVEN LEARN IT YET; SAVING FOR FUTURE

// const inputEl = document.querySelector("input");
// lengthEl = document.getElementById("length-el");

// inputEl.addEventListener('input', length() {
//     length() {
//         if (input = 1) {
//             // do this for nonplural wording
//         }
//         else {
//             feet = input * 3.280839895
//             meters = input / 3.280839895
//             lengthOutput = input + " meters " + "= " + feet + " feet | " + input + " feet " + "= " + meters + " meters"
//             lengthEl.textContent = lengthOutput
//             console.log(lengthOutput)
//         }
//     }
// });

// console.log(input)


// Save number to variable
var input = document.getElementById("input-el").textContent
var lengthEl = document.getElementById("length-el")
var volumeEl = document.getElementById("volume-el")
var massEl = document.getElementById("mass-el")

// convert function
function convert() {
    // conversions
    feet = input * 3.280839895
    rfeet = feet.toFixed(3);

    meters = input / 3.280839895
    rmeters = meters.toFixed(3);

    gallons = input / 3.785
    rgallons = gallons.toFixed(3);

    liters = input * 3.785
    rliters = liters.toFixed();

    pounds = input * 2.20462262185
    rpounds = pounds.toFixed(3);

    kilograms = input / 2.20462262185
    rkg = kilograms.toFixed(3);

    //display texts
    lengthEl.textContent = input + " meters " + " = " + rfeet + " feet " + "| " + input + " feet " + "= " + rmeters + " meters"
    volumeEl.textContent = input + " liters " + " = " + rgallons + " gallons " + "| " + input + " gallons " + "= " + rliters + " liters"
    massEl.textContent = input + " kilograms " + " = " + rpounds + " pounds " + "| " + input + " pounds " + "= " + rkg + " kilograms"
}