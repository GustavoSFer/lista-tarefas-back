import { Router } from 'express';
import taskController from '../controller';

const route = Router();

route.get('/', taskController.read);
route.post('/', taskController.create);

export default route;
