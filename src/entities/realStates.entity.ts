import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Schedule } from "./Schedules.entity";
import { Address } from "./Addresses.entity";
import { Category } from "./categories.entity";

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
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt?: string | Date;

  @UpdateDateColumn()
  updatedAt?: string | Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (c) => c.realStates)
  category: Category;

  @OneToMany(() => Schedule, (r) => r.realEstate)
  schedules: Array<Schedule>;
}
