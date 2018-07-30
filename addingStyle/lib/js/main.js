

document.querySelector('.right_side').style.background="#d3c26f";


let nameDiv =  document.querySelectorAll('.name')

for(let i = 0; i < nameDiv.length; i++ ){
	console.log(nameDiv[i].setAttribute("style", "color:yellow; text-shadow: -6px 5px 2px;"));
}