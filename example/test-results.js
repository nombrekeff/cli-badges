const { badge } = require('../index');

const failedBadge = badge('failed', '2', { messageBg: 'red' });
const skippedBadge = badge('skipped', '1', { messageBg: 'yellow', messageColor: 'black' });
const successBadge = badge('success', '8', { messageBg: 'green', messageColor: 'black' });
console.log();

console.log(failedBadge, successBadge, skippedBadge);

console.log();

const failedBadgeDark = badge('failed', '2', { labelBg: 'red', messageBg: 'blackBright'});
const skippedBadgeDark = badge('skipped', '1', { labelBg: 'yellow', labelColor: 'black', messageBg: 'blackBright' });
const successBadgeDark = badge('success', '8', { labelBg: 'green', labelColor: 'black', messageBg: 'blackBright' });

console.log(failedBadgeDark, successBadgeDark, skippedBadgeDark);
console.log();
