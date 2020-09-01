const { badge } = require('../index');


badge.addTheme('donate', {
    'label': '❤️ donate',
});

console.log(badge.donate(null, 'test'))