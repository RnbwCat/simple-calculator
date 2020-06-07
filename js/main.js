function insertSym(num) { //для математических символов по событию onclick
	document.form.textview.value = //textview - имя поля ввода
	document.form.textview.value + num; //добавляет аргумент num к тому тексту, который уже содержится в форме
}

function makeClean() {
	document.form.textview.value = "";
}

function makeBack() {
	let back = document.form.textview.value;
	document.form.textview.value = back.substring(0, back.length-1); //возвращает подстроку без последнего символа
}

function calculate() {
	let calc = document.form.textview.value;
	if (calc) {
		document.form.textview.value = eval(calc);
	}
}