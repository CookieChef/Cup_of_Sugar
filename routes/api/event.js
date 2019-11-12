const express = require('express');
const router = express.Router();

const Event = require ('../../models/Event');

router.post('/calendar', (req, res) => {
    const name = req.body.name;
    const place = req.body.place;
    const synopsis = req.body.sypnosis;

    const newEvent = new Event ({
        name,
        place,
        synopsis
    });
    newEvent.save().then(event => res.json(event)).catch(err => console.log(err));
})

module.exports = router;