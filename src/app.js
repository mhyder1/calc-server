require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require('./config')

const problemsRouter = require('./problems/problems-router')

const app = express();
const morganOption = (NODE_ENV === 'production') ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use('/problems', problemsRouter);

module.exports = app;
