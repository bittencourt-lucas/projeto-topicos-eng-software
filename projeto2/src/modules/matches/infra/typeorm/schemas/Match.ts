import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('matches')
class Match {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('uuid')
  user_blue_id: string;

  @Column('uuid')
  user_red_id: string;

  @Column()
  blue_score: number;

  @Column()
  red_score: number;

  @Column()
  turns: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Match;
