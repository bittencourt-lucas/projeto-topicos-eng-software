import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateCharacters1621563518679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'characters',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'user_id',
              type: 'uuid',
              isNullable: false,
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'character_points',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'strength',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'ability',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'toughness',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'armor',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'firepower',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'current_health',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'total_health',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'current_mana',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'total_mana',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'experience_points',
              type: 'integer',
              isNullable: false,
            },
            {
              name: 'advantages',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'disadvantages',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'damage_types',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'known_spells',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'inventory',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'history',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );

      await queryRunner.createForeignKey(
        'characters',
        new TableForeignKey({
          name: 'CharacterUser',
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('characters');
    }

}
