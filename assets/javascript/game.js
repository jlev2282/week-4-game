
var oreArray = ['#golore','#silore','#titore','#diaore'];

$('#start').on('click', function(){
	for (var i=0; i<3; i++) {
		var oreval = Math.floor(Math.random() * 11) =1;
		console.log(oreval);
		$(oreArray[i]).attr('value', oreval);
		}

	});