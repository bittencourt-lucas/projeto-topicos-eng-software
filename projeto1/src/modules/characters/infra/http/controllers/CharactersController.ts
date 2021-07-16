import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCharacterService from '@modules/characters/services/CreateCharacterService';
import ShowCharacterService from '@modules/characters/services/ShowCharacterService';
import ListAllCharactersFromUserService from '@modules/characters/services/ListAllCharactersFromUserService';
import UpdateCharacterService from '@modules/characters/services/UpdateCharacterService';
import DeleteCharacterService from '@modules/characters/services/DeleteCharacterService';

export default class CharactersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const {
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
    } = request.body;

    const createCharacter = container.resolve(CreateCharacterService);

    const character = await createCharacter.execute({
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

    return response.json(character);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { character_id } = request.params;

    const showCharacter = container.resolve(ShowCharacterService);

    const character = await showCharacter.execute({ character_id });

    return response.json(character);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listCharacters = container.resolve(ListAllCharactersFromUserService);

    const characters = await listCharacters.execute({ user_id });

    return response.json(characters);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { character_id } = request.params;

    const {
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
    } = request.body;

    const updateCharacter = container.resolve(UpdateCharacterService);

    const character = await updateCharacter.execute({
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
    });

    return response.json(character);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { character_id } = request.body;

    const deleteCharacter = container.resolve(DeleteCharacterService);

    await deleteCharacter.execute({
      character_id,
    });

    return response.status(204).send();
  }
}
