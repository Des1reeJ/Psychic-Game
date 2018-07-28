$(document).ready(function () {
    var wins = 0;
    var losses = 0; 
    var tarrying_guesses = 9;
    var user_guesses = []
    var random_letter = Math.floor((Math.random() * 26) + 65);

    $(document).keyup(function (e) {
        tarrying_guesses--;
        if (random_letter !== e.keyCode && tarrying_guesses >= 1) {
            user_guesses.push(e.key) + ",";
        } else {
            if (random_letter === e.keyCode) {
                wins++;
                $("#wins").text("Wins: " + wins);
            } else {
                losses++;
                $("#losses").text("Losses: " + losses);
            }
            user_guesses = []
            tarrying_guesses = 9;
        }
    });

});