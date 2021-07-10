function buildArticleLink(article) {
  return`/article-section/${article.topic._id}/article/${article._id}`;
}

export {
  buildArticleLink, 
}
