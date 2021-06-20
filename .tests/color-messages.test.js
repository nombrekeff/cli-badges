
const { badge } = require('../index');
const badgesTestData = require('./util/all-badges.js');

function testMessageColor(color, expected) {
    return () => {
        const testBadge = badge('lbl', 'msg', { messageColor: color });
        expect(testBadge).toEqual(expected);
    };
}

const colorMessagesData = badgesTestData.colorMessages;

for (let msgData of colorMessagesData) {
    test('Color message [green]', testMessageColor(msgData.color, msgData.badge));
}