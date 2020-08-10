(function(){ // 바로 호출 = 익명 함수 (이름이 없는)
	var MYAPP = {}
	MYAPP.calculator = {
		'left' : null,
		'right' : null
	}
	MYAPP.coordinate = {
		'left' : null,
		'right' : null
	}

	MYAPP.calculator.left = 10;
	MYAPP.calculator.right = 20;
	function sum(){
		return MYAPP.calculator.left + MYAPP.calculator.right;
	}
	document.write(sum());
}())