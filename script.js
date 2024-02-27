const fontSlider = document.getElementById("fontSlider");
const output = document.getElementById("output");
const changeText = document.getElementById("changeText");
fontSlider.oninput = function () {
    const fontSize = this.value;
    output.textContent = `Размер шрифта: ${fontSize}px`;
    changeText.style.fontSize = `${fontSize}px`;};