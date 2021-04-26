import RoundSystem from "./Classes/RoundSystem.js";
import RoundSystemMode2 from "./Classes/RoundSystemGameMode2.js"
import AnswerCheck from "./Classes/AnswerCheck.js";
import UI from "./Classes/UI.js";
import DisplayQAs from "./Classes/DisplayQAs.js"
import CategoryFiter from "./Classes/CategoryFiter.js"

//#region GLOBALS


let QUESTIONS_OBJECT = null;

let CHECKER = null
//#endregion globals


//#region ASYNC SOLUTION

//---------------------------------------------------------------

// const Questions = new RoundSystem(3);
 

function mode1Handler(){
    const storageLevelJSON = localStorage.getItem("level");
    const storageLevel = JSON.parse(storageLevelJSON);
    if(storageLevel === null ){
        //console.log(`No hay level en storage`)
        ModeChanger(1,1);
    }else{
        //console.log(`level en storage: ${storageLevel}`)
        ModeChanger(1, storageLevel);
    }
}




///
function ModeChanger(mode, parameters) {

    console.log(mode);

    let Questions = null
    if(mode === 1){
        //console.log(parameters)
        Questions = new RoundSystem(parameters);
        //console.log("mode1")

    }
    if(mode === 2){
        
        Questions = new RoundSystemMode2(parameters);
    }





    setTimeout(() => {
        QUESTIONS_OBJECT = Questions.output;

        /// --- > Here The QUESTIONS_OBJECT is created





        setTimeout(() => {


            ///---- > Here is hapens AFTER! the object is created.

            console.log(QUESTIONS_OBJECT);


            DisplayQAs.run(QUESTIONS_OBJECT);
            //PruebaObject.run(QUESTIONS_OBJECT);
        
        }, 1000)

    }, 2000)
}




//---------------------------------------------------------------

//#endregion async solution









//#region  TO TEST AND CONNECT

/* function displayQuestionsAnswers(){

    const randomPosition = answersOrder();
    const allAnswersArray = concatAllAnswers(randomPosition);

    console.log(randomPosition)
    console.log(all)
    //----------------------------------------------------
    
    //Ques & Ans 1
    const Q1 = document.getElementById("Q1");
    Q1.innerHTML = QUESTIONS_OBJECT.Questions[0];
    const Answers1 = document.getElementById("Answers1");
    printAnswers(allAnswersArray[0], "Answers1");
    console.log("Aquí llega-1")

    //Ques & Ans 2
    const Q2 = document.getElementById("Q2");
    Q2.innerHTML = QUESTIONS_OBJECT.Questions[1];
    const Answers2 = document.getElementById("Answers2");
    printAnswers(allAnswersArray[1], "Answers2");
    console.log("Aquí llega-2")

    //Ques & Ans 3
    const Q3 = document.getElementById("Q3");
    Q3.innerHTML = QUESTIONS_OBJECT.Questions[2];
    const Answers3 = document.getElementById("Answers3");
    printAnswers(allAnswersArray[2], "Answers3");
    console.log("Aquí llega-3")
    
}



//#region Array completo de repuestas en orden aleatorio 
function answersOrder(){
    const incorrectAnswersArray = QUESTIONS_OBJECT.IncorrectAnswers;
    //console.log(incorrectAnswersArray)
    const randomPosition = [];
    for(let i=0; i < 3; i++){
        if(incorrectAnswersArray[i].length === 3){
            const randomNotRounded = Math.random()*(3-0);
            const randomNumber = Math.round(randomNotRounded)
            //console.log(randomNumber)
            randomPosition.push(randomNumber);

        }else{
            randomPosition.push(null);
        }
    }
    return(randomPosition)
    //console.log(randomPosition);
}

function concatAllAnswers(randomPosition){
    const correctAnswersArray = QUESTIONS_OBJECT.CorrectAnswers;
    const incorrectAnswersArray = QUESTIONS_OBJECT.IncorrectAnswers;
    const allAnswersArray = incorrectAnswersArray;
    for(let i=0; i < incorrectAnswersArray.length; i++){
        if(randomPosition[i] !== null){
            const randomIndex = randomPosition[i];
            const correctAnswer = correctAnswersArray[i];
            allAnswersArray[i].splice(randomIndex, 0, correctAnswer[i]);
        } else {
            allAnswersArray[i] = ["True", "False"];
        }
    }
    return allAnswersArray;
}

function printAnswers(answers, idName){
    const divAnswers = document.getElementById(idName);
    for(let i=0; i < answers.length; i++){
        divAnswers.innerHTML += `<button>${answers[i]}</button>`
    }
}

//#endregion  */



//#region  Checking System
const toTestObject = { 
    Questions: ["In Magic: The Gathering, what term for blocking was established in the Portal set?", "Who is Manchester United&#039;s leading appearance maker?", "Which of the following is used to measure blood pressure?"], 
    CorrectAnswers: ["Intercepting", "Ryan Giggs", "Sphygmomanometer"], 
    Categories: ["Entertainment: Board Games", "Sports", "Science: Gadgets"], 

    IncorrectAnswers: [["Blocking", "Resisting", "Shielding"], 
                        ["David Beckham", "Wayne Rooney", "Eric Cantona"], 
                        ["Barometer", "Ruler", "Haemoerythrometer"]] 
    
                    }



const testAnswers = [toTestObject.IncorrectAnswers[1][0], toTestObject.CorrectAnswers[1], toTestObject.IncorrectAnswers[1][2]]

// CHECKER = new AnswerCheck(testAnswers, toTestObject.CorrectAnswers);

//#endregion Checking System


//#region  ModeSwitcher

// ModeChanger(mode, lvl);
// ModeChanger(1, 1);


// MODE 2
const parametersToMode2= [1, 'Science: Computers', 2];

// ModeChanger(2, parametersToMode2);




//#endregion modeSwitcher



//#endregion toTEST









//#region HTML EVENT HANDLER
document.getElementById("GameMode1-start").addEventListener("click", mode1Handler);

const Mode2PlayButton = document.getElementById('GameMode2-start');

Mode2PlayButton.addEventListener("click", Mode2);

function Mode2(){
    console.log('clicked')
    ModeChanger(2, CategoryFiter())
}

// Mode2PlayButton.addEventListener("click", getInfoFromHTMLForm)

//#endregion   html even Handler    
