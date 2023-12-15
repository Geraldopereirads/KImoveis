import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./Addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./Schedules.entity";

@Entity("realEstates")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    default: 0,
  })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => Address, (a) => a.realEstate, {
    eager: true,
  })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category)
  category: Category;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<Schedule>;
}
