import { Router } from 'express';
import taskController from '../controller';

const route = Router();

route.get('/', taskController.read);

export default route;
