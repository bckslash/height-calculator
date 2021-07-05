const btn = document.getElementById("btn");
const btn_close = document.getElementById("close-btn");
const alert_card = document.getElementById("alert-card");

btn.addEventListener("click", () => {
	const value = document.getElementById("box-input").value;

	if (value && value > 0) {
		if (value == 151) {
			document.getElementById("output").innerText = `Your height is ${value} cm restt2`;
		}else if(value == 24){
			document.getElementById("output").innerText = `Nice cock bro 👍`;
		}else{
            document.getElementById("output").innerText = `Your height is ${value} cm`;
        }
		alert_card.classList.add("active");
	} else if (value < 0) {
		document.getElementById("output").innerText = `Bad input!`;
		alert_card.classList.add("active");
	}
});

btn_close.addEventListener("click", () => {
	alert_card.classList.remove("active");
});
