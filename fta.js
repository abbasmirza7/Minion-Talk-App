var callURL = "https://myapi.abbasmirza1.repl.co/democall.json?name=";

var inputText = document.quesrySelector("#input-text");
var button = document.querySelector("#btn");
var outputText = document.querySelector("output-text");


function createURL(ourText) {
    return callURL + ourText;
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
            translatedText = json.Contents.Your-Name;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
}

button.addEventListner("click",clickHandler)
