const themes = {
    blue: {
        messageBg: 'blue',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'white',
    },
    red: {
        messageBg: 'red',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'white',
    },
    green: {
        messageBg: 'green',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'white',
    },
    yellow: {
        messageBg: 'yellow',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'black',
    },
    cyan: {
        messageBg: 'cyan',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'black',
    },
    magenta: {
        messageBg: 'magenta',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'black',
    },
    failed: {
        messageBg: 'red',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'white',
    },
    success: {
        messageBg: 'green',
        labelBg: 'blackBright',
        labelColor: 'white',
        messageColor: 'white',
    },
};

module.exports = {
    ...themes,
    exists(val) { return val in this; },
    getOptionsForTheme(theme, swapTheme) {
        if (!this.exists(theme)) {
            return {};
        }

        const themeOpts = { ...this[theme] };

        if (swapTheme) {
            const pLblColor = themeOpts.labelColor;
            themeOpts.labelColor = themeOpts.messageColor;
            themeOpts.messageColor = pLblColor;

            const pLblBg = themeOpts.labelBg;
            themeOpts.labelBg = themeOpts.messageBg;
            themeOpts.messageBg = pLblBg;
        }

        return themeOpts;
    }
};
