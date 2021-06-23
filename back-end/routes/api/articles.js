const mongoose = require('mongoose');
const router = require('express').Router();
const Article = mongoose.model('Article');
const Comment = mongoose.model('Comment');

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});

router.get('/:articleId', getArticle, async (req, res) => {
  res.send(res.article);
});

router.put('/:articleId', getArticle, async (req, res) => {
  try {
    const article = res.article;

    article.title = req.body.title;
    article.abstract = req.body.abstract;
    article.imageURL = req.body.imageURL;
    article.body = req.body.body;
   
    await article.save();
    res.status(201).json(article);
  }
  catch(err) {
    res.status(500).json({message:err.message});
  }
});

router.post('/', async (req, res) => {

  var article = new Article({
    title: req.body.title,
    abstract: req.body.abstract,
    body: req.body.body,
    imageURL: req.body.imageURL,
    author: req.body.authorId
  });

  try {
    const newArticle =  await article.save();
    res.status(201).json(newArticle);
  }
  catch (err) {
    res.status(400).json({message: err.message})
  }
});

router.get('/:articleId/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ articleId: req.params.articleId }).exec();
    res.send(comments);
  }
  catch(err) {
    res.status(500).json({message:err.message});
  }
});

router.post('/:articleId/comments', async (req, res) => {
  try {
    const comment = new Comment({
      author: req.body.authorId,
      article: req.params.articleId,
      body: req.body.body,
    });
  
    await comment.save();
    res.status(201).json(comment);
  }
  catch(err) {
    res.status(500).json({message:err.message});
  }
});

/********************************* middleware *********************************/

async function getArticle(req, res, next) {
  let article = null;
  const id = req.params.articleId;
  try {
    article = await Article.findById(id).populate('author');
    if (article === null) {
      return res.status(404).json({message: `Cannot find article with id: ${id}`});
    }
  }
  catch (err) {
    return res.status(500).json({message:err.message});
  }

  res.article = article;
  next();
}

module.exports = router;