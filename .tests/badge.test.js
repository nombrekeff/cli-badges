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

test('Should return correctly formatted badge', () => {
    const testBadge = badge('test', 'label', { labelBg: 32 });
    expect(testBadge).toEqual('[48;5;32m[37m test [39m[49m[44m[37m label [39m[49m ');
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
    const createEmptyBadge = () => badge.theme('red').inversed('test', 'label');
    expect(createEmptyBadge).not.toThrow();
})
