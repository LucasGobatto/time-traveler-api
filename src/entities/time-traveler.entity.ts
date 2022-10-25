import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("time_traveler")
export class TimeTravelerEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  birthDate: Date;

  @Column()
  passport: string;
}
