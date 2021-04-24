import levelingSystem from "../Classes/levelingSystem.mjs";
import scoreSystem from "../Classes/scoreSystem.mjs";


//----- Prueba de scoreSystem ------------


/* let scoreInStorage = "scoreStorage";
let score = 5;

localStorage.setItem(scoreInStorage, JSON.stringify(score)); */

/* let answersArray = [1,1,1];
let level = 3;
let scoreInStorage = "scoreStorage";

let score = scoreSystem.run(answersArray, level, scoreInStorage);
console.log(score); */

//----- End prueba ------------------



//----- Prueba de levelingSystem ------------
let level = 2;
let answersArray = [1, 1, 1];
let stack_value = 0;
let nextLevel;
let levelInStorage = "level";

console.log(`answersArray: ${answersArray}, level: ${level}, stack_value: ${stack_value}`);

[nextLevel, stack_value] = levelingSystem.run(answersArray, level, levelInStorage, stack_value);

console.log(`nextLevel: ${nextLevel}, stack_value: ${stack_value}`);

//----- End prueba ------------------
