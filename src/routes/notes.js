const express = require('express');
const router = express.Router();
const notesControllers = require('../controllers/notesControllers');

/* LIST */
router.get('/notes', notesControllers.list)

/* CREATE */
router.get('/notes/add', notesControllers.add)
router.post('/notes/new', notesControllers.new )

/* UPDATE */
router.get('/notes/edit/:id', notesControllers.edit);
router.put('/notes/edit-note/:id', notesControllers.update);


/* DELETE */
router.delete('/notes/delete/:id', notesControllers.delete);



module.exports = router;
