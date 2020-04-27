const { Student } = require('../models');

class StudentController {
	static async getAll (req, res, next) {
		res.send('get all attendance')
	}

	static async getById (req, res, next) {
		res.send('get attendance by id')
	}

	static async create (req, res, next) {
		res.send('create new attendance')
	}

	static async update (req, res, next) {
		res.send('update attendance')
	}

	static async destroy (req, res, next) {
		res.send('delete attendance')
	}
}

module.exports = StudentController