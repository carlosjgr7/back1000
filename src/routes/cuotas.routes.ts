import { Router } from 'express';
import { getAllCuotas } from '../controllers/plancuotas.controlles';

const router: Router = Router();

router.route('/plancuotas').get(getAllCuotas);

export default router;
 