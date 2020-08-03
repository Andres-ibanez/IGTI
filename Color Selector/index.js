const redInput = document.querySelector("#red");
const valueRedInput = document.querySelector("#redValue");

const greenInput = document.querySelector("#green");
const valueGreenInput = document.querySelector("#greenValue");

const blueInput = document.querySelector("#blue");
const valueBlueInput = document.querySelector("#blueValue");

const containerColor = document.querySelector(".containerColor")


const changeValue = (e) => {
    e.target.nextElementSibling.value = e.target.value;
    containerColor.style.backgroundColor = `rgb(${valueRedInput.value}, ${valueGreenInput.value}, ${valueBlueInput.value})`
}

redInput.addEventListener("change", changeValue);
greenInput.addEventListener("change", changeValue);
blueInput.addEventListener("change", changeValue);
