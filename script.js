const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const numPeople = document.getElementById("numPeople");
const CalculateButton = document.getElementById("CalculateButton");
const totalTip = document.getElementById("totalTip");
const tipPerPerson = document.getElementById("tipPerPerson");

CalculateButton.addEventListener('click', CalculateTip);

function CalculateTip() {
    const bill = parseFloat(billAmount.value);
    const tipPercent = parseFloat(tipPercentage.value);
    const people = parseInt(numPeople.value);

    // Validation
    if (Number.isNaN(bill) || Number.isNaN(tipPercent) || Number.isNaN(people) || people <= 0) {
        alert("Please enter valid values");
        return;
    }

    const totalTipAmount = (bill * tipPercent) / 100;
    const tipPerPersonAmount = totalTipAmount / people;

    totalTip.innerText= `Total Tip: $${totalTipAmount.toFixed(2)}`;
    tipPerPerson.textContent = `Tip per person: $${tipPerPersonAmount.toFixed(2)}`;
}
