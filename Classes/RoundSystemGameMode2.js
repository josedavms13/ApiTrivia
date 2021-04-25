export default
class RoundSystemMode2{


    //#region INSTRUCTIONS 

        /*
            Receiving = ['category', 'difficulty', 'type'];

            - When we define the categories that will be avalible to filter, have to change the url injection.

            - When Define the way to input the Type, have to change the Comparators



        */
    //#endregion --------------






    constructor(arrayOfParameters){
        
        this.difficulty = arrayOfParameters[0];
        this.category = arrayOfParameters[1];
        this.type = arrayOfParameters[2];

    // https://opentdb.com/api.php?amount=3&category=12&difficulty=medium&type=multiple  

        this.customURL = 'https://opentdb.com/api.php?amount=3';



        this.setCategory();
    }


    setCategory(){

        switch(this.category){

            case 'Entertainment: Music':
                this.customURL+= '&'+ 'category=12';
                break


            case 'Science: Computers':
                this.customURL+= '&'+ 'category=18';
                break
    


            case 'Geography':
                this.customURL+= '&'+ 'category=22';
                break
    


            // case 'Entertainment: Music':
            //     this.customURL+= '&'+ 'category=12';
            //     break


            // case 'Entertainment: Music':
            //     this.customURL+= '&'+ 'category=12';
            //     break
        



        }







        console.log(this.customURL);

        this.setDifficulty();
    }


    setDifficulty(){
        switch(this.difficulty){

            case 1:
                this.customURL+= '&'+ 'difficulty=easy';
                break;
            case 2:
                this.customURL+= '&'+ 'difficulty=medium';
                break;
            case 3:
                this.customURL+= '&'+ 'difficulty=hard';
                break;
        }

        this.setType();
    }

    setType(){
        if(this.type === 1){
            this.customURL += '&'+'&type=multiple'
        }
        if(this.type === 2){
            this.customURL += '&'+'&type=boolean'
        }

        this.getFilteredQuesitons();
    }







    getFilteredQuesitons(){
        console.log(this.customURL)
        fetch(this.customURL, {
            method : 'GET',
        }).then(result => result.json())
        .then(data=> console.log(data))
    }   










}
