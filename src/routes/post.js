const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/:id/edit', postController.edit);
router.post('/store', postController.store);    
router.post('/handle-form-action', postController.handleFormAction);    
router.delete('/:id/destroy', postController.destroy);       // Hard Delete
router.delete('/:id/delete', postController.delete);        // soft Delete
router.patch('/:id/restore', postController.restore);
router.put('/:id', postController.update);
router.get('/create', postController.create);
router.get('/:slug', postController.show);

module.exports = router;
