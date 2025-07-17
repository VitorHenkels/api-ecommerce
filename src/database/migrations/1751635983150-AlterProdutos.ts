import { MigrationInterface, QueryRunner, TableColumn, TableExclusion } from "typeorm";

export class AlterProdutos1751635983150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('produtos',[
            new TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: true,
                default: 0
            }),
            new TableColumn({
                name: "ncm",
                type:"char",
                length: '8',
                isNullable:true
            })
        ])

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("produtos",["quantidade", "ncm"])
    }

}
