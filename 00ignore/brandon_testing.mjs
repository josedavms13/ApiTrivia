import levelingSystem from "../Classes/levelingSystem.mjs";
import scoreSystem from "../Classes/scoreSystem.mjs";


//Game launches....


/* let scoreInStorage = "scoreStorage";
let score = 5;

localStorage.setItem(scoreInStorage, JSON.stringify(score)); */

let answersArray = [1,1,1];
let level = 3;
let scoreInStorage = "scoreStorage";

let score = scoreSystem.run(answersArray, level, scoreInStorage);
console.log(score);

// run: (answersArray, level, storage, scoreInStorage)


/*
//----- Prueba de levelingSystem ------------
let level = 1;
let answersArray = [1, 1, 0];
let stack_value = 1;
let nextLevel;

console.log(`answersArray: ${answersArray}, level: ${level}, stack_value: ${stack_value}`);

[nextLevel, stack_value] = levelingSystem.run(answersArray, level, stack_value);

console.log(`nextLevel: ${nextLevel}, stack_value: ${stack_value}`);

//----- End prueba ------------------
*/