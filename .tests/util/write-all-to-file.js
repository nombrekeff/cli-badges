const fs = require('fs');
const { badge } = require('../../index');

const availableColors = [
    'green',
    'red',
    'blue',
    'cyan',
    'yellow',
    'magenta',
    'black',

    'greenBright',
    'redBright',
    'blueBright',
    'cyanBright',
    'yellowBright',
    'magentaBright',
    'blackBright',
];

const wrapResult = (color, badge, type) => ({ color, badge, type });

const createBadgeWithLabelBg = (labelBg) =>
    wrapResult(labelBg, badge('lbl', 'msg', { labelBg }), 'labelBg');

const createBadgeWithMessageBg = (messageBg) =>
    wrapResult(messageBg, badge('lbl', 'msg', { messageBg }), 'messageBg');

const createBadgeWithLabelColor = (labelColor) =>
    wrapResult(labelColor, badge('lbl', 'msg', { labelColor }), 'labelColor');

const createBadgeWithMessageColor = (messageColor) =>
    wrapResult(messageColor, badge('lbl', 'msg', { messageColor }), 'messageColor');

const labelBadgesBg = availableColors.map(createBadgeWithLabelBg);
const labelBadgesColor = availableColors.map(createBadgeWithLabelColor);
const messageBadgesBg = availableColors.map(createBadgeWithMessageBg);
const messageBadgesColor = availableColors.map(createBadgeWithMessageColor);

const allBadges = {
    bgLabels: labelBadgesBg,
    colorLabels: labelBadgesColor,
    bgMessages: messageBadgesBg,
    colorMessages: messageBadgesColor,
};

fs.writeFileSync('./.tests/util/all-badges.js', 'module.exports = ' + JSON.stringify(allBadges, null, 2));