chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
});

function newTabs() {
    chrome.tabs.getSelected(null, function (tab) {
        var searchString = tab.title;
        var searchTerms = searchString.replace(" ", "+");
        var URL = "https://www.google.com/webhp?#q=" + searchTerms;
        if(dropDownValue() === "normal") {
            // parse current webist title
            
            URL += "&btnI=I"
            chrome.tabs.create({ url: URL });
        } else if (dropDownValue() === "political") {
            foxURL = URL + "+site%3A+foxnews.com&btnI=I"
            cnnURL = URL + "+site%3A+CNN.com&btnI=I"
            apURL = URL + "+site%3A+apnews.com&btnI=I"
            bbcURL = URL + "+site%3A+bbc.com&btnI=I"
            chrome.tabs.create({ url: foxURL });
            chrome.tabs.create({ url: cnnURL });
            chrome.tabs.create({ url: apURL });
            chrome.tabs.create({ url: bbcURL })
        } else if (dropDownValue() === "wikipedia") {
            URL = URL + "+site%3A+wikipedia.com&btnI=I"
            chrome.tabs.create({ url: URL });
        }
        

       
    });
}

chrome.tabs.getSelected(null, function (tab) {
    console.log(tab.title);
});

/* Display current value of slider 
window.onload = function getValue(){
    var sliderVal = document.getElementById("numArticlesSlider")
    var valueOut = document.getElementById("currVal")
    valueOut.innerText = sliderVal.value

    sliderVal.oninput = function () {
        valueOut.innerText = this.value
    }

}
*/


function dropDownValue() {
    var dropDown = document.getElementById("main-dropdown");
    return dropDown.value;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tabBtn').addEventListener('click', newTabs);
});

