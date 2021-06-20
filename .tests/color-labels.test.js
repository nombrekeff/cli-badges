
const { badge } = require('../index');
const badgesTestData = require('./util/all-badges.js');

function testLabelColor(color, expected) {
    return () => {
        const testBadge = badge('lbl', 'msg', { labelColor: color });
        expect(testBadge).toEqual(expected);
    };
}

const colorLabelsData = badgesTestData.colorLabels;

for (let lblData of colorLabelsData) {
    test('Color label [green]', testLabelColor(lblData.color, lblData.badge));
}