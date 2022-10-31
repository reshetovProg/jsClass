
let form = document.forms;
let login = form[0].elements.login;
let password = form[0].elements.password;
let remember = form[0].elements.checkbox;
let userLogin = form[1].elements.login;
let userPassword = form[1].elements.password;
let userPassword2 = form[1].elements.password2;



let userPass = sessionStorage.getItem('userPass');
let userLog = sessionStorage.getItem('userLog');



function signInOn() {
	form[1].classList.add('active');
	form[0].classList.remove('active');
}
function logInOn() {
	form[0].classList.add('active');
	form[1].classList.remove('active');
}


function registration() {
	if ((userPassword.value == userPassword2.value) && userPassword.value != undefined) {
		userPass = userPassword.value;
		userLog = userLogin.value;
		sessionStorage.setItem('userPass', userPass);
		sessionStorage.setItem('userLog', userLog);
		logInOn();
	}
	else {
		console.log("234");
		signInOn();
	}

}

function onClick() {
	if (userPass == password.value &&
		userLog == login.value) {
		if (remember.checked) {
			alert(`${userLog} is remember`);
		}
		else {
			alert("correct");
		}
	}
	else alert("incorrect");

}



console.log(userPass, userLog);
