document.addEventListener('keydown', ToggleKey, false);
document.addEventListener('keyup', ToggleKey, false);

let root = document.documentElement;

// keyCode for every key being used, in order of notes C, C#, ...
var numNotesOctave = 12;
var keyCodes = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77, 81, 50, 87, 51, 69, 82, 53, 84, 54, 89, 55, 85, 73, 57, 79, 48, 80];
var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var notesID = ["cNote", "csharpNote", "dNote", "dsharpNote", "eNote", "fNote", "fsharpNote", "gNote", "gsharpNote", "aNote", "asharpNote", "bNote"];
var notesMP3s = ["Piano.C4.mp3", "Piano.CSharp4.mp3", "Piano.D4.mp3", "Piano.DSharp4.mp3", "Piano.E4.mp3", "Piano.F4.mp3", "Piano.FSharp4.mp3",
        "Piano.G4.mp3", "Piano.GSharp4.mp3", "Piano.A4.mp3", "Piano.ASharp4.mp3", "Piano.B4.mp3", "Piano.C5.mp3", "Piano.CSharp5.mp3", "Piano.D5.mp3", 
        "Piano.DSharp5.mp3", "Piano.E5.mp3", "Piano.F5.mp3", "Piano.FSharp5.mp3", "Piano.G5.mp3", "Piano.GSharp5.mp3", "Piano.A5.mp3", "Piano.ASharp5.mp3", 
        "Piano.B5.mp3", "Piano.C6.mp3", "Piano.CSharp6.mp3", "Piano.D6.mp3", "Piano.DSharp6.mp3", "Piano.E6.mp3"];
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
    root.style.setProperty(cssProperties[k % numNotesOctave], (isOn ? 1 : 0) + 'fr');
    document.getElementById(notesID[k % numNotesOctave]).innerHTML = (isOn ? notes[k % numNotesOctave] : "");
    if (isOn) {new Audio("music notes/" + notesMP3s[k]).play()}
    console.log(cssProperties[k] + ' ' + event.keyCode + ' ' + event.type);
}