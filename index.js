import express from 'express';
import dotenv from "dotenv";
import { connectToMongoDB } from './src/config/db.js';
import productRouter from './src/routes/productsRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// db connect
await connectToMongoDB();

// middlewere
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});