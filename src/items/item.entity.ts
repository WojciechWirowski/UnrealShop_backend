import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    photoPath: string;

    @Column("int", { default: 0})
    price: number
}