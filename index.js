const { default: axios } = require('axios');
const $ = require('cheerio');
const fs = require('fs');

setTimeout(async () => {
	const response = await axios.get('https://friendorfollow.com/twitter/most-followers/');
	const people = [];
	if (response) {
		for (let i = 0; i < 100; i++) {
         fs.appendFileSync('popular-users.txt', $('h3', response.data)[i].firstChild.data.split('. ')[1] + "\n");
		}
	}

	// console.log(people);
}, 1000);
