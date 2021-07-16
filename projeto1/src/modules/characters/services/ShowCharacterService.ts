import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import Character from '@modules/characters/infra/typeorm/entities/Character';

interface IRequest {
  character_id: string;
}

@injectable()
class ShowCharacterService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({ character_id }: IRequest): Promise<Character> {
    const character = await this.charactersRepository.findById(character_id);

    if (!character) {
      throw new AppError('Character not found');
    }

    return character;
  }
}

export default ShowCharacterService;
