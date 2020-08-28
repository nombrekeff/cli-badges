const { badge } = require('../index');
const donateBadge = badge('❤️ donate', 'ko-fi', { link: 'https://ko-fi.com/logginjs', forceLink: true });

console.log(donateBadge)