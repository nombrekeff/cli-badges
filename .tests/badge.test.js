const { badge } = require('../index');

test('Should work with no arguments', () => {
    const createEmptyBadge = () => badge();
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with empty label and message', () => {
    const createEmptyBadge = () => badge('', '');
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with label and message', () => {
    const createEmptyBadge = () => badge('test', 'label');
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with custom widths', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelWidth: 20, messageWidth: 20 });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with label and message and options', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: 'green', messageBg: 'blue' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with custom message', () => {
    const createEmptyBadge = () => badge('test', 'label', { messageColor: 32, messageBg: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with xterm label and message', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: 32, messageBg: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with null label and message bg', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: null, messageBg: null });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with incorrect xterm color', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: -1, messageBg: 260 });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with null label and message color', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelColor: null, messageColor: null });
    expect(createEmptyBadge).not.toThrow();
})


test('Should work with bold', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'bold', messageStyle: 'bold' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with italic', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'italic', messageStyle: 'italic' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with inverse', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'inverse', messageStyle: 'inverse' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with blink', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'blink', messageStyle: 'blink' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with strike', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'strike', messageStyle: 'strike' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with underline', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelStyle: 'underline', messageStyle: 'underline' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with link', () => {
    const createEmptyBadge = () => badge('test', 'label', { link: 'test' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with forceLink', () => {
    const createEmptyBadge = () => badge('test', 'label', { link: 'https://test', forceLink: true });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with theme', () => {
    const createEmptyBadge = () => badge('test', 'label', { theme: 'green' });
    expect(createEmptyBadge).not.toThrow();
})

test('Should work with theme', () => {
    const createEmptyBadge = () => badge('test', 'label', { theme: 'green', invertTheme: true });
    expect(createEmptyBadge).not.toThrow();
})

test('badge.theme should work', () => {
    const createEmptyBadge = () => badge.theme('red')('test', 'label');
    expect(createEmptyBadge).not.toThrow();
})

test('badge.theme should work', () => {
    const createEmptyBadge = () => badge.theme('red').swapped('test', 'label');
    expect(createEmptyBadge).not.toThrow();
})

test('override label should work', () => {
    badge.addTheme('replaceLbl', { label: 'hello' });
    expect(
        badge('lbl', 'msg', { theme: 'replaceLbl' })
    ).toEqual("\u001b[100m\u001b[37m hello \u001b[39m\u001b[49m\u001b[44m\u001b[37m msg \u001b[39m\u001b[49m ");
})


test('override message should work', () => {
    badge.addTheme('replaceLbl', { message: 'hello' });
    expect(
        badge('lbl', 'msg', { theme: 'replaceLbl' })
    ).toEqual("\u001b[100m\u001b[37m lbl \u001b[39m\u001b[49m\u001b[44m\u001b[37m hello \u001b[39m\u001b[49m ");
})

// Xterm tests

test('Label bg xterm [32]', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Message bg xterm [32]', () => {
    const createEmptyBadge = () => badge('test', 'label', { messageBg: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Label color xterm [32]', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelColor: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Message color xterm [32]', () => {
    const createEmptyBadge = () => badge('test', 'label', { messageColor: 32 });
    expect(createEmptyBadge).not.toThrow();
})

test('Label bg xterm [null]', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: null });
    expect(createEmptyBadge).not.toThrow();
})

test('Label bg xterm [-1]', () => {
    const createEmptyBadge = () => badge('test', 'label', { labelBg: -1 });
    expect(createEmptyBadge).not.toThrow();
})
