import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Import Routes
import htmlToPdfRoute from './routes/htmlToPdfRoute';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Increases security of express app with various pre-applied http headers
app.use(helmet());

// Enables all cors requests
app.use(cors());

// Automatically transforms json objects to js objects
app.use(bodyParser.text());

// Use morgan for logging HTTP requests
app.use(morgan('combined'));

// Routes
app.get('/', (req, res) => {
  res.send({ online: true });
});

app.use('/htmlToPdf', htmlToPdfRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
