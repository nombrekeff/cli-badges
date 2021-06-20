const { badge } = require('../index');

// Options
console.log(
    badge('test', 'badge', {
        messageBg: 'yellow',
        labelBg: 'blackBright',
        messageColor: 'black',
        labelColor: 'white',
        messageStyle: null,
        labelStyle: null,
        link: null,
    }),
);

// Styles:
//  - bold
//  - italic
console.log(
    badge('test', 'italic', { 
        labelStyle: 'bold', 
        messageStyle: 'italic', 
        messageWidth: '16' 
    }),
);

// Colors
// See https://www.npmjs.com/package/cli-color#colors
// You just need to pass in the name of the color, cyan instead of bgCyan, or greenBright instead of bgGreenBright
console.log(
    badge.cyan('test', 'badge'),
    badge('test', 'badge', {
        messageBg: 'yellow',
        labelBg: 'blackBright',
        messageColor: 'black',
        labelColor: 'white',
        messageStyle: null,
        labelStyle: null,
        labelWidth: null,
        messageWidth: null,
        link: null,
    }),
);

// Links
// Only supported in some terminals see https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda
console.log(
    badge('test', 'badge', { messageBg: 'cyan', link: 'https://link.com' }),
);

console.log(
    badge(),
);