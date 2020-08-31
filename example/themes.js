const { badge } = require('../index');

console.log(
    badge.green('theme', 'green'),
    badge.blue('theme', 'blue'),
    badge.red('theme', 'red'),
    badge.yellow('theme', 'yellow'),
    badge.magenta('theme', 'magenta'),
    badge.cyan('theme', 'cyan'),
    badge.theme('cyan')('theme', 'cyan'),
);

console.log(
    badge.green.inversed('theme', 'green'),
    badge.blue.inversed('theme', 'blue'),
    badge.red.inversed('theme', 'red'),
    badge.yellow.inversed('theme', 'yellow'),
    badge.magenta.inversed('theme', 'magenta'),
    badge.cyan.inversed('theme', 'cyan'),
    badge.theme('cyan').inversed('theme', 'cyan'),
);