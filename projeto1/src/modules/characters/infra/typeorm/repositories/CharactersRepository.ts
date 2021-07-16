import { getRepository, Repository } from 'typeorm';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';

import Character from '@modules/characters/infra/typeorm/entities/Character';

class CharactersRepository implements ICharactersRepository {
  private ormRepository: Repository<Character>;

  constructor() {
    this.ormRepository = getRepository(Character);
  }

  public async findById(id: string): Promise<Character | undefined> {
    const character = await this.ormRepository.findOne(id);

    return character;
  }

  public async findAllFromUser(user_id: string): Promise<Character[] | []> {
    const characters = await this.ormRepository.find({
      where: { user_id },
    });

    return characters;
  }

  public async create(characterData: ICreateCharacterDTO): Promise<Character> {
    const character = this.ormRepository.create(characterData);

    await this.ormRepository.save(character);

    return character;
  }

  public async save(character: Character): Promise<Character> {
    return this.ormRepository.save(character);
  }

  public async delete(character: Character): Promise<void> {
    await this.ormRepository.remove(character);
  }
}

export default CharactersRepository;
