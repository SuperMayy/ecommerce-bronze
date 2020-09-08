import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log("API running on port 4040"));