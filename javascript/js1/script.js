// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",function(event)
{
	function Sayhello()
{
	this.textContent="Said it!";
				var name=document.getElementById("name").value;

		if (name=="bikraj")
	{
	var message= "<h3>You Fatso  "+name+"!<h3>";
	console.log(message);
	}
	else
	{
		var name=document.getElementById("name").value;
	var message= "<h3>I love you "+name+"!<h3>";
	console.log(message);
	}
	
	// document
	// .getElementById("content")
	// .textContent=message;
	document
	.getElementById("content")
	.innerHTML=message;
	if(name="bikraj")
	{
		var title=
		document
			.querySelector("#title")
			.textContent;
		
	title="OH NO !!"
		document
		.querySelector("#title")
		.textContent=title;
	}

}
document.querySelector("button")
.addEventListener("click",Sayhello);

document.querySelector("body")
.addEventListener("mousemove",function(event)
{
	
		console.log("x:"+event.clientX);
		console.log("y:"+event.clientY);

	
});

});

