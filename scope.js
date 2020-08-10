var vscope = 'global';
function fscope(){
	var vscope = 'local';
	vscope = 'local';
};
fscope();
alert(vscope);