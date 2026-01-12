/**
 * Calculates the total score for a student.
 */
function calculateTotalScore(studentName, score, regionalBonus) {
    const totalScore = score + regionalBonus;
    return `Sinh viên ${studentName} có tổng điểm là ${totalScore}`
}

// Sample usage
console.log(calculateTotalScore("Nguyễn Văn A", 7, 0.5)); // Sinh viên Nguyễn Văn A có tổng điểm là 7.5
console.log(calculateTotalScore("Trần Thị B", 6, 1)); // Sinh viên Trần Thị B có tổng điểm là 7