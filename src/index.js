module.exports = function check(str, bracketsConfig) {
    let brArr = str.split('');
    for (let c = 0; c < str.length; c++) {
        for (let i = 0; i < brArr.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (brArr[i] === bracketsConfig[j][0] && brArr[i + 1] === bracketsConfig[j][1])
                    brArr.splice(i, 2)
                if (brArr.length === 0) break
            }
        }
    }
    if (brArr.length === 0) {
        return true;
    }
    else {
        return false;
    }
}
