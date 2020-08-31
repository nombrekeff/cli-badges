const clc = require('cli-color');
const terminalLink = require('terminal-link');
const themes = require('./themes.js');

const formatters = {
    bold: (clc, s) => clc.bold(s),
    italic: (clc, s) => clc.italic(s),
    inverse: (clc, s) => clc.inverse(s),
    blink: (clc, s) => clc.blink(s),
    strike: (clc, s) => clc.strike(s),
    underline: (clc, s) => clc.underline(s),
};

const paddToFitWidth = (string, width) => {
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

const validXtermColor = (val) => val < 255 && val > 0;
const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number';
const colorExists = (val) => val in clc;
const bgColorExists = (val) => `bg${cappitalize(val)}` in clc;

const getBgColor = (clc, color) => {
    const isValidNumber = isNumber(color) && validXtermColor(color);
    const isValidString = isString(color) && bgColorExists(color);

    if (isValidNumber) return clc.bgXterm(color);
    if (isValidString) return clc[`bg${cappitalize(color)}`];

    return clc.bgBlue;
};

const getTextColor = (clc, color) => {
    const isValidNumber = isNumber(color) && validXtermColor(color);
    const isValidString = isString(color) && colorExists(color);

    if (isValidNumber) return clc.xterm(color);
    if (isValidString) return clc[color];

    return clc.blue;
};

const format = (clc, s, formatter) => {
    let f = formatters[formatter];
    return f ? f(clc, s) : clc(s);
};

const makeBadge = (label = '', message = '', {
    messageBg = 'blue',
    labelBg = 'blackBright',
    messageColor = 'white',
    labelColor = 'white',
    messageStyle = null,
    labelStyle = null,
    labelWidth = null,
    messageWidth = null,
    link = null,
    forceLink = false,
} = {}) => {
    const lblColorer = getTextColor(getBgColor(clc, labelBg), labelColor);
    const msgColorer = getTextColor(getBgColor(clc, messageBg), messageColor);

    const paddedLbl = paddToFitWidth(label, labelWidth);
    const paddedMsg = paddToFitWidth(message, messageWidth);

    const lblFormatted = format(lblColorer, paddedLbl, labelStyle);
    const msgFormatted = format(msgColorer, paddedMsg, messageStyle);

    const badge = `${label && lblFormatted}${message && msgFormatted} `;
    const makeLink = link && terminalLink.isSupported;

    return (makeLink || forceLink) ? terminalLink(badge, link) : badge;
};


const createThemeFn = (theme) => {
    const themeFn = (label, message, options) => {
        return makeBadge(label, message, {
            ...themes[theme],
            ...options,
        });
    };

    const themeFnInversed = (label, message, options) => {
        return makeBadge(label, message, {
            ...themes.inversed[theme],
            ...options,
        });
    };

    themeFn.inversed = themeFnInversed;
    return themeFn;
}

makeBadge.green = createThemeFn('green');
makeBadge.red = createThemeFn('red');
makeBadge.blue = createThemeFn('blue');
makeBadge.cyan = createThemeFn('cyan');
makeBadge.yellow = createThemeFn('yellow');
makeBadge.magenta = createThemeFn('magenta');

module.exports = {
    badge: makeBadge,
};
