var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/razorback.jpg') {
		myImage.setAttribute('src', 'images/razorback1.jpg')
	} else {
		myImage.setAttribute('src', 'images/razorback.jpg')
	}
}