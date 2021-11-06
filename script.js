document.onkeydown = KeyCheck;   
document.onkeyup = LogKey;

let root = document.documentElement;

var cPressed = false;
var csharpPressed = false;

function KeyCheck(event){
    event.preventDefault();
    var KeyID = event.keyCode;
    console.log(KeyID);

    console.log(document.getElementsByClassName("container"));

    switch(KeyID){
        case 90:
            if(!cPressed){
                console.log("First Press");
                //document.getElementsByClassName("container").gridTemplateColumns = "1fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr";
                root.style.setProperty('--c', 1 + "fr");
                
            }
            console.log(document.getElementsByClassName("container"));
            //document.body.style.backgroundColor = "rgb(255,0,0)";
            cPressed = true;
            break;

        case 83:
            if(!csharpPressed){
                root.style.setProperty("--csharp", 1 + "fr");
            }
            csharpPressed = true;
            break;

        case 66:
            document.body.style.backgroundColor = "rgb(0,0,255)";
            console.log(document.body.style.backgroundColor);
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