import express from 'express';
import axios from 'axios';

import { mockApi } from './mocks/server.js';

mockApi.listen();

const app = express();

app.get("/mocked-response", async (req, res) => {
    console.log("Here we go!");
    const { data } = await axios.get("http://localhost:8082/user-data");
    return data;
});

app.get("/response", (req, res) => {
    res.status(200).send("Hello, Marty!");
});

app.listen(8080, () => {
    console.log("Server started on port 8080!");
})