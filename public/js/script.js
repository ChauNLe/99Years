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
        this.question = document.getElementById("questions");
        this.index = 0;
        this.score = [5, 5, 5, 5];
        this.isContinue = true;
        this.user_score = 0;
        this.detail = ["environment", "quality-of-life", "health", "economy"];
        this.environmentScore = document.getElementById("environment-score");
        this.qualityScore = document.getElementById("quality-score");
        this.economyScore = document.getElementById("economy-score");
        this.healthScore = document.getElementById("health-score")
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
            this.updateScores();
        })

        // on click handler for yes button
        $("#yes-button").on("click", (evt) => {
            evt.preventDefault();
            this.answerYes(question_bank[this.index]);
        })

        // on click handler for no button
        $("#no-button").on("click", (evt) => {
            evt.preventDefault();
            this.answerNo(question_bank[this.index]);
        })

    }

    updateScores() {
        this.environmentScore.innerText = this.score[0];
        this.qualityScore.innerText = this.score[1];
        this.economyScore.innerText = this.score[2];
        this.healthScore.innerText = this.score[3];
    }

    displayQuestions() {
        this.index = ~~(question_bank.length * Math.random());
        this.question.innerText = question_bank[this.index];
    }

    answerYes(question){
        let i;
        for (i=0; i<4; i++){
            this.score[i]+=yes_data[question][i];
            console.log(this.score);
            if (this.score[i]<=0) {
                alert(this.detail[i]+" factor is too low. Your beloved Earth is dying. Your overall score is "+this.user_score);
                this.isContinue = false;
                break;
            }
            else {
                this.displayQuestions();
            }
        }
        this.updateScores();
        if (this.isContinue) this.user_score +=1;
    }

    answerNo(question){
        let i;
        for (i=0; i<4; i++){
            this.score[i]+=no_data[question][i];
            console.log(this.score);
            if (this.score[i]<=0) {
                alert(this.detail[i]+" factor is too low. Your beloved Earth is dying. Your overall score is "+this.user_score);
                this.isContinue = false;
                break;
            }
            else {
                this.displayQuestions();
            }
        }
        this.updateScores();
        if (this.isContinue) this.user_score +=1;
    }
}