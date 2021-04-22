export default

class GettingQuestionsFromAPI{

    constructor(difficultyAsked) {
        this.dificultystate = difficultyAsked;

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
                this.harQuestions();
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

    harQuestions(){
        fetch('https://opentdb.com/api.php?amount=3&difficulty=hard',{
            method : 'GET',
        })
            .then(response => response.json())
            .then(data => this.setQuestions(data.results))

    }

    setQuestions(data){
        console.log(data);
    }

}




