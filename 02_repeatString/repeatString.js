const repeatString = function(string, num) {
    let newString = string;
    let i = 1;
    if (num === 0) {
        return '';
    }
    else if (num < 0) {
        return 'ERROR';
    }
    else {
        while (i < num) {
            newString = newString + string;
            i++;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
