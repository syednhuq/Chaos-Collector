//set computer choice to match up against
var computerChoice = Math.ceil(Math.random()*(119 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var gem1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var gem2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var gem3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var gem4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;

//randomize value of each gem
function shuffleCrystalValues(){
	gem1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	gem2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	gem3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	gem4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}

//game mechanics (counters, scores)
function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You Win!');
		computerChoice = Math.ceil(Math.random()*(119 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text("You Lose!");
		computerChoice = Math.ceil(Math.random()*(119 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}


//display computer choice
$('#random-number').text(computerChoice);


//the following are functions of clicking on each gem 
$('#gem1').on('click', function(){
	userTotalScore += gem1Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#gem2').on('click', function(){
	userTotalScore += gem2Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#gem3').on('click', function(){
	userTotalScore += gem3Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#gem4').on('click', function(){
	userTotalScore += gem4Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});















