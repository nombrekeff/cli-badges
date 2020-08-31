# List of all available themes

|  name     | preview |
| --------- | ------- |
| `blue`    | ![]()   |
| `cyan`    | ![]()   |
| `green`   | ![]()   |
| `magenta` | ![]()   |
| `red`     | ![]()   |
| `yellow`  | ![]()   |

You can invert all themes, this means properties from label will be aplied to message and vice versa.

## Example Usage

```js
const { badge } = require('../index');

console.log(
  badge.green('theme', 'green'),
  badge.blue('theme', 'blue'),
  badge.red('theme', 'red'),
  badge.yellow('theme', 'yellow'),
  badge.magenta('theme', 'magenta'),
  badge.cyan('theme', 'cyan'),
  badge.theme('cyan')('theme', 'cyan')
);

console.log(
  badge.green.inversed('theme', 'green'),
  badge.blue.inversed('theme', 'blue'),
  badge.red.inversed('theme', 'red'),
  badge.yellow.inversed('theme', 'yellow'),
  badge.magenta.inversed('theme', 'magenta'),
  badge.cyan.inversed('theme', 'cyan'),
  badge.theme('cyan').inversed('theme', 'cyan')
);
```

## Contributing

You can add your themes for review, just follow this simple steps:

1. Add your theme config in file [`themes.js`](../themes.js).
2. Send a PR and I will review the theme and hopefully add it.
