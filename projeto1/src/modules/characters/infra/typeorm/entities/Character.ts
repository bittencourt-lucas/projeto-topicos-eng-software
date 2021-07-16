import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('characters')
class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  character_points: number;

  @Column()
  strength: number;

  @Column()
  ability: number;

  @Column()
  toughness: number;

  @Column()
  armor: number;

  @Column()
  firepower: number;

  @Column()
  current_health: number;

  @Column()
  total_health: number;

  @Column()
  current_mana: number;

  @Column()
  total_mana: number;

  @Column()
  experience_points: number;

  @Column()
  advantages: string;

  @Column()
  disadvantages: string;

  @Column()
  damage_types: string;

  @Column()
  known_spells: string;

  @Column()
  inventory: string;

  @Column()
  history: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Character;
