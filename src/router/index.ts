import { Router } from 'express';
import taskController from '../controller';
import validacoes from '../middleware/validacoes';

const route = Router();

route.get('/', taskController.read);
route.post('/', validacoes.validationTask ,taskController.create);
route.put('/', validacoes.validationUpdate, taskController.update);
route.delete('/:id', taskController.remove);

export default route;
