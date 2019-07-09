const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postStyles = {
  backgroundColor: 'blanchedalmond',
  border: '1px solid salmon',
  borderRadius: 3,
  margin: '0 0 20px'
}

const postSchema = new Schema({
  title: String,
  body: String,
  author: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);