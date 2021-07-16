import { container } from 'tsyringe';

import IMatchesRepository from '@modules/matches/repositories/IMatchesRepository';
import MatchesRepository from '@modules/matches/infra/typeorm/repositories/MatchesRepository';

container.registerSingleton<IMatchesRepository>(
  'MatchesRepository',
  MatchesRepository,
);

