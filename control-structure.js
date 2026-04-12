let result = "";

for (let num = 1; num <= 12; num++) {
    result += "<b>Table of " + num + "</b><br>";

    for (let i = 1; i <= 12; i++) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
    }

    result += "<br>";
}

document.getElementById("table").innerHTML = result;

function calculate(operator) {
    const n1 = parseFloat(document.getElementById('num1').value) || 0;
    const n2 = parseFloat(document.getElementById('num2').value) || 0;
    let total = 0;

    if (operator === '+') {
        total = n1 + n2;
    } else if (operator === '-') {
        total = n1 - n2;
    }

    document.getElementById('result').innerText = total;
}
