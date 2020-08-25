const clc = require('cli-color');
const terminalLink = require('terminal-link');

const padd = (string, width) => {
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

const getBg = (clc, color) => {
    const isString = typeof color === 'string';
    const isNumber = typeof color === 'number';

    if (isString) return clc[`bg${cappitalize(color)}`];
    if (isNumber) return clc.bgXterm(color);

    return clc.bgBlue;
};

const getLabel = (clc, color) => {
    const isString = typeof color === 'string';
    const isNumber = typeof color === 'number';

    if (isString) return clc[color];
    if (isNumber) return clc.xterm(color);

    return clc.blue;
};

const formatters = {
    bold: (clc, s) => clc.bold(s),
    italic: (clc, s) => clc.italic(s),
    inverse: (clc, s) => clc.inverse(s),
    blink: (clc, s) => clc.blink(s),
    strike: (clc, s) => clc.strike(s),
    underline: (clc, s) => clc.underline(s),
};

const format = (clc, s, formatter) => {
    let f = formatters[formatter];
    return f ? f(clc, s) : clc(s);
};

module.exports = {
    badge(label = '', message = '', {
        messageBg = 'blue',
        labelBg = 'blackBright',
        messageColor = 'white',
        labelColor = 'white',
        messageStyle = null,
        labelStyle = null,
        labelWidth = null,
        messageWidth = null,
        link = null,
    } = {}) {
        const lblColorer = getLabel(getBg(clc, labelBg), labelColor);
        const msgColorer = getLabel(getBg(clc, messageBg), messageColor);

        const lblFormatted = format(lblColorer, padd(label, labelWidth), labelStyle);
        const msgFormatted = format(msgColorer, padd(message, messageWidth), messageStyle);

        const badge = `${label && lblFormatted}${message && msgFormatted} `;
        const makeLink = link && terminalLink.isSupported;

        return makeLink ? terminalLink(badge, link) : badge;
    },
};
