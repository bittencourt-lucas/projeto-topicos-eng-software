import { injectable, inject } from 'tsyringe';

import IMatchesRepository from '@modules/matches/repositories/IMatchesRepository';

import Match from '@modules/matches/infra/typeorm/schemas/Match';

interface IRequest {
  user_blue_id: string;
  user_red_id: string;
  blue_score: number;
  red_score: number;
  turns: number;
}

@injectable()
class CreateMatchService {
  constructor(
    @inject('MatchesRepository')
    private matchesRepository: IMatchesRepository,
  ) {}

  public async execute({
    user_blue_id,
    user_red_id,
    blue_score,
    red_score,
    turns,
  }: IRequest): Promise<Match> {
    const match = await this.matchesRepository.create({
      user_blue_id,
      user_red_id,
      blue_score,
      red_score,
      turns,
    });

    return match;
  }
}

export default CreateMatchService;
