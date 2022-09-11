// This file contains the application code for the 
// landing page of the game 


var homeApp;
$(()=> {
    homeApp = new App('99 Years');
    homeApp.initialize();
});

class App{
    // constructor to create an instance of the app
    constructor(name){
        this.title = name;
        this.questionCard = document.getElementById("question-page");
        this.continueButton = document.getElementById("continue");
        this.gameIntro = document.getElementById("game-intro");
        this.question = document.getElementById("questions")
    }

    getTitle() {
        return this.title;
    }

    initialize(){
        // code to initialize the app goes here
        console.log("Initializing Home Page App");

        // on click handler for continue 
        $("#continue").on("click", (evt) => {
            evt.preventDefault();
            this.questionCard.classList.remove('d-none');
            this.gameIntro.classList.add('d-none');
            this.displayQuestions();
        })

        // on click handler for yes button
        $("#yes-button").on("click", (evt) => {
            evt.preventDefault();
            this.answerYes();
        })

        // on click handler for no button
        $("#no-button").on("click", (evt) => {
            evt.preventDefault();
            this.answerNo();
        })

    }

    displayQuestions() {
        let index = ~~(question_bank.length * Math.random());
        this.question.innerText = question_bank[index];
    }

    answerYes(question){
        let i;
        for (i=0; i<4; i++){
            score[i]+=yes_data[question][i];
            document.getElementById(detail[i]).style.width=(score[i]/30);
            if (score[i]<=0) {
                alert(detail[i]+" is too low. Your beloved Earth is dying. Your overall score is "+user_score);
                isContinue = false;
                break;
            }
            else {
                this.displayQuestions();
            }
        }
        if (isContinue) user_score +=1;
    }

    answerNo(question){
        let i;
        for (i=0; i<4; i++){
            score[i]+=no_data[question][i];
            document.getElementById(detail[i]).style.width=(score[i]/30);
            if (score[i]<=0) {
                alert(detail[i]+" is too low. Your beloved Earth is dying. Your overall score is "+user_score);
                isContinue = false;
                break;
            }
            else {
                this.displayQuestions();
            }
        }
        if (isContinue) user_score +=1;
    }
}