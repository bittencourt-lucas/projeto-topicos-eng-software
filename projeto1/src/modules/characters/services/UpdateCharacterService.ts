import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import Character from '@modules/characters/infra/typeorm/entities/Character';

interface IRequest {
  character_id: string;
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
class UpdateCharacterRepository {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
  ) {}

  public async execute({
    character_id,
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
    const character = await this.charactersRepository.findById(character_id);

    if (!character) {
      throw new AppError('Character not found');
    }

    character.name = name;
    character.character_points = character_points;
    character.strength = strength;
    character.ability = ability;
    character.toughness = toughness;
    character.armor = armor;
    character.firepower = firepower;
    character.current_health = current_health;
    character.total_health = total_health;
    character.current_mana = current_mana;
    character.total_mana = total_mana;
    character.experience_points = experience_points;
    character.advantages = advantages;
    character.disadvantages = disadvantages;
    character.damage_types = damage_types;
    character.known_spells = known_spells;
    character.inventory = inventory;
    character.history = history;

    return this.charactersRepository.save(character);
  }
}

export default UpdateCharacterRepository;
