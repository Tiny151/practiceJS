/**
 * 1. Determines whether to invest in a project based on risk and expected ROI.
 * @param {string} riskLevel - The risk level of the investment, which can be "high", "medium", or "low".
 */
function investmentDecision(riskLevel, ROI) {
    const safeInvestment = riskLevel !== "high" && ROI > 0.1; // (riskLevel === "low" || riskLevel === "medium")
    const riskyInvestment = riskLevel === "high" && ROI > 0.2;
    return safeInvestment || riskyInvestment;
}

// Sample usage
// console.log(investmentDecision("medium", 0.12)); // true

/**
 * 2. Decides on a travel plan based on weather, budget, and personal preferences.
 */
function determineTravelPlan(isGoodWeather, budget, isAdvertorous) {
    const isLowBudget = budget < 5000;

    if (!isGoodWeather) return "Hoãn kế hoạch";
    if (isLowBudget) return "Khám phá địa phương";

    return isAdvertorous ? "Du lịch núi" : "Du lịch biển";
}

// Sample usage
// console.log(determineTravelPlan(true, 6000, true));   // Du lịch núi

/**
 * 3. Classifies students based on exam scores and class attendance percentage.
 */
function determineStudentCategory(score, attendanceRate) {
    const needImprovement = attendanceRate < 0.5;
    if (needImprovement) return "Cần cải thiện";

    const isAverage = score < 60 || attendanceRate < 0.6;
    if (isAverage) return "Trung bình";

    const isExcellent = score >= 90;
    if (isExcellent) return "Xuất sắc";

    const isGood = score >= 75 && attendanceRate >= 0.7;
    if (isGood) return "Giỏi";

    return "Khá";
}


// Sample usage
// console.log(determineStudentCategory(80, 0.65)); // Xuất sắc

/**
 * 4. Checks if an employee has access to the workroom.
 */
function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
    return isManager || hasAccessCard && passedSafetyTest;
}

// Sample usage
console.log(hasAccessToWorkroom(false, true, true));  // true