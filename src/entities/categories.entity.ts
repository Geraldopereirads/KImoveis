import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RealEstate } from "./realStates.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;
}

export { Category };
