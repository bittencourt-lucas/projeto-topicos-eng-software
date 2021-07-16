import { getMongoRepository, MongoRepository } from 'typeorm';

import IMatchesRepository from '@modules/matches/repositories/IMatchesRepository';
import ICreateMatchDTO from '@modules/matches/dtos/ICreateMatchDTO';

import Match from '@modules/matches/infra/typeorm/schemas/Match';

class MatchesRepository implements IMatchesRepository {
  private ormRepository: MongoRepository<Match>;

  constructor() {
    this.ormRepository = getMongoRepository(Match, 'mongo');
  }

  public async create({
    user_blue_id,
    user_red_id,
    blue_score,
    red_score,
    turns,
  }: ICreateMatchDTO): Promise<Match> {
    const match = this.ormRepository.create({
      user_blue_id,
      user_red_id,
      blue_score,
      red_score,
      turns,
    });

    await this.ormRepository.save(match);

    return match;
  }

  public async update(match: Match): Promise<Match> {
    const matchUpdated = await this.ormRepository.save(match);

    return matchUpdated;
  }

  public async findById(match_id: string): Promise<Match | undefined> {
    const match = await this.ormRepository.findOne(match_id);

    return match;
  }

  public async listAllFromUser(user_id: string): Promise<Match[] | null> {
    const matches = await this.ormRepository.find({
      where: {
        $or: [
          { user_blue_id: user_id },
          { user_red_id: user_id },
        ],
      }
    });

    return matches;
  }

  public async delete(match: Match): Promise<void>{
    await this.ormRepository.remove(match);
  }
}

export default MatchesRepository;
