/**
 * 1. Determines if a person is eligible to purchase car insurance based on age, license status, and accident history.
 */
function canPurchaseCarInsurance (age, hasLicense, noAccidents) {
    return age >21 && hasLicense && noAccidents
}

// Sample usage
// console.log(canPurchaseCarInsurance(22, true, true)); // true
// console.log(canPurchaseCarInsurance(20, true, true)); // false

/**
 * 2. Checks if a person meets the age and experience requirements to join a local football team.
 */
function canJoinFootballTeam(age, hasExperience) {
    if ((age >= 18 && age <= 35) && hasExperience) {
        return true
    }
    return false
}

// Sample usage
// console.log(canJoinFootballTeam(25, true)); // true
// console.log(canJoinFootballTeam(17, true)); // false

/**
 * 3. Verifies if a bank account is valid based on identity verification and a minimum balance requirement.
 */
function isBankAccountValid(isIdentityVerified, balance) {
    return isIdentityVerified && balance>100
}

// Sample usage
// console.log(isBankAccountValid(true, 150)); // true
// console.log(isBankAccountValid(false, 200)); // false

/**
 * 4. Assesses eligibility to participate in a marathon based on age and sufficient training.
 */
function canParticipateInMarathon(age, hasTrained) {
    return age >= 18 && hasTrained
}

// Sample usage
// console.log(canParticipateInMarathon(20, true)); // true
// console.log(canParticipateInMarathon(20, false)); // false

/**
 * 5. Evaluates if a person can enroll in a cooking class, considering their interest in cooking and absence of food allergies.
 */
function canEnrollCookingClass(lovesCooking, noFoodAllergies) {
    return lovesCooking && noFoodAllergies
}

// Sample usage
console.log(canEnrollCookingClass(true, true)); // true
console.log(canEnrollCookingClass(true, false)); // false