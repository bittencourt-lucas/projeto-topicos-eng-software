import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Match from '../infra/typeorm/schemas/Match';
import IMatchesRepository from '../repositories/IMatchesRepository';

interface IRequestDTO {
  match_id: string;
}

@injectable()
class ShowMatchService {
  constructor(
    @inject('MatchesRepository')
    private matchesRepository: IMatchesRepository,
  ) {}

  public async execute({ match_id }: IRequestDTO): Promise<Match> {
    const match = await this.matchesRepository.findById(match_id);
    if (!match) {
      throw new AppError('Match does not exist.');
    }
    return match;
  }
}

export default ShowMatchService;
