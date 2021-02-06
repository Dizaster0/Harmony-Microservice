const keys = require('../keys');
const keysMap = keys.modules.keysMap;
const keysArray = keys.modules.keysArray;
const errorMsg = keys.modules.errorMsg;
const chords = keys.modules.chords;

exports.get_major_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Major`,
            root: keysArray[root % 12],
            third: keysArray[(root + 4) % 12],
            fifth: keysArray[(root + 7) % 12]
        });
    }
}

exports.get_major_seventh_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Major Seventh`,
            root: keysArray[root % 12],
            third: keysArray[(root + 4) % 12],
            fifth: keysArray[(root + 7) % 12],
            seventh: keysArray[(root + 11) % 12]
        });
    }
}

exports.get_minor_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Minor`,
            root: keysArray[root % 12],
            third: keysArray[(root + 3) % 12],
            fifth: keysArray[(root + 7) % 12]
        });
    }
}

exports.get_minor_seventh_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Minor Seventh`,
            root: keysArray[root % 12],
            third: keysArray[(root + 3) % 12],
            fifth: keysArray[(root + 7) % 12],
            seventh: keysArray[(root + 10) % 12]
        });
    }
}

exports.get_dominant_seventh_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Dominant Seventh`,
            root: keysArray[root % 12],
            third: keysArray[(root + 4) % 12],
            fifth: keysArray[(root + 7) % 12],
            seventh: keysArray[(root + 10) % 12]
        })
    }
}

exports.get_diminished_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Diminished`,
            root: keysArray[root % 12],
            third: keysArray[(root + 3) % 12],
            fifth: keysArray[(root + 6) % 12]
        });
    }
}

exports.get_augmented_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Augmented`,
            root: keysArray[root % 12],
            third: keysArray[(root + 3) % 12],
            fifth: keysArray[(root + 8) % 12]
        });
    }
}

exports.get_suspended_fourth_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Sus4`,
            root: keysArray[root % 12],
            third: keysArray[(root + 5) % 12],
            fifth: keysArray[(root + 7) % 12]
        });
    }
}

exports.get_suspended_second_chord = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        });
    } else {
        res.status(200).json({
            chord: `${keysArray[root]} Sus2`,
            root: keysArray[root % 12],
            third: keysArray[(root + 2) % 12],
            fifth: keysArray[(root + 7) % 12]
        });    
    }
}

exports.get_all_chords = (req, res, next) => {
    console.log(chords);
    res.status(200).json({
        chords: chords
    })
}