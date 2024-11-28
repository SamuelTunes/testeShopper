import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  licensePlate!: string;

  @Column({ default: 0 })
  kilometers!: number;
}
