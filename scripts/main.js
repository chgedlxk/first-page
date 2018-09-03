var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/razorback.jpg') {
		myImage.setAttribute('src', 'images/razorback1.jpg')
	} else {
		myImage.setAttribute('src', 'images/razorback.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
var headingContent = myHeading.textContent;

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + " is getting a " + headingContent;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + " is getting a " + headingContent;
}

myButton.onclick = function() {
	setUserName();
}