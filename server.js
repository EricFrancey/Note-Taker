const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// will be used to make unique id for each note
// const { v4: uuidv4 } = require('uuid');
const path = require ('path')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// router to send to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//wildcard to send to index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//start connection
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
