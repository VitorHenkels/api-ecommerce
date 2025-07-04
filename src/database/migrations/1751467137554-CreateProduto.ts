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
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100'
                    },
                    {
                        name: 'preco',
                        type: 'decimal',
                        precision: 10,
                        scale: 2
                    },
                    {
                        name: 'descicao',
                        type: 'text',
                        isNullable: true
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos")
    }

}
