const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({
   name: { type: String, required: true},
   place: { type: String, required: true},
   synopsis: String,
   date: { type: Date, required: true}
});

module.exports = Event = mongoose.model("Event", EventSchema);
