var img = document.getElementById('audi1');
var img_id = 'c';

	function flipImg(){
		if (img_id == 'c'){
			img.src = 'Audi2.jpg';
			img_id = 'm';
		}else{
			img.src = 'Audi1.jpg';
			img_id = 'c';
		}
	}
	
	var loop = setInterval(flipImg, 480);