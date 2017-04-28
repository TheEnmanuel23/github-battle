var React = require('react')
var Link = require('react-router-dom').Link
var NavLink = require('react-router-dom').NavLink

function Nav () {
	return (
		<ul className='nav'>
			<li key="home">
				<NavLink activeClassName='active' to="/" >
					Home
				</NavLink>
			</li>
			<li key="battle">
				<NavLink activeClassName='active' to="/battle">
					Battle
				</NavLink>
			</li>
			<li key="popular">
				<NavLink activeClassName='active' to="/popular">
					Popular
				</NavLink>
			</li>
		</ul>
	)
}

module.exports = Nav