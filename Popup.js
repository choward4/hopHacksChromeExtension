function newTabs() {
    chrome.tabs.getSelected(null, function (tab) {
        count = 0;
        var sitesVisited = "";
        var searchString = tab.title;
        var searchTerms = searchString.replace(" ", "+");
        numTabs = getValue();
        while(count < numTabs) {
            // searchTerm+-site%3Afoxnews.com+-site%3Acnn.com
            // "&btnI=I&as_sitesearch=twitter.com" old way of doing it
            var myURL = "https://www.google.com/webhp?#q=" + searchTerms + "&btnI=I&" + sitesVisited;
            chrome.tabs.create({ url: myURL });
            //find way to obtain site last visited
            site = "site.com"
            //subtract site visited
            site = "+-" + site
        }
        
    });
}


chrome.tabs.getSelected(null, function (tab) {
    console.log(tab.title);
});

/* Display current value of slider */
window.onload = getValue();

function getValue() {
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

