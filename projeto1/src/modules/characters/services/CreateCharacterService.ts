import { injectable, inject } from 'tsyringe';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import Character from '@modules/characters/infra/typeorm/entities/Character';

interface IRequest {
  user_id: string;
  name: string;
  character_points: number;
  strength: number;
  ability: number;
  toughness: number;
  armor: number;
  firepower: number;
  current_health: number;
  total_health: number;
  current_mana: number;
  total_mana: number;
  experience_points: number;
  advantages: string;
  disadvantages: string;
  damage_types: string;
  known_spells: string;
  inventory: string;
  history: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({
    user_id,
    name,
    character_points,
    strength,
    ability,
    toughness,
    armor,
    firepower,
    current_health,
    total_health,
    current_mana,
    total_mana,
    experience_points,
    advantages,
    disadvantages,
    damage_types,
    known_spells,
    inventory,
    history,
   }: IRequest): Promise<Character> {

    const character = await this.charactersRepository.create({
      user_id,
      name,
      character_points,
      strength,
      ability,
      toughness,
      armor,
      firepower,
      current_health,
      total_health,
      current_mana,
      total_mana,
      experience_points,
      advantages,
      disadvantages,
      damage_types,
      known_spells,
      inventory,
      history,
    });

    return character;
  }
}

export default CreateUserService;
