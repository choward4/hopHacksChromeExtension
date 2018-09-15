function newTabs() {
    document.addEventListener(click).write("hello world")
    console.log("log test")
}

/* Display current value of slider */
window.onload = function getValue() {
    var sliderVal = document.getElementById("numArticlesSlider")
    var valueOut = document.getElementById("currVal")
    valueOut.innerText = sliderVal.value

    sliderVal.oninput = function () {
        valueOut.innerText = this.value
    }

}
