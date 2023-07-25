var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");

var images = new Array(
	"pic1.jpg",
	"pic2.jpg",
	"pic3.jpg",
	"pic4.jpg",

	)

for (let i=0; i<btn.length; i++){
	btn[i].onclick = function() 
	{
		gallery.src = images[i];
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += " active";
	};
}
