function resizeImage()
{
	var S=document.getElementById("source").value;
	var H=document.getElementById("height").value;
	var W=document.getElementById("width").value;
	document.getElementById("img").src=S;
	document.getElementById("img").width=W;
	document.getElementById("img").height=H;
}