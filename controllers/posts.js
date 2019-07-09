const Post = require('../models/post');

module.exports = {
  getAllPosts
};

function getAllPosts(req,res) {
  Post.find({}, function(err, posts){
    if(err) console.log(err);
    res.status(200).json(posts);
  });
}