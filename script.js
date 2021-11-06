document.onkeydown = KeyCheck;   
document.onkeyup = LogKey;

let root = document.documentElement;

var cPressed = false;
var csharpPressed = false;
var dPressed = false;
var dsharpPressed = false;
var ePressed = false;
var fPressed = false;
var fsharpPressed = false;

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
        case 88:
            if(!dPressed){
                root.style.setProperty("--d", 1 + "fr");
            }
            dPressed = true;
            break;

        case 68:
            if(!dsharpPressed){
                root.style.setProperty("--dsharp", 1 + "fr");
            }
            dsharpPressed = true;
            break;

        case 67:
            if(!ePressed){
                root.style.setProperty("--e", 1 + "fr");
            }
            ePressed = true;
            break;

        case 86:
            if(!fPressed){
                root.style.setProperty("--f", 1 + "fr");
            }
            fPressed = true;
            break;

        case 71:
            if(!fsharpPressed){
                root.style.setProperty("--fsharp", 1 + "fr");
            }
            fsharpPressed = true;
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

        case 88:
            root.style.setProperty("--d", 0 + "fr");
            dPressed = false;
            break;

        case 68:
            root.style.setProperty("--dsharp", 0 + "fr");
            dsharpPressed = false;
            break;

        case 67:
            root.style.setProperty("--e", 0 + "fr");
            ePressed = false;
            break;

        case 86:
            root.style.setProperty("--f", 0 + "fr");
            fPressed = false;
            break;

        case 71:
            root.style.setProperty("--fsharp", 0 + "fr");
            fPressed = false;
            break;
    }
}