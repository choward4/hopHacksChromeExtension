function newTabs() {
    chrome.tabs.getSelected(null, function (tab) {
        var searchString = tab.title    
        var searchTerms = searchString.replace(" ", "+")
        var myURL = "https://www.google.com/webhp?#q=" + searchTerms + "&btnI=I&as_sitesearch=twitter.com"
        var something = chrome.tabs.create({ url: myURL }); 
        chrome.tabs.create({ url: something }); 
    });
}


chrome.tabs.getSelected(null, function (tab) {
    console.log(tab.title);
});

/* Display current value of slider */
window.onload = function getValue() {
    var sliderVal = document.getElementById("numArticlesSlider")
    var valueOut = document.getElementById("currVal")
    valueOut.innerText = sliderVal.value

    sliderVal.oninput = function () {
        valueOut.innerText = this.value
    }

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tabBtn').addEventListener('click', newTabs);
});

