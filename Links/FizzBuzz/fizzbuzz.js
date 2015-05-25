document.addEventListener('DOMContentLoaded', function() {
var list = document.getElementById("list");

var listItems = "";

var i;

for (i = 1; i < 101; i = i + 1) {

    listItems += "<li>";

    if ((i % 3 === 0) && (i % 5 === 0)) {
        listItems += "fizzbuzz";
    }
    else if (i % 3 === 0) {
        listItems += "fizz";
    }
    else if (i % 5 === 0) {
        listItems += "buzz";
    }
    else {
        listItems += i;
    }
    listItems += "</li>";

}

list.innerHTML += listItems;   
});