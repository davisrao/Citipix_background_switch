  // ----------------------***PSEUDOCODE***-------------------------

  // the variable = city takes on the value of city-type in lowercase form.
  // upon the pressing of the submit button:
  // prevent default refresh.
  // if: city = new york, nyc, or new york city then change background to nyc skyline
  // else if city = sf or san francisco then change background to sf skyline
  // 	else if city = la los angeles or lax then change background to la skyline
  // 		else if  city = austin or atx then change background to austin skyline
// ----------------------***ENDPSEUDOCODE***-------------------------

// dont run the JS until the document is ready

$( document ).ready(function() {

// delcaire a variable city	
	var city;
	
// every time the submit button is clicked, i want to call the submit form function
	$("#submit-btn").click(submitform)

// now, this will define the submitform function, that will run upon click. if the user 
	// puts in the city, change the background to that city's picture, otherwise, leave as-is
	function submitform(){
		event.preventDefault();
		city = $("#city-type").val().toLowerCase();
		if (city === "new york" || city === "nyc" || city === "new york city"){
			$('body').css("background", "url(images/nyc.jpg) no-repeat center center fixed");
		}
		else if (city === "san francisco" || city === "sf" || city === "bay area"){
			$('body').css("background", "url(images/sf.jpg) no-repeat center center fixed");
		} 
		else if (city === "los angeles" || city === "la" || city === "lax"){
			$('body').css("background", "url(images/la.jpg) no-repeat center center fixed");
		}
		else if (city === "austin" || city === "atx"){
			$('body').css("background", "url(images/austin.jpg) no-repeat center center fixed");
		}
		else if (city === "sydney" || city === "syd"){
			$('body').css("background", "url(images/sydney.jpg) no-repeat center center fixed");
		}
		else {
			$('body').css("background", "url(images/citipix_skyline.jpg) no-repeat center center fixed	");
		}
	};

});