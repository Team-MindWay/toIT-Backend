import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Member {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string
}
