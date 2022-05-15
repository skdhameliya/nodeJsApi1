import express from "express";
import bodyParser from "body-parser";

import usersRoute from './routes/users.js'

// const express = require('express');

const app = express();
const PORT = 5000; //for backend

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));

app.get('/', (req, res) => {
    console.log("TEST");
    res.send("hello from index.js");
});

app.use('/users', usersRoute);