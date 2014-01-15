"use strict";

function ShowCalculate(value_input_1, value_input_2) {
    var calculate = new Calculate();

    function show_plus() {
        document.getElementById("input_result").value = calculate.plus(document.getElementById("first_input"), document.getElementById("last_input"));
    }

    function show_minus() {
        document.getElementById("input_result").value = calculate.minus(document.getElementById("first_input"), document.getElementById("last_input"));
    }

    function show_multiply() {
        document.getElementById("input_result").value = calculate.multiply(document.getElementById("first_input"), document.getElementById("last_input"));
    }

    function show_divide() {
        document.getElementById("input_result").value = calculate.divide(document.getElementById("first_input"), document.getElementById("last_input"));
    }

    document.getElementById("plus").addEventListener ("click", show_plus, false);
    document.getElementById("minus").addEventListener ("click", show_minus, false);
    document.getElementById("multiply").addEventListener ("click", show_multiply, false);
    document.getElementById("divide").addEventListener ("click", show_divide, false);

    return this;
}