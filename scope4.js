var i = 5;

function a(){
	var i = 10;
	b();
}

function b(){
	document.write(i); //사용될때 X 정의될 때 O
}

a();