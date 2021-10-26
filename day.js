function showDay() {
    var input = document.getElementById("date").value;
    var date = new Date(input);
    var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var array2 = [];
    var day = date.getDay();
    console.log(arr[day]);
    for (i = 0; i < 7; i++) {
        date.setDate(date.getDate() + 1);
        array2[i] = arr[day];
        day = date.getDay();
        console.log(arr[day]);
    }
    result = document.getElementById("data");
    result.innerHTML = array2.join('<br>');
}