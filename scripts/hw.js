function sumRange() {
    let start = Number(prompt("Enter start of range:"));
    let end = Number(prompt("Enter end of range:"));
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert("Sum: " + sum);
}

function Func2() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    while (a !== b) {
        if (a > b) a -= b;
        else b -= a;
    }
    alert("result: " + a);
}

function divisors() {
    let n = Number(prompt("Enter a number:"));
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) result += i + " ";
    }
    alert("Divisors: " + result);
}
function digitCount() {
    let n = Number(prompt("Enter a number:"));
    let count = 0;

    if (n === 0) {
        alert("Digits: 1");
        return;
    }

    if (n < 0) n = -n;

    while (n > 0) {
        n = (n - (n % 10)) / 10;
        count++;
    }

    alert("Digits: " + count);
}

function stats() {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    let evens = 0;
    let odds = 0;

    let i = 0;
    do {
        let num = Number(prompt("Enter a number (" + (i+1) + "/10):"));
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;

        if (num % 2 === 0) evens++;
        else odds++;

        i++;
    } while (i < 10);

    alert(
        "Positive: " + positives +
        "\nNegative: " + negatives +
        "\nZeros: " + zeros +
        "\nEven: " + evens +
        "\nOdd: " + odds
    );
}

stats();