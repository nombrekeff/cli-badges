const { badge } = require('../index');


badge.addTheme('donate', {
    'label': '❤️ donate',
    link: 'https://github.com/'
});

console.log(badge.donate(null, 'test'))
// badge.addTheme('replaceLbl', { label: 'hello' });
// console.log(badge('lbl', 'msg', { theme: 'replaceLbl' }));