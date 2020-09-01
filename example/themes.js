const { badge } = require('../index');

console.log(
    badge.green('theme', 'green'),
    badge.success('theme', 'green'),
    badge.blue('theme', 'blue'),
    badge.red('theme', 'red'),
    badge.failed('theme', 'red'),
    badge.yellow('theme', 'yellow'),
    badge.magenta('theme', 'magenta'),
    badge.cyan('theme', 'cyan'),
    badge.theme('cyan')('theme', 'cyan'),
);

console.log(
    badge.green.swapped('theme', 'green'),
    badge.blue.swapped('theme', 'blue'),
    badge.red.swapped('theme', 'red'),
    badge.yellow.swapped('theme', 'yellow'),
    badge.magenta('theme', 'magenta', { swapTheme: true }),
    badge.theme('cyan').swapped('theme', 'cyan'),
);