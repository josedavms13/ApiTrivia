import AnswerCheck from "./AnswerCheck.js";
export default
class RoundSystem {

    constructor(CurrentLvl, ) {
        this.dificultystate = CurrentLvl;

        this.output = [];


        switch (this.dificultystate){
            case 1 :
                console.log('Requested easy');
                this.easyQuestions();
                break
            case 2 :
                console.log('Requested Medium');
                this.mediumQuestions();

                break
            case 3 :
                console.log('Requested HARD');
                this.hardQuestions();
                break

        }

    }

    easyQuestions(){
        fetch('https://opentdb.com/api.php?amount=3&difficulty=easy',{
            method : 'GET',
        })
            .then(response => response.json())
            .then(data => this.setQuestions(data.results))
    }

    mediumQuestions(){
        fetch('https://opentdb.com/api.php?amount=3&difficulty=medium',{
            method : 'GET',
        })
            .then(response => response.json())
            .then(data => this.setQuestions(data.results))
    }

    hardQuestions(){
        fetch('https://opentdb.com/api.php?amount=3&difficulty=hard',{
            method : 'GET',
        })
            .then(response => response.json())
            .then(data => this.setQuestions(data.results))

    }


    setQuestions(data){
        data.forEach((data)=> this.output.push((data)))
        this.output = data;
        // console.log(data);

    }

}




