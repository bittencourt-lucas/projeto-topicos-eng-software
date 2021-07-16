import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IMatchesRepository from '../repositories/IMatchesRepository';

interface IRequestDTO {
  match_id: string;
}

@injectable()
class DeleteMatchService {
  constructor(
    @inject('MatchesRepository')
    private matchesRepository: IMatchesRepository,
  ) {}

  public async execute({ match_id }: IRequestDTO): Promise<void> {
    const match = await this.matchesRepository.findById(match_id);

    if (!match) {
      throw new AppError('Match does not exist.');
    }

    await this.matchesRepository.delete(match);
  }
}

export default DeleteMatchService;
