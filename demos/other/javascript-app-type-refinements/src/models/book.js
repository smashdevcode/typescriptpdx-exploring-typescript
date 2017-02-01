'use strict';

const Rating = require('./rating');

/**
 * @param {string} title - The title of the book.
 * @param {string} publisher - The publisher of the book.
 */
function Book(title, publisher) {
  this.ratings = [];
  this.title = title;
  this.publisher = publisher;
}

/**
 * This method adds a rating to the book.
 * @param {string} username - The username to add the rating for.
 * @param {number} rating - The rating that the user gave the book.
 * @param {string} comment - The comment that the user gave the book.
 * @return {Rating} - Returns a Rating object.
 */
Book.prototype.addRating = function (username, rating, comment) {
  const ratingObj = new Rating(username, rating, comment);
  this.ratings.push(ratingObj);
  return ratingObj;
};

module.exports = Book;
