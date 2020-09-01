# List of all available themes

|         |                                           |           |                                               |
| ------- | ----------------------------------------- | --------- | --------------------------------------------- |
| `blue`  | ![theme-blue](../images/theme-blue.png)   | `cyan`    | ![theme-cyan](../images/theme-cyan.png)       |
| `green` | ![theme-green](../images/theme-green.png) | `magenta` | ![theme-magenta](../images/theme-magenta.png) |
| `red`   | ![theme-red](../images/theme-red.png)     | `yellow`  | ![theme-yellow](../images/theme-yellow.png)   |

You can **swap** all themes, this means properties from label will be aplied to message and vice versa.

## Example Usage 👀

```js
const { badge } = require('../index');

console.log(
  badge.green('label', 'green'),
  badge.blue('label', 'blue'),
  badge.red('label', 'red'),
  badge.yellow('label', 'yellow'),
  badge.magenta('label', 'magenta', { theme: 'magenta' }),
  badge.theme('cyan')('label', 'cyan')
);

console.log(
  badge.green.swapped('label', 'green'),
  badge.blue.swapped('label', 'blue'),
  badge.red.swapped('label', 'red'),
  badge.yellow.swapped('label', 'yellow'),
  badge.magenta('label', 'magenta', { swapTheme: true }),
  badge.theme('cyan').swapped('label', 'cyan')
);
```

## Contributing 💕

You can add your themes for review, just follow this simple steps:

1. Add your theme config in file [`themes.js`](../themes.js).
2. Send a PR and I will review the theme and hopefully add it 💪.
