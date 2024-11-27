/**
 * Retos de programación - Codember de MiduDev
 * Reto 3 - ¡Siguiendo la pista de la IA ΩMEGA!
 */

const fs = require('fs');
const filePath = "Reto3/trace.txt";

const omegaSteps = function (steps) {
    steps = steps.split(' ').map(Number);
    let omegaPosition = 0;
    let stepAccumulator = 0;
    let currentStep = 0;
    // console.log("------------------------");
    // console.log("Inicio: ", steps);
    while (omegaPosition < steps.length && omegaPosition >= 0) {
        currentStep = steps[omegaPosition];
        steps[omegaPosition] += 1;
        omegaPosition += currentStep;
        stepAccumulator++;
        // console.log(`Paso ${stepAccumulator}: `, steps);
    }

    // console.log("Resultado: ", stepAccumulator);
    // console.log("------------------------\n");

    return stepAccumulator;
};

// Read log.txt file
fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    const dataString = data.toString();

    // Split all data into an array of steps.
    const stepsArray = dataString.split('\n');

    let totalSteps = 0;
    let currentOmegaSteps = 0;

    for (const stepsString of stepsArray) {
        currentOmegaSteps = omegaSteps(stepsString);
        totalSteps += currentOmegaSteps;
    }

    console.log(`submit ${totalSteps}-${currentOmegaSteps}`);
});