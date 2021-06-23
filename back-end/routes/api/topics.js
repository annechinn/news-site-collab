const mongoose = require('mongoose');
const router = require('express').Router();
const Topic = mongoose.model('Topic');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

router.post('/', async (req, res) => {

  var topic = new Topic({
    name: req.body.name,
    title: req.body.title,
    color: req.body.color,
  });

  try {
    const newTopic =  await topic.save();
    res.status(201).json(newTopic);
  }
  catch (err) {
    res.status(400).json({message: err.message})
  }
});

module.exports = router;