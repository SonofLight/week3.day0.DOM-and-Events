
//assign variable to Element ID
let imgEvent = document.getElementById('rengar');
let imgContainer = document.getElementsByClassName("main_container");

//set missing "src" to img element



//set "on-click" event listener to img
imgContainer[0].addEventListener("click",

	function(){
		imgEvent.setAttribute("src", "./assets/rengar.png");
		setTimeout(function(){alert("You have been deleted.");},  200);
	}

	);