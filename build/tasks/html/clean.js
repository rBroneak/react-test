const del = require('del')

module.exports = () => {
	return del.sync('../public/**/*.njk', {force: true})
}
