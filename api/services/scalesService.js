const keys = require('../keys');
const keysMap = keys.modules.keysMap;
const keysArray = keys.modules.keysArray;
const errorMsg = keys.modules.errorMsg;
const scales = keys.modules.scales;

exports.get_major_scale = (req, res, next) => {
    let root = keysMap.get(req.params.root);
    if (root == undefined) {
        res.status(400).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            scale: `${keysArray[root % 12]} Major`,
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
            scale: `${keysArray[root % 12]} Natural Minor`,
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
            scale: `${keysArray[root % 12]} Harmonic Minor`,
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
            scale: `${keysArray[root % 12]} Ascending Melodic Minor`,
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
            scale: `${keysArray[root % 12]} Descending Melodic Minor`,
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
            scale: `${keysArray[root % 12]} Dorian`,
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
            scale: `${keysArray[root % 12]} Phrygian`,
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
            scale: `${keysArray[root % 12]} Lydian`,
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
            scale: `${keysArray[root % 12]} Mixolydian`,
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
            scale: `${keysArray[root % 12]} Locrian`,
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
        scales: scales
    });
}