let result = "";

for (let i = 1; i <= 10; i++){result +=("5 x "+ i + "="+ (5 * i)+"<br>")}

document.getElementById("table").innerHTML=result;

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
