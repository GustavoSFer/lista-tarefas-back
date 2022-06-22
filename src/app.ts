import express from 'express';
import cors from 'cors';
import error from './middleware/middlewareError';
import route from './router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(route);

app.use(error)

app.listen(PORT, () => console.log(`Rodando na posta ${PORT}`));
