/**
 * Checks if a person is eligible to attend a tech seminar based on age, employment in IT, and registration status.
 */

// Sample usage
function canAttendTechSeminar(age, isITEmployee, hasRegisted) {
    return age > 18 && isITEmployee && hasRegisted;
}
console.log(canAttendTechSeminar(25, true, true)); // true
console.log(canAttendTechSeminar(20, false, true)); // false
