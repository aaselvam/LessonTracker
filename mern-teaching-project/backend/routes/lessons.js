const router = require('express').Router();
let Lesson = require('../models/lessons.model');

router.route('/').get((req, res) => {
    Lesson.find()
      .then(lessons => res.json(lessons))
      .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const link = req.body.link;

    const newLesson = new Lesson({
        username,
        description,
        duration,
        date,
        link,
    });

    newLesson.save()
      .then(() => res.json('Lesson added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>{
    Lesson.findById(req.params.id)
      .then(lesson => res.json(lesson))
      .catch(err => res.status(400).json('Error' + err));
})

router.route('/:id').delete((req, res) =>{
    Lesson.findByIdAndDelete(req.params.id)
      .then(() => res.json('Lesson deleted!'))
      .catch(err => res.status(400).json('Error' + err));
})

router.route('/update/:id').post((req, res) =>{
    Lesson.findById(req.params.id)
      .then(lesson => {
        lesson.username = req.body.username;
        lesson.description = req.body.description;
        lesson.duration = Number(req.body.duration);
        lesson.date = Date.parse(req.body.date);
        lesson.link = req.body.link;

        lesson.save()
          .then(() => res.json('Lesson updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error' + err));
})

module.exports = router;