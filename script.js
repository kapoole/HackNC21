document.onkeydown = KeyCheck;   
document.onkeyup = LogKey;

var cPressed = false;

function KeyCheck(event){
    event.preventDefault();
    var KeyID = event.keyCode;
    console.log(KeyID);

    console.log(document.getElementsByClassName("container"));

    switch(KeyID){
        case 90:
            if(!cPressed){
                console.log("First Press");
                document.getElementsByClassName("container").gridTemplateColumns = "1fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr 0fr";
            }
            console.log(document.getElementsByClassName("container"));
            //document.body.style.backgroundColor = "rgb(255,0,0)";
            cPressed = true;
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
        case 65:
            document.body.style.backgroundColor = "white";
            console.log(document.body.style.backgroundColor);
            break;

        case 66:
            document.body.style.backgroundColor = "white";
            break;
    }
}