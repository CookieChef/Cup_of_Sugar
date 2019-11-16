const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');

router.post('/calendar', function (req, res ) {
    db.Event.create({
        name: req.body.name,
        place: req.body.place,
        synopsis: req.body.synopsis                   
    }).then(function (Event){
        res.redirect("/calendar");
    })
    })
   

module.exports = router;