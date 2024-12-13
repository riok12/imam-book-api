require('dotenv').config();
const express = require('express');
const app = express();

const indexRouter = require("./routes/index");
const bookRouter = require("./routes/book");

const port = process.env.PORT || 8080;
app.use(express.json());

app.use("/", indexRouter);
app.use("/v1/books", bookRouter);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});