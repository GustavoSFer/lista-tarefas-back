import { Router } from 'express';
import taskController from '../controller';
import validacoes from '../middleware/validacoes';

const route = Router();

route.get('/', taskController.read);
route.post('/', validacoes.validationTask ,taskController.create);

export default route;
