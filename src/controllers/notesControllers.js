const Note = require('../models/Note');



module.exports = {
    list: async (req, res) => {
        const notes = await Note.find().sort({date: 'desc'});
        res.render('notes/all-notes', { notes });


    },
    add: (req, res) => {
        res.render('notes/newNote');
    },

    new: async (req, res) => {
        const { title, description } = req.body;
        const errors = [];
            if (!title) {
                 errors.push({ text: "Please Write a Title." });
            }
            if (!description) {
                  errors.push({ text: "Please Write a Description" });
            }
            if (errors.length > 0) {
             return res.render("notes/newNote", {
                errors,
                title,
                description
            }) 
            } else {
               const newNote =  new Note({ title, description});
               await newNote.save();
               req.flash('success_msg', 'Nota agregada correctamente');
               res.redirect('/notes');
            }

    },
    edit: async (req, res) => {
       const note =  await Note.findById(req.params.id)
        res.render('notes/edit-note', {note});

    },
    update: async (req, res) => {
        const { title, description } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, description});
        req.flash('success_msg', 'Nota actualizada correctamente')
        res.redirect('/notes');

    },
    delete: async (req, res) => {
        await Note.findByIdAndDelete(req.params.id)
        req.flash('success_msg', 'Nota eliminada correctamente')
        res.redirect('/notes');
        

    }

}