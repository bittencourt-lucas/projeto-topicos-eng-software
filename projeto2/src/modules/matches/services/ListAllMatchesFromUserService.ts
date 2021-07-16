import { inject, injectable } from 'tsyringe';
import Match from '../infra/typeorm/schemas/Match';
import IMatchesRepository from '../repositories/IMatchesRepository';

interface IRequestDTO {
  user_id: string;
}

@injectable()
class ListAllMatchesFromUserService {
  constructor(
    @inject('MatchesRepository')
    private matchesRepository: IMatchesRepository,
  ) {}

  public async execute({ user_id }: IRequestDTO): Promise<Match[] | null> {
    const matches = await this.matchesRepository.listAllFromUser(user_id);

    return matches;
  }
}

export default ListAllMatchesFromUserService;
