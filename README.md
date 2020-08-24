<div align="center">
  
  ![](https://vectr.com/kerff/ddbmvyZmm.svg?width=600&height=300&select=aNbKxciPh)
  
  Quirky little node-js library for generating badges for your cli apps.
  
  ![GitHub file size in bytes](https://img.shields.io/github/size/nombrekeff/cli-badges/index.js?style=flat-square)
  [![npm](https://img.shields.io/npm/v/cli-badges?label=version&style=flat-square)](https://www.npmjs.com/package/cli-badges)
  
</div>

---

## Getting Started

### Installing

As usual, you need to install from npm/yarn:

```
$ npm install cli-badges
```

### Usage

This is a simple example, using badges to display test results:

```js
const { badge } = require('cli-badges');

const failedBadge = badge('failed', '2', { 
  messageBg: 'red',
});
const skippedBadge = badge('skipped', '2', {
  messageBg: 'yellow',
  messageColor: 'white',
});
const successBadge = badge('success', '2', {
  messageBg: 'green',
  messageColor: 'white',
});

console.log(failedBadge, successBadge, skippedBadge);
```

The above would output something similar to the terminal:

![](./output-example.png)

You could also create a donate badge with a link ([if supported](#links)):

```js
const donateBadge = badge('❤️ donate', 'ko-fi', {
  link: 'https://ko-fi.com/logginjs',
});

console.log(donateBadge);
```

![](./donate-output-example.png)

You can also only show the label:

```js
const { badge } = require('../index');

const onlyLabel = badge('❤️ donate', '', { labelColor: 169 });

console.log(onlyLabel);
```

> ###### Example output is a mock, console output will vary slightly from terminal to terminal.

## Badge Structure

A badge is conformed of a label and a message `<label>:<message>`. Each segment can be customized, by changing bg color, text color and style.

## API

`cli-badges` exports a method called `badge`.

```ts
export function badge(
  label?: string,
  message?: string,
  options?: {
    labelBg?: string | number;
    messageBg?: string | number;
    labelColor?: string | number;
    messageColor?: string | number;
    labelStyle?: any;
    messageStyle?: any;
    labelWidth?: any;
    messageWidth?: any;
    link?: any;
  }
): string;
```

### Available Options

- `labelBg` - background [color](#colors) for the label
  - default: **blackBright**
- `messageBg` - background [color](#colors) for the message
  - default: **blue**
- `labelColor` - text [color](#colors) for the label
  - default: **white**
- `messageColor` - text [color](#colors) for the message
  - default: **white**
- `labelStyle` - text style for the label - **[italic, bold]**
- `messageStyle` - text style for the message - **[italic, bold]**
- `labelWidth` - width of the label
  - default: **label length + 2**
- `messageWidth` - width of the message
  - default: **label length + 2**
- `link` - Add a link when a badge is clicked (_only works in some terminals, see [this](#links)_)

### Colors

`cli-badges` uses [`cli-color`](https://github.com/medikoo/cli-color#colors) internally for managing colors, you can check the list of available colors there. Take into account that when setting a color you don't need to pass the prefix `bg`, it's handled for you. ie: `blackBright` instead of `bgBlackBright`

#### List of available colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright`
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

There are more colors available using xterm colors, see [cli-color xterm colors](https://github.com/medikoo/cli-color#xterm-colors-256-colors-table) for the complete list of available colors.

> **Not supported on Windows and some terminals.** However if used in not supported environment, the closest color from basic (16 colors) palette is chosen.

### Links

You can output badges with a link attached to it, that can be clicked in some terminals.

> #### ⚠︎ cli-badges will only output link if its supported by your terminal.

> See [this](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) for information on supported terminals

```js
badge('with', 'link', { link: 'https://link.com' });
```

## Other languages?

cli-badges is also available in other languages:

* `Python` [@haideralipunjabi/cli-badges](https://github.com/haideralipunjabi/cli-badges)

## Support the project

I tend to open source anything I can, and love to help people that need help with the project.

However, if you are using this project and are happy with it or just want to encourage me to continue creating stuff, there are few ways you can do so:

- Starring and sharing the project 🚀
- Reporting bugs 🐛
- Sending feedback
- Or even coding :P

Thanks! ❤️

---

Contributions are very welcomed 🥰
