var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api.js')

function SelectLanguage (props) {
	var languages = ['All', 'JavaScript', 'Java', 'Python', 'Ruby']

	return (
		<ul className='languages'>
			{
				languages.map( (lang) => {
						return (
							<li 
							style={ lang === props.selectedLanguage ? { color: 'red' } : null}
							onClick={props.onSelect.bind(null, lang)}
							key={lang}>
							{ lang }
							</li>
						)
					}
				)
			}
		</ul>
	)
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
	constructor (props) {
			super(props)
			this.state = {
				selectedLanguage: 'All',
				repos: null
			}
			this.updateLanguage = this.updateLanguage.bind(this)
	}
	
	componentDidMount () {
		this.updateLanguage(this.state.selectedLanguage)
	}

	updateLanguage (lang) {
		this.setState(function () {
			return {
				selectedLanguage: lang,
				repos: null
			}
		})

		api.fetchPopularRepos(lang)
		.then(function (repos) {
			this.setState({
					repos: repos
			})
		}.bind(this))
	}

	render() {
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{JSON.stringify(this.state.repos, 2, null)}
			</div>
		)
	}
}

module.exports = Popular