
function Palindrome() {
    var rem, temp, sum = 0;
    var number = Number(document.getElementById("N").value);

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        sum = sum * 10 + rem;
    }
    if (sum == temp) {
        document.getElementById("print").innerHTML = "The" + " " + temp + " " + "number is Palindrome";
    }
    else {
        document.getElementById("print").innerHTML = "The" + " " + temp + " " + "number is not palindrome";

    }
}
