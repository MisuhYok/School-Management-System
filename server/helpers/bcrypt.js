const bcrypt = require('bcryptjs');

module.exports = {
	encrypt: (input) => {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(input, salt);
	},
	decrypt: (input, dbPass) => bcrypt.compareSync(input, dbPass)
}