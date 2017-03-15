$(document).ready(function() {
//Define the variables for the minerals//
var oreArray = ['#golore','#silore','#titore','#diaore'];
var scoreArray = [];

// state function to start game and set values for ores and goal number//
$('#start').on('click', function(){
	for (var i=0; i<4; i++) {
		var oreval = Math.floor(Math.random() * 11) +1;
		console.log(oreval);
		$(oreArray[i]).attr('value', oreval);
		}
	var rannum = Math.floor(Math.random() * 120) +1;
	console.log(rannum);
	$('#goalnum').html(rannum);
	$('#goalnum').attr('value',rannum);
	});
//state function that logics scoreboard
$('.ore').on('click', function() {
	var score = (this.value);
	//$('scoreArray').push(score);
	$('#scorebox').html(scoreArray);
	});

//state the logic for winning and losing
if ('#scorebox.value'='#goalnum.value') {
	alert(You win!)
	 };
}

});