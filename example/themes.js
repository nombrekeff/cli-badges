const { badge } = require('../index');

console.log(
    badge.green('theme', 'green'),
    badge.blue('theme', 'blue'),
    badge.red('theme', 'red'),
    badge.yellow('theme', 'yellow'),
    badge.magenta('theme', 'magenta'),
    badge.cyan('theme', 'cyan'),
);

console.log(
    badge.success.swapped('theme', 'green'),
    badge.blue.swapped('theme', 'blue'),
    badge.failed.swapped('theme', 'red'),
    badge.yellow.swapped('theme', 'yellow'),
    badge.magenta('theme', 'magenta', { swapTheme: true }),
    badge.theme('cyan').swapped('theme', 'cyan'),
);