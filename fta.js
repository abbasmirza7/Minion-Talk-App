var callURL = "https://api.funtranslations.com/translate/minion.json?text="
var inputText = document.querySelector("#input-text");
var button = document.querySelector("#btn");
var outputText = document.querySelector("#output-text");


function createURL(ourText) {
    return callURL + ourText;
    console.log(callURL+ourText)
}

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Oops! Something wrong with the Server. Please try again.")
}

function clickHandler() {
    var ourText = inputText.value;
    fetch(createURL(ourText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}

button.addEventListener("click",clickHandler)
