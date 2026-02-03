/**
 * Converts a number (1-12) to its corresponding Vietnamese month name.
 */
function convertNumberToMonth(number) {
    if (number === 1) {
        return "Tháng một";
    } else if (number === 2) {
        return "Tháng hai";
    } else if (number === 3) {
        return "Tháng ba";
    } else if (number === 4) {
        return "Tháng tư";
    } else if (number === 5) {
        return "Tháng năm";
    } else if (number === 6) {
        return "Tháng sáu";
    } else if (number === 7) {
        return "Tháng bảy";
    } else if (number === 8) {
        return "Tháng tám";
    } else if (number === 9) {
        return "Tháng chín";
    } else if (number === 10) {
        return "Tháng mười";
    } else if (number === 11) {
        return "Tháng mười một";
    } else if (number === 12) {
        return "Tháng mười hai";
    } else {
        return "Tháng không hợp lệ";
    }
}
// Sample usage
console.log(convertNumberToMonth(1)); // Tháng một
console.log(convertNumberToMonth(5)); // Tháng năm
