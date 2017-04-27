var axios = require('axios')

module.exports = {
	fetchPopularRepos: function (language) {
		var encondeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + 
			'&sort=stars&order=desc&type=Repositories')

		return axios.get(encondeURI)
			.then(function (response) {
				return response.data.items
		})
	}
}