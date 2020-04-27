module.exports = (err, req, res, next) => {
	console.log(`== error handler ==`);
	console.log(err);

	let status = 500;
	let errors = ['Internal Server Error'];

	if (err.name === 'SequelizeValidationError') {
		status = 400;
		errors = err.errors.forEach(el => error.push(el.message));
	} else if (err.name === 'JsonWebTokenError') {
		status = 401;
		errors = ['Please Login'];
	}

	res.status(status).json({ errors })
}