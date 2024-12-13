const bookService = require('../services/bookService');

var exports = module.exports = {};

exports.getBooks = async function (req, res, next) {
    const books = await bookService.getBooks();
    res.status(200).json(books);
};

exports.getBookById = async function (req, res, next) {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
};

exports.createBook = async function (req, res, next) {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
};

exports.updateBookById = async function (req, res, next) {
    const book = await bookService.updateBookById(req.params.id, req.body);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
};

exports.deleteBookById = async function (req, res, next) {
    const book = await bookService.deleteBookById(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).json();
};

exports.fetchExternal = async function (req, res, next) {
    const importedBooks = await bookService.fetchExternal();
    res.status(200).json(importedBooks);
}

