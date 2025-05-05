import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { RealEstate } from "./realStates.entity";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;
}
