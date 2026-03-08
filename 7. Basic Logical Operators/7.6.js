/**
 * Checks if age is within the school-going range of 6 to 18.
 */
function isSchoolAge(age) {
    return age >= 6 && age <= 18;
}

// Sample usage
console.log(isSchoolAge(5)); // false
console.log(isSchoolAge(10)); // true
