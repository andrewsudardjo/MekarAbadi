import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import indexRouter from './app/routes/public/index.js';
import productRouter from './app/routes/public/product.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public'))); // Add the correct path

// Set up the view engine
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: false }));
// Optional: Middleware for parsing JSON
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Use index router for the root path

app.use('/', indexRouter);
app.use('/products', productRouter);


// Create and start the server
export const createServer = () => {
  const port = process.env.PORT || 3000;
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  return { server, port };
};

createServer();

export default app;
