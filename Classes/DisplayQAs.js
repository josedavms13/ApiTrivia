const displayQAs = {


run: function (QUESTIONS_OBJECT){
    
    const randomPosition = displayQAs.answersOrder(QUESTIONS_OBJECT);
    const allAnswersArray = displayQAs.concatAllAnswers(QUESTIONS_OBJECT, randomPosition);
    
    //----------------------------------------------------
    
    //Ques & Ans 1
    const Q1 = document.getElementById("Q1");
    Q1.innerHTML = '';
    Q1.innerHTML = QUESTIONS_OBJECT.Questions[0];
    const Answers1 = document.getElementById("Answers1");
    displayQAs.printAnswers(allAnswersArray[0], "Answers1");
 

    //Ques & Ans 2
    const Q2 = document.getElementById("Q2");
    Q2.innerHTML = '';
    Q2.innerHTML = QUESTIONS_OBJECT.Questions[1];
    const Answers2 = document.getElementById("Answers2");
    displayQAs.printAnswers(allAnswersArray[1], "Answers2");
 

    //Ques & Ans 3
    const Q3 = document.getElementById("Q3");
    Q3.innerHTML = '';
    Q3.innerHTML = QUESTIONS_OBJECT.Questions[2];
    const Answers3 = document.getElementById("Answers3");
    displayQAs.printAnswers(allAnswersArray[2], "Answers3");

    
},



//#region Array completo de repuestas en orden aleatorio 
answersOrder: function (QUESTIONS_OBJECT){
    const incorrectAnswersArray = QUESTIONS_OBJECT.IncorrectAnswers;
    ////console.log(incorrectAnswersArray)
    const randomPosition = [];
    for(let i=0; i < 3; i++){
        if(incorrectAnswersArray[i].length === 3){
            const randomNotRounded = Math.random()*(3-0);
            const randomNumber = Math.round(randomNotRounded)
            ////console.log(randomNumber)
            randomPosition.push(randomNumber);

        }else{
            randomPosition.push(null);
        }
    }
    return(randomPosition)
    ////console.log(randomPosition);
},



concatAllAnswers: function (QUESTIONS_OBJECT, randomPosition){
    //console.log(`Objetoo:`);
    //console.log(QUESTIONS_OBJECT);

    const correctAnswersArray = QUESTIONS_OBJECT.CorrectAnswers;
    //console.log(`Correct:`);
    //console.log(correctAnswersArray);

    const incorrectAnswersArray = QUESTIONS_OBJECT.IncorrectAnswers;
    //console.log(`Incorrect: `);
    //console.log(incorrectAnswersArray);

    const allAnswersArray = incorrectAnswersArray;
    
    for(let i=0; i < 3; i++){
        if(randomPosition[i] !== null){

            const randomIndex = randomPosition[i];
            
            const correctAnswer = correctAnswersArray[i];
            allAnswersArray[i].splice(randomIndex, 0, correctAnswer);

        } else {
            allAnswersArray[i] = ["True", "False"];
        }
    }
    return allAnswersArray;
},






printAnswers: function (answers, idName){
    const divAnswers = document.getElementById(idName);
    divAnswers.innerHTML = '';
    for(let i=0; i < answers.length; i++){
        divAnswers.innerHTML += `<button onclick="getUserAnswers(this.textContent)" class="btn btn--start glass glass-btn">${answers[i]}</button>`
    }
}

//#endregion 

}

export default displayQAs;