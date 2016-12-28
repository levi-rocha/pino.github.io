//Get the modal
var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Get the image and insert it inside the modal - use its "alt" text as a caption
var ids = [];
for (var i = 0; i < ids.length; i++) {
	var img = document.getElementById(ids[i]);
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	    captionText.innerHTML = this.alt;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}