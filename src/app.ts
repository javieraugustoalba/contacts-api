import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact-routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
