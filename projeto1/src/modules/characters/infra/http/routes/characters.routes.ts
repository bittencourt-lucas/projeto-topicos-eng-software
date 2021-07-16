import { Router } from 'express';

import CharactersController from '@modules/characters/infra/http/controllers/CharactersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const charactersRouter = Router();
const charactersController = new CharactersController();

charactersRouter.post(
  '/',
  ensureAuthenticated,
  charactersController.create,
);

charactersRouter.get(
  '/:character_id',
  ensureAuthenticated,
  charactersController.index,
);

charactersRouter.get(
  '/me/list',
  ensureAuthenticated,
  charactersController.list,
);

charactersRouter.put(
  '/:character_id',
  ensureAuthenticated,
  charactersController.update,
)

charactersRouter.delete(
  '/',
  ensureAuthenticated,
  charactersController.delete,
);

export default charactersRouter;
