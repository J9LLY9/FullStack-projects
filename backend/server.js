import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});  

console.log(process.env.NODE_ENV);

app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
