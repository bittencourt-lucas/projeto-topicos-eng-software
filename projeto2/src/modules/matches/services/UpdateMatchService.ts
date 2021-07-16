import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Match from '../infra/typeorm/schemas/Match';
import IMatchesRepository from '../repositories/IMatchesRepository';

interface IRequestDTO {
  match_id: string;
  blue_score: number;
  red_score: number;
}

@injectable()
class UpdateMatchService {
  constructor(
    @inject('MatchesRepository')
    private matchesRepository: IMatchesRepository,
  ) {}

  public async execute({
    match_id,
    blue_score,
    red_score,
  }: IRequestDTO): Promise<Match> {
    const match = await this.matchesRepository.findById(match_id);

    if (!match) {
      throw new AppError('Match does not exist.');
    }

    match.blue_score = blue_score;
    match.red_score = red_score;

    return this.matchesRepository.update(match);
  }
}

export default UpdateMatchService;
