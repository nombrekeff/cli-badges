
const { badge } = require('../index');
const badgesTestData = require('./util/all-badges.js');

function testLabelBg(color, expected) {
    return () => {
        const testBadge = badge('lbl', 'msg', { labelBg: color });
        expect(testBadge).toEqual(expected);
    };
}

const bgLabelsData = badgesTestData.bgLabels;

for (let lblData of bgLabelsData) {
    test('Bg label [green]', testLabelBg(lblData.color, lblData.badge));
}