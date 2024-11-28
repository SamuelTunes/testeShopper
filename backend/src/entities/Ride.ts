import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Driver } from "./Driver";

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  customerId!: number;

  @ManyToOne(() => Driver)
  driver!: Driver;

  @Column()
  origin!: string;

  @Column()
  destination!: string;

  @Column("decimal", { precision: 5, scale: 2 })
  cost!: number;

  @Column({ default: false })
  confirmed!: boolean;
}
