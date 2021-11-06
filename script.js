document.onkeydown = KeyCheck;   

var redhex = 0;
var bluehex = 0;
var greenhex = 0;
var keysPressed = 0;

function KeyCheck(event)
{
    var KeyID = event.keyCode;
    console.log(KeyID);

    switch(KeyID)
    {
        case 65:
            //HTMLElement.stye="background-color: red";
            keysPressed++;
            redhex = redhex + 255;
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