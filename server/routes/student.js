const router = require('express').Router();
const { StudentController } = require('../controllers');

router.get('/', StudentController.getAll);
router.get('/:id', StudentController.getById);
router.post('/', StudentController.create);
router.put('/:id', StudentController.update);
router.delete('/:id', StudentController.destroy);

module.exports = router;