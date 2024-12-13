var exports = module.exports = {};
var Books = require('../models/book');
const axios = require('axios');
exports.getBooks = async function () {
    let books = await Books.findAll();
    return books;
}

exports.getBookById = async function (id) {
    let book = await Books.findByPk(id);
    return book;
}

exports.createBook = async function (data) {
    let book = await Books.create(data);
    return book;
}

exports.updateBookById = async function (id, data) {
    await Books.update(data, { where: { id: id } });
    return data;
}

exports.deleteBookById = async function (id) {
    let book = await Books.destroy({ where: { id: id } });
    return book;
}

exports.fetchExternal = async function () {

    const response = await axios.get('https://api.itbook.store/1.0/new');
    const books = response.data.books;
    const importedBooks = [];
    for (let book of books) {
        const addBook = await Books.findOrCreate({
            where: {
                isbn: book.isbn13
            },
            defaults: {
                title: book.title,
                author: "-",
                published_date: "1925-04-10",
                isbn: book.isbn13,
                pages: 0
            }
        })
        importedBooks.push(addBook[0]);
    }

    return importedBooks;

}