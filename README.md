# README

API CRUD Books with external url datasource feature

## Version

API : 1.0.0

## Project Description

CRUD Books with postgres and feature import from external URL, using Sequalize for ORM and Joi as validator

## Installation

`npm install`

then

`pm2 start --name=books-api index.js`

## Usage

### Create
```
curl --request POST \
  --url http://localhost:8080/v1/books \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_date": "1925-04-10",
    "isbn": "9780743273565",
    "pages": 180
}'
```

### GetBooks (All)

```
curl --request GET \
  --url http://localhost:8080/v1/books \
  --header 'User-Agent: insomnia/10.1.0'
```

### Get Book by Id

```curl --request GET \
  --url http://localhost:8080/v1/books/1
```

### Update book

```
curl --request PUT \
  --url http://localhost:8080/v1/books/1 \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "The Great Gatsby New 2024",
    "author": "F. Scott Fitzgerald",
    "published_date": "1925-04-10",
    "isbn": "9780743273565",
    "pages": 180
}'
```

### Delete By Id

```curl --request DELETE \
  --url http://localhost:8080/v1/books/1
  ```

### Fetch External

```curl --request POST \
  --url http://localhost:8080/v1/books/fetch-external \
  --header 'Content-Type: application/json' 
  ```

## Contributing

Please provide guidelines for contributing to your project here.

## License

Please specify the license for your project here.
