import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  usersController.create,
);

usersRouter.get(
  '/me',
  ensureAuthenticated,
  usersController.show,
);

usersRouter.put(
  '/me',
  ensureAuthenticated,
  usersController.update,
)

usersRouter.delete(
  '/',
  ensureAuthenticated,
  usersController.delete,
);

export default usersRouter;
