(() => {

	let input = document.getElementById("password");
	let paragraph = document.getElementById("paragraph");

	input.addEventListener("keydown", () => {
		let password = input.value;
		if (password.length < 10) {
			input.style.backgroundColor = "red";
			paragraph.textContent = "bad cat";
		} else if (password.length < 18) {
			input.style.backgroundColor = "orange";
			paragraph.textContent = "good cat"
		} else {
			input.style.backgroundColor = "green";
			paragraph.textContent = "Purrfect!"
		}

		
	})

})();