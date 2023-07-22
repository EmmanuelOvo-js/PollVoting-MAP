const poll = new Map();

poll.set("React", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

function submitForm(e) {
	e.preventDefault();

	const selectedOption = document.querySelector(
		"input[name='poll-option']:checked"
	);
	// console.log(selectedOption.value)

	if (!selectedOption) {
		alert("Please select an option");
		return;
	}

	//Geting the Map value which is set to 0
	let voteCount = poll.get(selectedOption.value);
	poll.set(selectedOption.value, voteCount + 1);

	displayResult();

	// Disable form after submit
	document.getElementById("poll-form")
    .querySelectorAll("input").forEach((el) => el.setAttribute('disabled', true))
}

function displayResult() {
	const result = document.getElementById("results");
	result.innerHTML = "";

	//Looping through the key and the value of the Map which is the poll variable
	for (let [option, vote] of poll) {
		const optionEl = document.createElement("div");
		optionEl.classList.add(
			"border-bottom",
			"p-2",
			"d-flex",
			"justify-content-between"
		);
		optionEl.innerHTML = `${option}: ${vote} votes`;

		//add to dom
		result.appendChild(optionEl);
	}
}

document.getElementById("poll-form").addEventListener("submit", submitForm);
