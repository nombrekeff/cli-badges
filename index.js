const clc = require('cli-color');
const terminalLink = require('terminal-link');
const themes = require('./themes.js');
const {
    paddToFitWidth, 
    getBgColor,
    getTextColor,
    format,
} = require('./util.js');

const getOptionsForTheme = (theme, swapTheme) => {
    if (!themes.exists(theme)) {
        return {};
    }

    const themeOpts = { ...themes[theme] };

    if (swapTheme) {
        const pLblColor = themeOpts.labelColor;
        themeOpts.labelColor = themeOpts.messageColor;
        themeOpts.messageColor = pLblColor;

        const pLblBg = themeOpts.labelBg;
        themeOpts.labelBg = themeOpts.messageBg;
        themeOpts.messageBg = pLblBg;
    }

    return themeOpts;
};

const DEFAULT_OPTIONS = {
    messageBg: 'blue',
    labelBg: 'blackBright',
    labelColor: 'white',
    messageColor: 'white',
    messageStyle: null,
    messageWidth: null,
    labelStyle: null,
    labelWidth: null,
    link: null,
    forceLink: false,
    theme: 'blue',
    swapTheme: false,
    ...themes['blue'],
};

const makeBadge = (label = '', message = '', options = {}) => {
    const themeOpts = getOptionsForTheme(options.theme, options.swapTheme);
    const allOptions = { ...DEFAULT_OPTIONS, ...options, ...themeOpts, };
    const {
        messageBg, messageColor, messageStyle, messageWidth,
        labelBg, labelColor, labelStyle, labelWidth,
        link, forceLink,
    } = allOptions;

    if (themeOpts.label) label = themeOpts.label;
    if (themeOpts.message) message = themeOpts.message;

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
    const themeFn = (label, message, options = {}) => makeBadge(label, message, { ...options, theme });
    themeFn.swapped = (label, message, options) => themeFn(label, message, { ...options, swapTheme: true });
    return themeFn;
};

// Create theme methods
const themeNames = Object.keys(themes);
const registerThemeFn = (name) => {
    makeBadge[name] = createThemeFn(name);
}
themeNames.forEach(registerThemeFn);

// function to add new theme
makeBadge.addTheme = (name, options) => {
    themes[name] = options;
    registerThemeFn(name);
};

// Shorthand for createThemeFn
makeBadge.theme = (theme) => createThemeFn(theme);

module.exports = { badge: makeBadge };
