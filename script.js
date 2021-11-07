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
            document.getElementById("cNote").innerHTML = "C"
            break;

        case 83:
            if(!csharpPressed){
                root.style.setProperty("--csharp", 1 + "fr");
            }
            csharpPressed = true;
            document.getElementById("csharpNote").innerHTML = "C<sup>#</sup>"
            break;

        case 66:
            if(!gPressed){
                root.style.setProperty("--g", 1 + "fr");
            }
            gPressed = true;
            document.getElementById("gNote").innerHTML = "G"
            break;

        case 72:
            if(!gsharpPressed){
                root.style.setProperty("--gsharp", 1 + "fr");
            }
            gsharpPressed = true;
            document.getElementById("gsharpNote").innerHTML = "G<sup>#</sup>"
            break;
        
        case 78:
            if(!aPressed){
                root.style.setProperty("--a", 1 + "fr");
            }
            aPressed = true;
            document.getElementById("aNote").innerHTML = "A"
            break;
        case 88:
            if(!dPressed){
                root.style.setProperty("--d", 1 + "fr");
            }
            dPressed = true;
            document.getElementById("dNote").innerHTML = "D"
            break;

        case 68:
            if(!dsharpPressed){
                root.style.setProperty("--dsharp", 1 + "fr");
            }
            dsharpPressed = true;
            document.getElementById("dsharpNote").innerHTML = "D<sup>#</sup>"
            break;

        case 67:
            if(!ePressed){
                root.style.setProperty("--e", 1 + "fr");
            }
            ePressed = true;
            document.getElementById("eNote").innerHTML = "E"
            break;

        case 86:
            if(!fPressed){
                root.style.setProperty("--f", 1 + "fr");
            }
            fPressed = true;
            document.getElementById("fNote").innerHTML = "F"
            break;

        case 71:
            if(!fsharpPressed){
                root.style.setProperty("--fsharp", 1 + "fr");
            }
            fsharpPressed = true;
            document.getElementById("fsharpNote").innerHTML = "F<sup>#</sup>"
            break;
            
        
        case 74:
            if(!asharpPressed){
                root.style.setProperty("--asharp", 1 + "fr");
            }
            asharpPressed = true;
            document.getElementById("asharpNote").innerHTML = "A<sup>#</sup>"
            break;

        case 77:
            if(!bPressed){
                root.style.setProperty("--b", 1 + "fr");
            }
            bPressed = true;
            document.getElementById("bNote").innerHTML = "B"
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
            document.getElementById("cNote").innerHTML = "";
            break;

        case 83:
            root.style.setProperty("--csharp", 0 + "fr");
            csharpPressed = false;
            document.getElementById("csharpNote").innerHTML = "";
            break;

        case 88:
            root.style.setProperty("--d", 0 + "fr");
            dPressed = false;
            document.getElementById("dNote").innerHTML = "";
            break;

        case 68:
            root.style.setProperty("--dsharp", 0 + "fr");
            dsharpPressed = false;
            document.getElementById("dsharpNote").innerHTML = "";
            break;

        case 67:
            root.style.setProperty("--e", 0 + "fr");
            ePressed = false;
            document.getElementById("eNote").innerHTML = "";
            break;

        case 86:
            root.style.setProperty("--f", 0 + "fr");
            fPressed = false;
            document.getElementById("fNote").innerHTML = "";
            break;

        case 71:
            root.style.setProperty("--fsharp", 0 + "fr");
            fsharpPressed = false;
            document.getElementById("fsharpNote").innerHTML = "";
            break;

        case 66:
            root.style.setProperty("--g", 0 + "fr");
            gPressed = false;
            document.getElementById("gNote").innerHTML = "";
            break;
        
        case 72:
            root.style.setProperty("--gsharp", 0 + "fr");
            gsharpPressed = false;
            document.getElementById("gsharpNote").innerHTML = "";
            break;

        case 78:
            root.style.setProperty("--a", 0 + "fr");
            aPressed = false;
            document.getElementById("aNote").innerHTML = "";
            break;

        case 74:
            root.style.setProperty("--asharp", 0 + "fr");
            asharpPressed = false;
            document.getElementById("asharpNote").innerHTML = "";
            break;

        case 77:
            root.style.setProperty("--b", 0 + "fr");
            bPressed = false;
            document.getElementById("bNote").innerHTML = "";
            break;

    }
}