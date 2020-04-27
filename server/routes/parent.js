const router = require('express').Router();
const { ParentController } = require('../controllers');

router.get('/', ParentController.getAll);
router.get('/:id', ParentController.getById);
router.post('/', ParentController.create);
router.put('/:id', ParentController.update);
router.delete('/:id', ParentController.destroy);

module.exports = router;