/**
 * Checks if a number is even or odd.
 */
// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Chẵn";
//     } else {
//         return "Lẻ"
//     }
// }

// function checkEvenOdd(number) {
//     if (number % 2 === 0) return "Chẵn";
//     return "Lẻ";
// }

function checkEvenOdd(num) {
    const isEven = num % 2 === 0;
    return isEven ? 'Chẵn' : 'Lẻ';
}

// Sample usage
console.log(checkEvenOdd(4)); // Chẵn
console.log(checkEvenOdd(5)); // Lẻ