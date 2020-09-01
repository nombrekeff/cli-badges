const { badge } = require('../index');
const badgesTestData = require('./util/all-badges.js');

function testMessageBg(color, expected) {
  return () => {
    const testBadge = badge('lbl', 'msg', { messageBg: color });
    expect(testBadge).toEqual(expected);
  };
}

const bgMessagesData = badgesTestData.bgMessages;

for (let msgData of bgMessagesData) {
  test('Bg message [green]', testMessageBg(msgData.color, msgData.badge));
}