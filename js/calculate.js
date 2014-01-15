"use strict";

function Calculate() {

    this.plus = function(value_input_1, value_input_2) {
        return parseInt(value_input_1.value, 10) + parseInt(value_input_2.value, 10);
    };

    this.minus = function(value_input_1, value_input_2) {
        return parseInt(value_input_1.value, 10) - parseInt(value_input_2.value, 10);
    };

    this.multiply = function(value_input_1, value_input_2) {
        return parseInt(value_input_1.value, 10) * parseInt(value_input_2.value, 10);
    };

    this.divide = function(value_input_1, value_input_2) {
        return parseInt(value_input_1.value, 10) / parseInt(value_input_2.value, 10);
    };

    return this;
}