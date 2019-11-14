const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:3cf04e03-208a-4882-a440-bd452360e0cc',
    key: 
    '161f2ecb-65c9-46a9-ae3a-4e13d4671241:vm0d41rYs0osr6kIuAyBjYAgLXW20nJOQxoEjyCpfeg='
})

// app.post('/users', (req, res)=>{
//     const { username } = req.body;

//     chatkit 
//         .createUser ({
//             id: username,
//             name: username
//     })
//     .then (()=> res.sendStatus(201));
    
// }) 
// app.post('/authenticate',(req, res) => {
//  const authData = chatkit.authenticate ({ userId: req.query.user_id})
//  res.status(authData.status).send(authData.body)
// })

const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});