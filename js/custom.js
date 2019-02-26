new mdc.ripple.MDCRipple.attachTo(document.querySelector('.b1'));
new mdc.ripple.MDCRipple.attachTo(document.querySelector('.b2'));



// login
document.querySelector('#btn').addEventListener('click', function(evt){
	const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.d1'))
	event.preventDefault(evt);
	dialog.lastFocusedTarget = evt.target;
	dialog.open();
	console.log('accepted');
});

function getName(){
	var a = document.getElementById('UserName').value;
	var b = document.getElementById('password').value;
	console.log("Name =>" , a);
	console.log("Password =>" , b);
}
// register

document.querySelector('#bttn').addEventListener('click', function(evt1){
	const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.d2'))
	event.preventDefault(evt1);
	dialog.lastFocusedTarget = evt1.target;
	dialog.open();
	console.log('accepted');
});

function register(){
	var a = document.getElementById('fname').value;
	var b = document.getElementById('email').value;
	var c = document.getElementById('mobile').value;
	var d = document.getElementById('password1').value;
	var e = document.getElementById('re-password').value;
	console.log("FullName =>" , a);
	console.log("Email =>" , b);
	console.log("Mobile No. =>" , c);
	console.log("Password =>" , d);
	console.log("Re- =>" , e);
}
