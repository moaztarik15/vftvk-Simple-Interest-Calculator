
function fff() {
    "use strict";
    var brate = document.getElementById("rate");
    var rate = brate.value;
    
    document.getElementById("rng").innerHTML =  rate + " % ";
}

   
function compute() {
    "use strict";
    var brate = document.getElementById("rate");
    var rate = brate.value;
    var years = document.getElementById("years");
    var n = years.value;
    var amount = document.getElementById("principal");
    var p = amount.value;
    var all = p * (1 + n * rate / 100);
    var d = 2021;
    document.getElementById("result").innerHTML = "if you deposit" + " " + p + "<br>" + "at an interest rate of " + rate + "<br>" + "you will receive an amount of " + all  + "<br>" + "in the year " + n + d;
}
        