import { Router } from 'express';

import matchesRouter from '@modules/matches/infra/http/routes/matches.routes';

const routes = Router();

routes.use('/matches', matchesRouter);

export default routes;
