/*
window.onload = function() {
  //var clickMeButton = document.getElementById('clickMe');
  //clickMeButton.onclick = runTheExample;

  document.getElementById('clickMe').onclick = runTheExample;
}
*/

function runTheExample() {
  alert('running the example');
}

/*
function runTheExample() {

  var myElement = document.getElementById('second');

  var myNodeName = myElement.nodeName;
  //alert(myNodeName);

  if (myElement != null)
  {
    alert(myElement.innerHTML);
  }

  document.getElementById('second').innerHTML = "See how I set the text here?";

  var listOfParagraphs = document.getElementsByTagName('p');
 
  //alert(listOfParagraphs.length);

  var secondParagraph = listOfParagraphs[1];

  alert(secondParagraph.innerHTML);

 
 
  myElement = document.getElementById('second');
  alert(myElement.parentNode.nodeName);
 
  myElement.childNodes[0];
  myElement.firstChild;
  myElement.lastChild;

  myElement.nextSibling;
  myElement.previousSibling;


 
  var anchor = document.getElementById('myAnchor');
  //var anchorDestination = anchor.href;
  //alert(anchorDestination);

  //anchor.href = "http://www.learnvisualstudio.net";  

  //anchor.setAttribute('href', 'http://www.learnvisualstudio.net');
  //anchor.getAttribute('href');
}

/* var d = "document.getElementById";
	var clickMe = d("clickMe"); */
/*
window.onload = function() {
	
	document.getElementById("clickMe").onclick = function () {
		alert("yeap it's working");
	}
}
*/

/*
var clickMe = document.getElementById("clickMe");
(clickMe.onclick = function () {
	alert("yeap it's working");
})();
*/

/*
function myClicker() {
	clickMe.onclick = function () {
		console.log("yeap it's working");
		alert("yeap it's working");
	}
}
myClicker();
*/



window.onload = function() {
	document.getElementById("clickMe").onclick = clicker ();
}
function clicker () {
	document.getElementById("second").innerHTML = "Yeah baby";
	var myPs = document.getElementsByTagName("p");
	console.log(myPs.item(0).innerHTML);
}








