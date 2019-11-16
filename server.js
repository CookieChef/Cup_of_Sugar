const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const events = require('./routes/api/event');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const db = process.env.mongoddb_URI || require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/event', events);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});