import Character from '@modules/characters/infra/typeorm/entities/Character';
import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';

export default interface ICharactersRepository {
  findById(id: string): Promise<Character | undefined>;
  findAllFromUser(user_id: string): Promise<Character[] | []>;
  create(data: ICreateCharacterDTO): Promise<Character>;
  save(user: Character): Promise<Character>;
  delete(user: Character): Promise<void>;
}
