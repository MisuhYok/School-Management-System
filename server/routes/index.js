const router = require('express').Router();
const parentRouter = require('./parent');
const teacherRouter = require('./teacher');
const adminRouter = require('./admin');
const studentRouter = require('./student');

router.get('/', (req, res, next) => res.send('Server is running'));
router.use('/student', studentRouter);
router.use('/teacher', teacherRouter);
router.use('/parent', parentRouter);
router.use('/admin', adminRouter);

module.exports = router;