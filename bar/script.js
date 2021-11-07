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
var colors = [[255,0,0], [255,79,0], [255,119,0], [255,158,0], [255,237,0], [128,209,0], [0,209,128], [0,237,255], 
        [0,154,213], [0,71,171], [85,47,114], [128,36,86]];
var cssClasses = ['c4', 'c4 sharp', 'd4', 'd4 sharp', 'e4', 'f4', 'f4 sharp', 'g4', 'g4 sharp', 'a4', 'a4 sharp', 'b4', 'c5', 'c5 sharp', 'd5', 'd5 sharp', 
        'e5', 'f5', 'f5 sharp', 'g5', 'g5 sharp', 'a5', 'a5 sharp', 'b5', 'c6', 'c6 sharp', 'd6', 'd6 sharp', 'e6'];

function ToggleKey(event) {
    event.preventDefault();
    // if not 'keydown', should be 'keyup'
    let isOn = (event.type == 'keydown');
    // k is piano index
    let k = keyCodes.indexOf(event.keyCode);
    if (k == -1 || keyIsPressed[k] == isOn) { return; }
    keyIsPressed[k] = isOn;
    if (isOn) {new Audio("../music notes/" + notesMP3s[k]).play()}
    let note = document.getElementById('chord');
    note.className = 'quarter-note ' + cssClasses[k];
    document.getElementById('notes').innerHTML = (isOn ? notes[k % numNotesOctave] : "");
}

/**
 * 
 * @param { [r,g,b] } c1 color 1
 * @param { [r,g,b] } c2 color 2
 * @param { number } t value between 0 and 1 representing point in blend between colors 1 and 2
 * @returns 
 */
function blend(c1, c2, t=0.5) {
    return [Math.sqrt((1 - t) * c1[0]^2 + t * c2[0]^2), Math.sqrt((1 - t) * c1[1]^2 + t * c2[1]^2), Math.sqrt((1 - t) * c1[2]^2 + t * c2[2]^2)];
}