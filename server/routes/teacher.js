const router = require('express').Router();
const { TeacherController } = require('../controllers');

router.get('/', TeacherController.getAll);
router.get('/:id', TeacherController.getById);
router.post('/', TeacherController.create);
router.put('/:id', TeacherController.update);
router.delete('/:id', TeacherController.destroy);

module.exports = router;