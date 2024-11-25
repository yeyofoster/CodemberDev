/**
 * Retos de programación - Codember de MiduDev
 * Reto 1 - Acceso a terminal
 */

const numbers = "528934712834";
const movements = "URDURUDRUDLLLLUUDDUDUDUDLLRRRR";

const decrypt = function (numbers, movements) {
    let numberAccess = "";
    let increments = new Array(numbers.length).fill(0);
    let pointer = 0;
    const numberLength = numbers.length;

    for (const move of movements) {
        switch (move) {
            case "R":
                // Move right
                pointer = (pointer + numberLength + 1) % numberLength;
                break;
            case "L":
                // Move left
                pointer = (pointer + numberLength - 1) % numberLength;
                break;
            case "U":
                // Increase
                increments[pointer] = increments[pointer] + 1;
                break;
            case "D":
                // Decrease
                increments[pointer] = increments[pointer] - 1;
                break;

            default:
                console.log("Invalid move");
                break;
        }
    }

    let digit = 0;
    for (let i = 0; i < numbers.length; i++) {
        digit = (+numbers[i] + +increments[i] + 10) % 10;
        numberAccess = numberAccess.concat(digit);
    }

    return numberAccess;
}

const result = decrypt(numbers, movements);
console.log(`Number: ${numbers}, Movements: ${movements}`);
console.log(`Access number: ${result}`);
