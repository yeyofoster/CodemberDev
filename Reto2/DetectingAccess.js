/**
 * Retos de programación - Codember de MiduDev
 * Reto 2 - Detectando acceso no deseado
 */

const fs = require('fs');
const filePath = "Reto2/log.txt";

const isValidAccess = function (accessString) {
    // Validation to only accept valid characters.
    const lowerCaseAndNumbersRegex = /^[a-z0-9]+$/;;
    if (lowerCaseAndNumbersRegex.test(accessString)) {
        // Validation that current char at i should be less than char at i+1.
        for (let i = 0; i < accessString.length - 1; i++) {
            if (accessString.charAt(i) > accessString.charAt(i + 1)) {
                return false;
            }
        }
        return true;
    } else {
        return false
    }
};

// Read log.txt file
fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    const dataString = data.toString();

    // Split all data into an array of statements, where each element is an input to validate.
    const accessArray = dataString.split('\n');

    // Variables to store the number of valid and invalid access attempts.
    let validAccesses = 0;
    let invalidAccesses = 0;

    // Iterate and validate every single string of access.
    for (const accessString of accessArray) {
        isValidAccess(accessString.replaceAll('\r', '')) ? validAccesses++ : invalidAccesses++;
    }

    console.log(`${validAccesses}true${invalidAccesses}false`);
});