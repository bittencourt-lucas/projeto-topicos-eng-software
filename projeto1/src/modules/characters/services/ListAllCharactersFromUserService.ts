import { injectable, inject } from 'tsyringe';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import Character from '@modules/characters/infra/typeorm/entities/Character';

interface IRequest {
  user_id: string;
}

@injectable()
class ListAllCharactersFromUserService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Character[] | []> {
    const characters = await this.charactersRepository.findAllFromUser(user_id);

    return characters;
  }
}

export default ListAllCharactersFromUserService;
