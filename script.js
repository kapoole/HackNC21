document.onkeydown = KeyCheck;   
document.onkeyup = LogKey;

var redhex = 255;
var greenhex = 255;
var bluehex = 255;
var keysPressed = 1;

function KeyCheck(event){
    var KeyID = event.keyCode;
    console.log(KeyID);

    switch(KeyID){
        case 65:
            //HTMLElement.stye="background-color: red";
            keysPressed++;
            redhex = redhex - (redhex + 255)/keysPressed;
            greenhex = greenhex - 255;
            bluehex = bluehex - 255;
            console.log(redhex);
            document.body.style.backgroundColor = "rgb(" +redhex+", " + greenhex + ", " + bluehex + ")";
            console.log(document.body.style.backgroundColor);
        break;

        case 66:
            keysPressed++;
            bluehex = bluehex + 255;
            document.body.style.backgroundColor = "rgb(" +redhex+", " + greenhex + ", " + bluehex + ")";
            console.log(document.body.style.backgroundColor);
        break;
        
     }
}

function LogKey(event){
    var KeyID = event.keyCode;
    console.log(KeyID);

    switch(KeyID){

        case 65:
            keysPressed--;
            redhex = redhex - 255;
            document.body.style.backgroundColor = "rgb(" +redhex+", " + greenhex + ", " + bluehex + ")";
            console.log(document.body.style.backgroundColor);

    }
}