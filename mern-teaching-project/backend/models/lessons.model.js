const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    username: { type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
    link: {type: String, required: true},
}, {
    timestamps: true,
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;