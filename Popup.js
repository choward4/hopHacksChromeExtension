chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
});

function newTabs() {
    chrome.tabs.getSelected(null, function (tab) {
        var searchString = tab.title;
        var searchTerms = searchString.replace(" ", "+");
        var URL = "https://www.google.com/webhp?#q=" + searchTerms;
        regex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+.{1}([a-z]{3}))((\/\w+)*\/?)([\w\-\.]+[^#?\s]+)?(.*)?(#[\w\-]+)?$/
        var taburl = tab.url;

        //parse string

        var match = regex.exec(taburl)
        taburl = match[3];
        
        // gets rid of dots
        while(taburl.lastIndexOf('.') != taburl.indexOf('.')) {
            taburl = taburl.substring(taburl.indexOf('.') + 1, taburl.lastIndexOf('.') + 4);
        }

        
        if(dropDownValue() === "normal") {
            // TODO Remove youtube, too related to articles
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
            URL = URL + "+site%3Awikipedia.org&btnI=I"
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

function getRidOfDots(taburl, tld) {
    while(taburl.search(".") != taburl.search(tld)) {
        taburl = taburl.substring(taburl.search(".") + 1, taburl.search(tld) + 5);
    }
    return taburl;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tabBtn').addEventListener('click', newTabs);
});

