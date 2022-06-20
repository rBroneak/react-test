const del = require('del')

module.exports = () => {
  return del.sync('../public/img/**/*', { force: true })
}
