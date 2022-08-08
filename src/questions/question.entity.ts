import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    message: string

    @Column()
    answer: string
}