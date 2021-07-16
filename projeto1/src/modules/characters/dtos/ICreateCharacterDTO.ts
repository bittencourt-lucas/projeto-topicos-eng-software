export default interface ICreateCharacterDTO {
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
