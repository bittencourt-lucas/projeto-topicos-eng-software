import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMatchService from '@modules/matches/services/CreateMatchService';
import UpdateMatchService from '@modules/matches/services/UpdateMatchService';
import DeleteMatchService from '@modules/matches/services/DeleteMatchService';
import ShowMatchService from '@modules/matches/services/ShowMatchService';
import ListAllMatchesFromUserService from '@modules/matches/services/ListAllMatchesFromUserService';

export default class MatchesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      user_blue_id,
      user_red_id,
      blue_score,
      red_score,
      turns,
    } = request.body;

    const createMatch = container.resolve(CreateMatchService);

    const match = await createMatch.execute({
      user_blue_id,
      user_red_id,
      blue_score,
      red_score,
      turns,
    });

    return response.json(match);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { match_id } = request.params;

    const showMatch = container.resolve(ShowMatchService);

    const match = await showMatch.execute({
      match_id,
    });

    return response.json(match);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listMatches = container.resolve(ListAllMatchesFromUserService);

    const matches = await listMatches.execute({
      user_id,
    });

    return response.json(matches);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const updateMatch = container.resolve(UpdateMatchService);

    const { blue_score, red_score } = request.body;

    const { match_id } = request.params;

    const matchUpdated = await updateMatch.execute({
      match_id,
      blue_score,
      red_score,
    });

    return response.json(matchUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteMatch = container.resolve(DeleteMatchService);

    const { match_id } = request.params;

    await deleteMatch.execute({
      match_id,
    });

    return response.status(204).send();
  }
}
