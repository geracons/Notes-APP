const express = require('express');
const router = express.Router();
const notesControllers = require('../controllers/notesControllers');
const { isAuthenticated } = require('../middlewares/auth');

 
/* LIST */
router.get('/notes', isAuthenticated, notesControllers.list)

/* CREATE */
router.get('/notes/add', isAuthenticated, notesControllers.add)
router.post('/notes/new', notesControllers.new )

/* UPDATE */
router.get('/notes/edit/:id', isAuthenticated, notesControllers.edit);
router.put('/notes/edit-note/:id', isAuthenticated, notesControllers.update);


/* DELETE */
router.delete('/notes/delete/:id', isAuthenticated, notesControllers.delete);



module.exports = router;
