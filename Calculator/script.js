document.addEventListener("DOMContentLoaded", (event) => {
	const calculator = document.querySelector(".calc-container");
	const keys = document.querySelector(".grid-keys");
	let result = ""; //Persistent, global variables
	let prevKey = "";
	let displayVal = "";
	let prevAction = "";
	let prevVal = "";
	let clear = true;
	keys.addEventListener("click", (e) => {
		if (e.target.matches("button")) {
			resetDepressed();
			const key = e.target;
			const action = key.dataset.action;
			const keyValue = key.innerHTML;
			const display = document.querySelector(".display-inner");

			if (!action) {
				//is number

				if (clear == true) {
					//If clear is true;
					displayVal = keyValue;
					prevAction = "";
					clear == false;
				} else if (!prevKey.classList.contains("key-operator")) {
					//If not clear and prev was num
					displayVal += keyValue;
				} else if (prevKey.classList.contains("key-operator")) {
					//If not clear and previous was operator

					prevVal = display.innerHTML; //Set prevVal to current screen val
					displayVal = keyValue; //Set display to current num
				} else if (prevKey.classList.contains("key-decimal")) {
					displayVal += keyValue;
					console.log("prevWasDecimal");
				}

				display.innerHTML = displayVal; //Update display
				prevKey = key;
				clear = false;
				document.querySelector(".key-clear").innerHTML = "C";
			} else if (key.classList.contains("key-operator")) {
				//Is a true operator

				if (clear == true) {
					//Clearstate, do effectivly nothing
					prevVal = "";
					prevAction = "";
				} else if (prevKey.classList.contains("key-operator")) {
					//if prevKey was true operator
					if (prevKey !== key) {
						//If action was different than current, reset prevAction
						key.classList.add("depressed");
						prevAction = action;
					} else if (prevKey == key) {
						key.classList.add("depressed");
						prevAction = action;
						prevVal = displayVal;
					}
				} else {
					//prevKey was number

					if (prevAction) {
						//Rolling calculation, perform calculation if a prevAction was set. i.e 5+10+
						result = calculate(prevVal, prevAction, displayVal);
						display.innerHTML = result;
						prevVal = result;
						key.classList.add("depressed");
					} else {
						// prev is num, but no rolling calc , i.e 5+
						prevAction = action; //Set action to op
						prevVal = display.innerHTML; //set prevVal to current Val
						key.classList.add("depressed");
					}
				}
				prevKey = key;
			} else if (key.classList.contains("key-equals")) {
				//user clicks equals, calculate, set display as result, set prevVal as result, clear action
				if (!prevKey) {
					prevKey = key;
				}
				if (prevAction && !prevKey.classList.contains("op")) {
					// action must be set, prevKey must not be operator. "5 + =" shouldn't calculate.
					result = calculate(prevVal, prevAction, displayVal);
					prevVal = result;
					displayVal = result;
					prevAction = "";
					display.innerHTML = result;
				} else if (prevKey.classList.contains("op")) {
					//prevents going 2+ = 2 (22 is displayed), then + doing a rolling calc of +2 by resetting prevVal and action.
					prevVal = display.innerHTML;
					prevAction = "";
				} else if (prevKey.classList.contains("key-decimal")) {
					//If previous button was decimal, add 0 to end
					displayVal += "0";
					result = calculate(prevVal, prevAction, displayVal);
					displayVal = result;
					prevVal = result;
					display.innerHTML = result;
				}
				prevKey = key;
			} else if (key.classList.contains("key-decimal")) {
				//User clicks decimal
				if (clear == true) {
					displayVal = "0.";
					display.innerHTML = displayVal;
					clear = false;
					prevKey = key;
				} else if (
					!prevKey.classList.contains("op") &&
					!displayVal.includes(".")
				) {
					//decimal has not been pressed for current value, previous was number
					displayVal += ".";
					display.innerHTML = displayVal;
				} else if (display.innerHTML == 0) {
					displayVal = "0.";
					display.innerHTML = displayVal;
				}
				prevKey = key;
			} else if (key.classList.contains("key-clear")) {
				displayVal = "";
				display.innerHTML = "0";
				key.innerHTML = "AC";
				prevVal = "";
				prevAction = "";
				prevKey = key;
				clear = true;
			}
		}
	});

	function calculate(num1, op, num2) {
		num1 = parseFloat(num1); //Num1 and Num2 come in as strings, convert to float
		num2 = parseFloat(num2);
		if (op == "add") {
			result = num1 + num2;
		}
		if (op == "subtract") {
			result = num1 - num2;
		}
		if (op == "mult") {
			result = num1 * num2;
		}
		if (op == "divide") {
			result = num1 / num2;
		}
		if ((num1 == 0 || num2 == 0) && op == "mult") {
			result = 0;
		}
		if ((num1 == 0 || num2 == 0) && op == "divide") {
			alert("Cannot divide by 0. Calculator Cleared.");
			displayVal = "";
			document.querySelector(".display-inner").innerHTML = "0";
			document.querySelector(".key-clear").innerHTML = "AC";
			prevVal = "";
			prevAction = "";
			prevKey = key;
			clear = true;
			result = "0";
		}
		return result;
	}

	function resetDepressed() {
		const keyArr = document.querySelectorAll("button");
		for (btn of keyArr) {
			//Resets depressed state for all btns by looping through query array
			if (btn.classList.contains("depressed")) {
				btn.classList.remove("depressed");
			}
		}
	}
	document.addEventListener("keydown", (e) => {
		const goodValues = [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"+",
			"-",
			"*",
			"/",
			"C",
			"c",
			".",
			"Enter",
		];
		let targetId = e.key;
		if (e.key == "Enter") {
			targetId = "=";
		}
		if (goodValues.includes(e.key)) {
			let targetBtn = document.getElementById(`${targetId}`);
			if (targetBtn) {
				targetBtn.click();
			}
		}
	});
});
