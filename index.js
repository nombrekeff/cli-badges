const clc = require('cli-color');
const terminalLink = require('terminal-link');

const padd = (s = '', width) => {
    if (!width) {
        width = s.length + 2;
    }

    const halfWith = Math.ceil((width - s.length) / 2);
    const paddStr = ' '.repeat(halfWith);
    return paddStr + s + paddStr;
};
const cap = (s) => s.charAt(0).toUpperCase() + s.substring(1, s.length);
const getBg = (clc, color) => {
    const noColor = color == undefined || color === null;
    const isString = typeof color === 'string';
    const isNumber = typeof color === 'number';

    if (noColor) return clc.bgBlue;
    if (isString) return clc[`bg${cap(color)}`];
    if (isNumber) return clc.bgXterm(color);
};

const getLabel = (clc, color) => {
    const noColor = color == undefined || color === null;
    const isString = typeof color === 'string';
    const isNumber = typeof color === 'number';

    if (noColor) return clc.blue;
    if (isString) return clc[color];
    if (isNumber) return clc.xterm(color);
};

const formatters = {
    bold: (clc, s) => clc.bold(s),
    italic: (clc, s) => clc.italic(s),
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

        return link && terminalLink.isSupported ? terminalLink(badge, link) : badge;
    },
};
