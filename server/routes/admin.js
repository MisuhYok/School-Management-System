const router = require('express').Router();
const { AdminController } = require('../controllers');

router.get('/', AdminController.getAll);
router.get('/:id', AdminController.getById);
router.post('/', AdminController.create);
router.put('/:id', AdminController.update);
router.delete('/:id', AdminController.destroy);

module.exports = router;