document.onkeydown = KeyCheck;   
document.onkeyup = LogKey;

let root = document.documentElement;

var cPressed = false;
var csharpPressed = false;

var gPressed = false;
var gsharpPressed = false;
var aPressed = false;
var asharpPressed = false;
var bPressed = false;

function KeyCheck(event){
    event.preventDefault();
    var KeyID = event.keyCode;
    console.log(KeyID);

    console.log(document.getElementsByClassName("container"));

    switch(KeyID){
        case 90:
            if(!cPressed){
                root.style.setProperty('--c', 1 + "fr");
            }
            cPressed = true;
            break;

        case 83:
            if(!csharpPressed){
                root.style.setProperty("--csharp", 1 + "fr");
            }
            csharpPressed = true;
            break;

        case 66:
            if(!gPressed){
                root.style.setProperty("--g", 1 + "fr");
            }
            gPressed = true;
            break;

        case 72:
            if(!gsharpPressed){
                root.style.setProperty("--gsharp", 1 + "fr");
            }
            gsharpPressed = true;
            break;
        
        case 78:
            if(!aPressed){
                root.style.setProperty("--a", 1 + "fr");
            }
            aPressed = true;
            break;
        
        case 74:
            if(!asharpPressed){
                root.style.setProperty("--asharp", 1 + "fr");
            }
            asharpPressed = true;
            break;

        case 77:
            if(!bPressed){
                root.style.setProperty("--b", 1 + "fr");
            }
            bPressed = true;
            break;    
     }
}

function LogKey(event){
    var KeyID = event.keyCode;
    console.log(KeyID);

    switch(KeyID){
        case 90:
            root.style.setProperty("--c", 0 + "fr");
            cPressed = false;
            break;

        case 83:
            root.style.setProperty("--csharp", 0 + "fr");
            csharpPressed = false;
            break;
    }
}