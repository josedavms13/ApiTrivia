import RoundSystem from "./Classes/RoundSystem.js";
import RoundSystemMode2 from "./Classes/RoundSystemGameMode2.js"
import AnswerCheck from "./Classes/AnswerCheck.js";
import UI from "./Classes/UI.js";
import DisplayQAs from "./Classes/DisplayQAs.js"
import CategoryFiter from "./Classes/CategoryFiter.js"
import musicLevel from "./Classes/musicLevel.js"

 
//#region GLOBALS


let QUESTIONS_OBJECT = null;

let CHECKER = null;

let ISPLAYING = false;

let SAMESONG= false;

let CURRENT_LVL = null;

let RESET = null;
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
    ShowCover();
    console.log(mode);

    let Questions = null
    if(mode === 1){
        //console.log(parameters)
        Questions = new RoundSystem(parameters);

        
        //PLAY Music
        
        RESET = [mode, parameters];
        // musicLevel.stop();

        if(CURRENT_LVL !== RESET[1]){
            console.log('music changes');
            console.log(CURRENT_LVL);
            console.log(RESET[1]);
            // musicLevel.play(parameters);
            
        }
        

        //console.log("mode1")

    }
    if(mode === 2){
        
        Questions = new RoundSystemMode2(parameters);
        RESET = [mode, parameters];

    }





    setTimeout(() => {
        

        QUESTIONS_OBJECT = Questions.output;

        /// --- > Here The QUESTIONS_OBJECT is created





        setTimeout(() => {
            HideCover();

            ///---- > Here is hapens AFTER! the object is created.

            console.log(QUESTIONS_OBJECT);



            DisplayQAs.run(QUESTIONS_OBJECT);
            
        
        }, 1000)

    }, 2000)
}




//---------------------------------------------------------------

//#endregion async solution









//#region  Get Users Answers Function

const userAnswers = [null,null,null];

// La función recibe el textContent del botón mediante un "onclick"
function getUserAnswers(answer, idName){

    const indexInArray = placeAnswerInOrder(idName);
    userAnswers.splice(indexInArray, 1, answer);

    console.log("Así va:")
    console.log(userAnswers)
    document.getElementById(idName).classList.add("selectedAnswer");
    disableAnswers(idName);
    
    return(userAnswers);
}



function placeAnswerInOrder(idName){
    const allAnswers = QUESTIONS_OBJECT.IncorrectAnswers;
    const a = allAnswers[0].length;
    const b = a + allAnswers[1].length;
    const c = b + allAnswers[2].length;

    const idNumber = idName.substring(1);

    if(idNumber <= a){
        const indexInArray = 0;
        return(indexInArray);
    }
    if(idNumber >= a && idNumber <= b){
        const indexInArray = 1;
        return(indexInArray);
    }
    if(idNumber >= b && idNumber <= c){
        const indexInArray = 2;
        return(indexInArray);
    }

}


function disableAnswers(idName){
    const allAnswers = QUESTIONS_OBJECT.IncorrectAnswers;
    const a = allAnswers[0].length;
    const b = a + allAnswers[1].length;
    const c = b + allAnswers[2].length;

    const idNumber = idName.substring(1);

    if(idNumber <= a){
        for(let i=1; i<=a; i++){
            document.getElementById(`A${i}`).removeAttribute("onclick");
        }
    }
    if(idNumber >= a && idNumber <= b){
        for(let i=a+1; i<=b; i++){
            document.getElementById(`A${i}`).removeAttribute("onclick");
        }
    }
    if(idNumber >= b && idNumber <= c){
        for(let i=b+1; i<=c; i++){
            document.getElementById(`A${i}`).removeAttribute("onclick");
        }
    }
}

//#endregion  



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

document.getElementById('GameMode2-start').addEventListener("click", Mode2);

document.getElementById('Gamemode2-selection').addEventListener("click", ShowFilterForm)


// console.log('holaaaaaaaaaaaaaaaaaaaa');

function Reset(){
    console.log('RESET')
    console.log(RESET);
            

    if(RESET !== null){
                //   gamemode   lvl
        ModeChanger(RESET[0], RESET[1])
        console.log(RESET[1]);
        CURRENT_LVL = RESET[1];
    }
    console.log('RESET--------------')
}


function OnclickReset(){
    console.log('Clicked 2')
    Reset();
}


function Mode2(){
    console.log('clicked')
    HideFilterForm();
    ModeChanger(2, CategoryFiter());
    console.log(CategoryFiter());
}


//#endregion   html even Handler    


//#region HTML SHOW/HIDE FUNCTIONS
function ShowCover(){

    document.getElementById('cover').classList.remove('d-none');

}

function HideCover(){

    document.getElementById('cover').classList.add('d-none');

}

function ShowResults(){
    document.getElementById('results').classList.remove('d-none');
}

function HideResults(){
    document.getElementById('results').classList.add('d-none');
}

function ShowFilterForm(){
    document.getElementById('FilterForm').classList.remove('d-none');
    
}

function HideFilterForm(){
    document.getElementById('FilterForm').classList.add('d-none');
    document.getElementById('Gamemode2-selection').classList.add('d-none');
}
//#endregion html Show/Hide funcitons

// Mode2PlayButtonStart.addEventListener("click", getInfoFromHTMLForm)

window.getUserAnswers = getUserAnswers;



window.OnclickReset = OnclickReset;


