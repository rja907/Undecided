const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// MongoDB URI + DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
