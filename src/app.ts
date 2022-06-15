import express from 'express';
import route from './router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log(`Rodando na posta ${PORT}`));
