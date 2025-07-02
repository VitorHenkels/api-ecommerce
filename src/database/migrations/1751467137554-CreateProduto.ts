import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1751467137554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: 'id',
                        type: "int",
                        isPrimary: true,
                        isGenerated: true, //autoincrement
                        generationStrategy: "increment"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
