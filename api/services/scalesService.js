const keysMap = new Map([
    ['C', 0],
    ['C#/Dflat' , 1],
    ['D', 2],
    ['D#/Eflat' , 3],
    ['E' , 4],
    ['F' , 5],
    ['F#/Gflat' , 6],
    ['G' , 7],
    ['G#/Aflat' , 8],
    ['A' , 9],
    ['A#/Bflat' , 10],
    ['B' , 11]
]);

const keysArray = [
    'C',
    'C#/Dflat',
    'D',
    'D#/Eflat',
    'E',
    'F',
    'F#/Gflat',
    'G',
    'G#/Aflat',
    'A',
    'A#/Bflat',
    'B'
];

const scales = {
    'major' : 'Major',
    'natural-minor' : 'Natural Minor',
    'harmonic-minor' : 'Harmonic Minor',
    'dorian' : 'Dorian',
    'phrygian' : 'Phrygian',
    'lydian' : 'Lydian',
    'mixolydian' : 'Mixolydian',
    'locrian' : 'Locrian',
    'whole-tone' : 'Whole Tone'
};


exports.get_major_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.major}`,
            tonic: keysArray[root % 12],
            second: keysArray[(root + 2) % 12],
            third: keysArray[(root + 4) % 12],
            fourth: keysArray[(root + 5) % 12],
            fifth: keysArray[(root + 7) % 12],
            sixth: keysArray[(root + 9) % 12],
            seventh: keysArray[(root + 11) % 12],
    });
}