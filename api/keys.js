const keysMap = new Map([
    ['C', 0],
    ['Csharp-Dflat' , 1],
    ['D', 2],
    ['Dsharp-Eflat' , 3],
    ['E' , 4],
    ['F' , 5],
    ['Fsharp-Gflat' , 6],
    ['G' , 7],
    ['Gsharp-Aflat' , 8],
    ['A' , 9],
    ['Asharp-Bflat' , 10],
    ['B' , 11]
]);

const keysArray = [
    'C',
    'Csharp-Dflat',
    'D',
    'Dsharp-Eflat',
    'E',
    'F',
    'Fsharp-Gflat',
    'G',
    'Gsharp-Aflat',
    'A',
    'Asharp-Bflat',
    'B'
];

const scales = ['major', 'natural-minor', 'harmonic-minor', 'ascending-melodic-minor', 'descending-melodic-minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian'];

const chords = ['major', 'minor', 'major7', 'minor7', 'dominant7', 'augmented', 'sus-4', 'sus-2', 'diminished'];

const errorMsg = 'Please enter a valid root note.'


exports.modules = {keysMap, keysArray, chords, scales, errorMsg};

