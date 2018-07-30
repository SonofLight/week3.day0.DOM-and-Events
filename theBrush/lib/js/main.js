
//assign variable to Element ID
let imgEvent = document.getElementById('rengar');

//set missing "src" to img element
imgEvent.setAttribute("src", "./assets/rengar.png");


//set "on-click" event listener to img
imgEvent.addEventListener("click",

	function(){
		alert("You have been deleted.");
	}

	);