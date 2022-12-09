const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/notes-db-app', {
   
    useNewUrlParser: true,
    
})

.then(db => console.log('DB is connect'))
.catch(err => console.error(err));
