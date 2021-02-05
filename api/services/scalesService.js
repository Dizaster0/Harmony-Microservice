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

const scales = {
    'major' : 'Major',
    'natural-minor' : 'Natural Minor',
    'harmonic-minor' : 'Harmonic Minor',
    'ascending-melodic-minor' : 'Ascending Melodic Minor',
    'descending-melodic-minor' : 'Descending Melodic Minor',
    'dorian' : 'Dorian',
    'phrygian' : 'Phrygian',
    'lydian' : 'Lydian',
    'mixolydian' : 'Mixolydian',
    'locrian' : 'Locrian',
};

const allScales = ['major', 'natural-minor', 'harmonic-minor', 'ascending-melodic-minor', 'descending-melodic-minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian'];

const errorMsg = 'Please enter a valid root note.'

exports.get_major_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.major}`,
            I: keysArray[root % 12],
            ii: keysArray[(root + 2) % 12],
            iii: keysArray[(root + 4) % 12],
            IV: keysArray[(root + 5) % 12],
            V: keysArray[(root + 7) % 12],
            vi: keysArray[(root + 9) % 12],
            vii_diminished: keysArray[(root + 11) % 12],
        });
    }
}

exports.get_natural_minor_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales["natural-minor"]}`,
            i: keysArray[root % 12],
            ii_diminished: keysArray[(root + 2) % 12],
            III: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            v: keysArray[(root + 7) % 12],
            VI: keysArray[(root + 8) % 12],
            VII: keysArray[(root + 10) % 12]
        })
    }
}

exports.get_harmonic_minor_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales["harmonic-minor"]}`,
            i: keysArray[root % 12],
            ii_diminished: keysArray[(root + 2) % 12],
            III: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            V: keysArray[(root + 7) % 12],
            VI: keysArray[(root + 8) % 12],
            VII_diminished: keysArray[(root + 11) % 12]
        })
    }
}

exports.get_ascending_melodic_minor_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales["ascending-melodic-minor"]}`,
            i: keysArray[root % 12],
            ii_diminished: keysArray[(root + 2) % 12],
            III_augmented: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            v: keysArray[(root + 7) % 12],
            VI_diminished: keysArray[(root + 9) % 12],
            VII_diminished: keysArray[(root + 11) % 12]
        })
    }
}

exports.get_descending_melodic_minor_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales["descending-melodic-minor"]}`,
            i: keysArray[root % 12],
            ii_diminished: keysArray[(root + 2) % 12],
            III: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            v: keysArray[(root + 7) % 12],
            VI: keysArray[(root + 9) % 12],
            VII: keysArray[(root + 11) % 12]
        })
    }
}

exports.get_dorian_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.dorian}`,
            i: keysArray[root % 12],
            ii: keysArray[(root + 2) % 12],
            III: keysArray[(root + 3) % 12],
            IV: keysArray[(root + 5) % 12],
            V: keysArray[(root + 7) % 12],
            vi_diminished: keysArray[(root + 9) % 12],
            VII: keysArray[(root + 10) % 12],
        })
    }
}

exports.get_phrygian_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.phrygian}`,
            i: keysArray[root % 12],
            II: keysArray[(root + 1) % 12],
            III: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            v_diminished: keysArray[(root + 7) % 12],
            VI: keysArray[(root + 8) % 12],
            vii: keysArray[(root + 10) % 12],
        })
    }
}

exports.get_lydian_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.lydian}`,
            I: keysArray[root % 12],
            II: keysArray[(root + 2) % 12],
            iii: keysArray[(root + 4) % 12],
            iv_diminished: keysArray[(root + 6) % 12],
            V: keysArray[(root + 7) % 12],
            vi: keysArray[(root + 9) % 12],
            vii: keysArray[(root + 11) % 12],
        })
    }
}

exports.get_mixolydian_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.mixolydian}`,
            I: keysArray[root % 12],
            ii: keysArray[(root + 2) % 12],
            iii_diminished: keysArray[(root + 4) % 12],
            IV: keysArray[(root + 5) % 12],
            v: keysArray[(root + 7) % 12],
            vi: keysArray[(root + 9) % 12],
            VII: keysArray[(root + 10) % 12],
        })
    }
}

exports.get_locrian_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} ${scales.locrian}`,
            i_diminished: keysArray[root % 12],
            II: keysArray[(root + 1) % 12],
            iii: keysArray[(root + 3) % 12],
            iv: keysArray[(root + 5) % 12],
            V: keysArray[(root + 6) % 12],
            VI: keysArray[(root + 8) % 12],
            vii: keysArray[(root + 10) % 12],
        })
    }
}

exports.get_all_scales = (req, res, next) => {
    res.status(200).json({
        scales: allScales
    })
}