function a (){
	var i = 0; //var 빠지면 무한루프
};
for (var i = 0; i < 5; i++) {
	a();
	document.write(i);
};