let result = "";

for (let num = 1; num <= 12; num++) {

    result += `<div class="table-box">`;
    result += `<b>Table of ${num}</b><br>`;

    for (let i = 1; i <= 12; i++) {
        result += `${num} x ${i} = ${num * i}<br>`;
    }

    result += `</div>`;
}

document.getElementById("table").innerHTML = result;