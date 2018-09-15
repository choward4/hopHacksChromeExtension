chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
});

function newTabs() {
    chrome.tabs.getSelected(null, function (tab) {
        var searchString = tab.title;
        var searchTerms = searchString.replace(" ", "+");
        var URL = "https://www.google.com/webhp?#q=" + searchTerms;
        if(dropDownValue() === "normal") {
            // parse current website title
            var taburl = "";
            taburl = tab.url;
            index = 0;
            // TODO Remove youtube, too related to thing
            if(taburl.search(".com/") != -1) {
                taburl = taburl.slice(0, taburl.search(".com/") + 4);
            } else if(taburl.search(".net/") != -1) {
                taburl = taburl.slice(0, taburl.search(".net/") + 4);
            } else if(taburl.search(".edu/") != -1) {
                taburl = taburl.slice(0, taburl.search(".edu/") + 4);
            } else if(taburl.search(".gov/") != -1) {
                taburl = taburl.slice(0, taburl.search(".gov/") + 4);
            } else if(taburl.search(".org/") != -1) {
                taburl = taburl.slice(0, taburl.search(".org/") + 4);
            } else {
                taburl = "lol";
            }
            
            URL += "+-site%3A" + taburl + "&btnI=I";
            chrome.tabs.create({ url: URL });
        } else if (dropDownValue() === "political") {
            rightURL = URL + "+site%3Afoxnews.com+OR+site%3Adailycaller.com+OR+site%3Aijr.com&btnI=I"
            leftURL = URL + "+site%3Acnn.com+OR+site%3Acnbc.com+OR+site%3Aabc.go.com&btnI=I"
            middleURL = URL + "+site%3Aapnews.com+OR+site%3Abbc.com+OR+site%3Anpr.org&btnI=I"
            chrome.tabs.create({ url: rightURL });
            chrome.tabs.create({ url: leftURL });
            chrome.tabs.create({ url: middleURL });
        } else if (dropDownValue() === "wikipedia") {
            URL = URL + "+site%3A+wikipedia.com&btnI=I"
            chrome.tabs.create({ url: URL });
        }
        

       
    });
}

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

