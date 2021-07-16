import ICreateMatchDTO from '@modules/matches/dtos/ICreateMatchDTO';
import Match from '@modules/matches/infra/typeorm/schemas/Match';

export default interface IMatchesRepository {
  create(data: ICreateMatchDTO): Promise<Match>;
  update(match: Match): Promise<Match>;
  findById(match_id: string): Promise<Match | undefined>;
  listAllFromUser(user_id: string): Promise<Match[] | null>;
  delete(match: Match): Promise<void>;
}
