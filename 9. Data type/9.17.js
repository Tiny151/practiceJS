import {
    isString,
    isNumber,
    isBigInt,
    isBoolean,
    isNull,
    isUndefined,
    isSymbol,
    isObject,
    isArray,
    isFunction,
} from "./9.16.js";

function welcomeUser(name) {
    if (isString(name)) {
        return `Chào mừng ${name}`;
    }
    return "Tên không hợp lệ";
}

console.log(welcomeUser("Nguyễn A"));
console.log(welcomeUser("Trần B"));
console.log(welcomeUser(123));

function calculateAge(currentYear, birthYear) {
    if (!isNumber(currentYear) || !isNumber(birthYear)) {
        return -1;
    }
    return currentYear - birthYear;
}

console.log(calculateAge(2024, 2000)); // 24
console.log(calculateAge(2024, 2020)); // 4
console.log(calculateAge(2024, "2020")); // -1
console.log(calculateAge(2024, NaN)); // -1
console.log(calculateAge(NaN, 2020)); // -1

function getElementAtIndex(array, index) {
    if (!isArray(array) || !isNumber(index) || index < 0) {
        return null;
    }
    return array[index];
}

console.log(getElementAtIndex([1, 2], 1)); // 2
console.log(getElementAtIndex(["red", "blue"], 0)); // red
console.log(getElementAtIndex({ name: "John" }, 0)); // null
console.log(getElementAtIndex([1, 2], -1)); // null
console.log(getElementAtIndex([1, 2], "1")); // null

function checkEmpty(value) {
    if (isNull(value) || isUndefined(value)) {
        return "Trống";
    }
    return "Không trống";
}

console.log(checkEmpty(null)); // Trống
console.log(checkEmpty(undefined)); // Trống
console.log(checkEmpty()); // Trống
console.log(checkEmpty(123)); // Không trống
console.log(checkEmpty([])); // Không trống
