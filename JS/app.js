
$('#button').on('click',(e)=>{

	const zip = $('#textInput').val()

	console.log(zip);



	 $.ajax({
		url: 'https://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid=cee60a3c4bf2e00cb48a1f09ffc0337f',
		type:'GET',
		dataType:'json',
		success: getForecast,
		fail: function(error){
			console.log(error);
		}


	})


})


function getForecast(data){


	console.log(data)


	$('#city').text(data.name)
	console.log(data.main.temp_max);



	$('#high').text('High: ' + convertTemp(data.main.temp_max)+ ' F')

	$('#low').text('Low: ' + convertTemp(data.main.temp_min) +' F') 


	$('#weather').text(data.weather["0"].description)

}



const convertTemp=(temp)=>{
	// ° F = 9/5 (K - 273) + 32

	return Math.round(9/5 *(temp -273)+32)

}