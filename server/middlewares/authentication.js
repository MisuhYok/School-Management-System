const jwt = require('../helpers/jwt');
const { Admin, Teacher, Student, Parent } = require('../models');
module.exports = async (req, res, next) => {
	const { token } = req.headers;

	try {
		req.decoded = jwt.verifyToken(token);

		if (req.decoded) {
			const { id, email } = req.decoded;

			const admin = await Admin.findOne({
				where: { id, email }
			})
			
			if (admin) next ()
			else {
				const teacher = await Teacher.findOne({
					where: { id, email }
				})

				if (teacher) next()
				else {
					const student = await Student.findOne({
						where: { id, email }
					})

					if (student) next()
					else {
						const parent = await Parent.findOne({
							where: { id, email }
						})

						if (parent) next()
						else {
							throw {
								status: 401,
								errors: ['Please login']
							}
						}
					}
				}
			}
		}
	} catch (error) {
		next(error)
	}
}