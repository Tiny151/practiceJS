function determineStudentCategory(score, attendanceRate) {
    if (attendanceRate < 0.5) {
        return "Cần cải thiện";
    }
    if (score >= 90) {
        return "Xuất sắc";
    }
    if (score >= 75 && attendanceRate >= 0.7) {
        return "Giỏi";
    }
    if (score >= 60 && attendanceRate >= 0.6) {
        return "Khá";
    }
    return "Trung bình";
}
