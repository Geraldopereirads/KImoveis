import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { RealEstate } from "./realStates.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ type: "integer" })
  number: number;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @OneToOne(() => RealEstate, (r) => r.address, {
    onDelete: "CASCADE",
  })
  realEstate: RealEstate;
}

export { Address };
