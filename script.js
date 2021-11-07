document.addEventListener('keydown', ToggleKey, false);
document.addEventListener('keyup', ToggleKey, false);

let root = document.documentElement;

// keyCode for every key being used, in order of notes C, C#, ...
var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77];
var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var notesID = ["cNote", "csharpNote", "dNote", "dsharpNote", "eNote", "fNote", "fsharpNote", "gNote", "gsharpNote", "aNote", "asharpNote", "bNote"];
// boolean array
var keyIsPressed = Array(keyCodes.length).fill(false);
var cssProperties = ['--c', '--csharp', '--d', '--dsharp', '--e', '--f', '--fsharp', '--g', '--gsharp', '--a', '--asharp', '--b'];
// let middleRowKeyCodes = [83, 68, 71, 72, 74, 74];
// let bottomRowKeyCodes = [90, 88, 67, 86, 66, 78, 77];

function ToggleKey(event) {
    event.preventDefault();
    // if not 'keydown', should be 'keyup'
    let isOn = (event.type == 'keydown');
    // k is piano index
    let k = keyCodes.indexOf(event.keyCode);
    if (k == -1 || keyIsPressed[k] == isOn) { return; }
    keyIsPressed[k] = isOn;
    root.style.setProperty(cssProperties[k], (isOn ? 1 : 0) + 'fr');
    if(isOn){
        document.getElementById(notesID[k]).innerHTML = notes[k];
    }else{
        document.getElementById(notesID[k]).innerHTML = "";
    }
    console.log(cssProperties[k] + ' ' + event.keyCode + ' ' + event.type);
}