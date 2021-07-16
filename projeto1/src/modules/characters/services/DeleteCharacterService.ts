import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

interface IRequestDTO {
  character_id: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({ character_id }: IRequestDTO): Promise<void> {
    const character = await this.charactersRepository.findById(character_id);

    if (!character) {
      throw new AppError('Character does not exist.');
    }

    await this.charactersRepository.delete(character);
  }
}

export default DeleteUserService;
