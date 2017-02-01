'use strict';

const Rating = require('./rating');

function Book(title, publisher) {
  this.ratings = [];
  this.title = title;
  this.publisher = publisher;
}

Book.prototype.addRating = function (username, rating, comment) {
  const ratingObj = new Rating(username, rating, comment);
  this.ratings.push(ratingObj);
  return ratingObj;
};

module.exports = Book;
