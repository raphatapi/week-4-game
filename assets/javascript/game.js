// Randomly picks a number from 47 to 103 and sets it as the target number
var minNumber = 47;
var maxNumber = 103;
var targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
var counter = 0;
var gameScore = 0;
var gameLife = 3;
var crystalNumbers = [4, 2, 8, 13];


$(document).ready(function() {
	$("#random-number").text(targetNumber);

	for (var i = 0; i < crystalNumbers.length; i++) {
		var crystal = $("<img>");	
		crystal.addClass("crystal-image");
		crystal.attr("src", "assets/images/purple.gif");
		crystal.attr("data-crystalvalue", crystalNumbers[i]);
		$("#crystals").append(crystal);
	}

	$(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	$("#userGuess").text(counter);

	    if (counter === targetNumber) {
	  	gameScore ++;
	      $("#crystals").remove();
	      $("h1").text("You win!");
	      $("#play").append("<br><button onclick='reloadPage()'>Play Again!</button>");
	    }

	    else if (counter > targetNumber) {
	    gameLife -= 1;
	      $("#crystals").remove();
	      $("h1").text("Better luck next time"); //Game over
	      $("#play").append("<br><button onclick='reloadPage()'>Play Again!</button>");
	    }
	});

	$("#score").text(gameScore);
	$("#life").text(gameLife);

});

function reloadPage() {
    location.reload();
}