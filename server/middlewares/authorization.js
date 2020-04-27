const { Teacher } = require('../models');

module.exports = {
	TeacherAuthorization (req, res, next) {
		const { id, email } = req.decoded;

		const teacher = await Teacher.findOne({
			where: { id, email }
		})

		if (teacher) next()
		else next({
			status: 401,
			errors: ['You are not authorized!']
		})
	}
}