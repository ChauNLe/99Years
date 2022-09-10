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
    }

    getTitle() {
        return this.title;
    }

    initialize(){
        // code to initialize the app goes here
        console.log("Initializing Home Page App");

        $("#continue").on("click", (evt) => {
            evt.preventDefault();
            this.questionCard.classList.remove('d-none');
            this.continueButton.classList.add('d-none');
        })
    }
}