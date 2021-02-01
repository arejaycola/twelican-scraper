const { default: axios } = require('axios');
const $ = require('cheerio');
const fs = require('fs');

setTimeout(async () => {
	const response = await axios.get('https://friendorfollow.com/twitter/most-followers/');
	if (response) {
		for (let i = 0; i < 100; i++) {
			fs.appendFileSync('popular-users.txt', $('h3', response.data)[i].firstChild.data.match('\\.(.*)')[0].substring(2) + '\n');
		}
	}
}, 1000);
