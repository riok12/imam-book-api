const router = require('express').Router();
const bookController = require('../controllers/bookControllers');
const bookRequest = require('../validation/bookRequest');
const validate = require('../middlewares/validate');
const { route } = require('.');

router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/', validate(bookRequest), bookController.createBook);
router.put('/:id', validate(bookRequest), bookController.updateBookById)
router.delete('/:id', bookController.deleteBookById);
router.post('/fetch-external', bookController.fetchExternal)

module.exports = router;