import { Application } from 'express';

// routs
import culos from './cuotas.routes';

export default (app: Application) => {
	app.use(culos);
};
