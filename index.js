import RoundSystem from "./Classes/RoundSystem.js";
import RoundSystemMode2 from "./Classes/RoundSystemGameMode2.js"
import AnswerCheck from "./Classes/AnswerCheck.js";
import UI from "./Classes/UI.js";


//#region GLOBALS


let QUESTIONS_OBJECT = null;

let CHECKER = null
//#endregion globals


//#region ASYNC SOLUTION

//---------------------------------------------------------------

// const Questions = new RoundSystem(3);

///
function ModeChanger(mode, parameters) {

    console.log(mode);

    let Questions = null
    if(mode === 1){
        Questions = new RoundSystem(parameters);

    }
    if(mode === 2){
        Questions = new RoundSystemMode2(parameters);
    }





    setTimeout(() => {
        QUESTIONS_OBJECT = Questions.output;

        /// --- > Here The object we set the object we are going to work with



        setTimeout(() => {


            ///---- > Here is hapens AFTER! the object is created.

            console.log(QUESTIONS_OBJECT);

            // CHECKER = new AnswerCheck(testAnswers, toTestObject.CorrectAnswers);




        }, 2000)

    }, 2000)
}

//---------------------------------------------------------------

//#endregion async solution









//#region  TO TEST AND CONNECT

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
// const parametersToMode2= [1, 'Science: Computers', 2];

// ModeChanger(mode, parametersToMode2);




//#endregion modeSwitcher



//#endregion toTEST


const Mode2PlayButton = document.getElementById('GameMode2-start');

Mode2PlayButton.addEventListener("click", getInfoFromHTMLForm)


function getInfoFromHTMLForm(){

    

    console.log('clicked')
    const categorySelector = document.getElementById('Category').value;
    const levelSelector = document.getElementById('Level').value;
    const typeSelector = document.getElementById('Type').value;

    const parametersOfMode2= [categorySelector, levelSelector, typeSelector]

    // console.log(parametersOfMode2)

    ModeChanger(2, parametersOfMode2);


}


