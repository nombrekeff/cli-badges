const clc = require('cli-color');

const paddToFitWidth = (string = '', width) => {
    const sLength = string.length;

    if (!width) width = sLength + 2; // one space on each side

    const halfWith = Math.ceil((width - sLength) / 2);
    const paddStr = ' '.repeat(halfWith);

    return paddStr + string + paddStr;
};

const cappitalize = (string) => {
    return string.charAt(0).toUpperCase()
        + string.substring(1, string.length);
};

const formatters = {
    bold: (clc, s) => clc.bold(s),
    italic: (clc, s) => clc.italic(s),
    inverse: (clc, s) => clc.inverse(s),
    blink: (clc, s) => clc.blink(s),
    strike: (clc, s) => clc.strike(s),
    underline: (clc, s) => clc.underline(s),
};
const validXtermColor = (val) => (val < 255 && val > 0);
const isString = (val) => typeof val === 'string';
const colorExists = (val) => val in clc;
const bgColorExists = (val) => `bg${cappitalize(val)}` in clc;

const getBgColor = (clc, color) => {
    const isValidNumber = validXtermColor(color);
    const isValidString = isString(color) && bgColorExists(color);
    if (isValidNumber) return clc.bgXterm(color);
    if (isValidString) return clc[`bg${cappitalize(color)}`];

    return clc.bgBlue;
};

const getTextColor = (clc, color) => {
    const isValidNumber = validXtermColor(color);
    const isValidString = isString(color) && colorExists(color);

    if (isValidNumber) return clc.xterm(color);
    if (isValidString) return clc[color];

    return clc.white;
};

const format = (clc, string, formatterName) => {
    const formatter = formatters[formatterName];
    return formatter ? formatter(clc, string) : clc(string);
};

module.exports = {
    paddToFitWidth, 
    cappitalize,
    getBgColor,
    getTextColor,
    format,
    validXtermColor,
    isString,
    colorExists,
    bgColorExists,
}