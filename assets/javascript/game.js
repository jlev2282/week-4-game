$(document).ready(function() {
//Define the variables for the minerals//
var oreArray = ['#golore','#silore','#titore','#diaore'];
var scoreArray = [];
var score = 0;
var wins = 0;
var losses = 0;

// state function to start game and set values for ores and goal number//
$('#start').on('click', function(){
	$('#scorebox').html("0");
	for (var i=0; i<4; i++) {
		var oreval = Math.floor(Math.random() * 11) +1;
		console.log(oreval);
		$(oreArray[i]).attr('value', oreval);
		}
	rannum = Math.floor(Math.random() * 120) +1;
	console.log(rannum);
	$('#goalnum').html(rannum);
	$('#goalnum').attr('value',rannum);
	var scoreArray=[];
	});
//state function that logics scoreboard
$('.ore').on('click', function() {
	var total = (this.value);
	scoreArray.push(parseInt(total));
	score += scoreArray[scoreArray.length - 1];
	// for ( var i = 0; i < scoreArray.length; i++ ){
 //    	score += scoreArray[i]
	// };
    
	$('#scorebox').html(score);

	if (rannum===score){
		alert("You Win!");
		wins++;
		$('#wins').html(wins);
		}
	if (score>rannum){
		alert("You Lose!");
		losses++;
		$('#losses').html(losses);
	}
	});
//state the logic for winning and losing
/*if ('#scorebox.value'='#goalnum.value') {
	alert(You win!)
	 };
}*/

});