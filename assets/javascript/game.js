$(document).ready(function() {

var oreArray = ['#golore','#silore','#titore','#diaore'];
var scoreArray = [];

$('#start').on('click', function(){
	for (var i=0; i<4; i++) {
		var oreval = Math.floor(Math.random() * 11) +1;
		console.log(oreval);
		$(oreArray[i]).attr('value', oreval);
		}
	var rannum = Math.floor(Math.random() * 120) +1;
	console.log(rannum);
	$('#goalnum').html(rannum);
	});

$('.ore').on('click', function() {
	$(this.value).html('#scorebox');
	});

});