import { Router } from 'express';

import MatchesController from '@modules/matches/infra/http/controllers/MatchesController';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.post(
  '/',
  matchesController.create,
);

matchesRouter.get(
  '/:match_id',
  matchesController.show,
);

matchesRouter.get(
  '/list/:user_id',
  matchesController.list,
);

matchesRouter.patch(
  '/:match_id',
  matchesController.update,
);

matchesRouter.delete(
  '/:match_id',
  matchesController.delete,
);

export default matchesRouter;
