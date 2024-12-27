import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('house')
export class House {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ unique: true, nullable: false })
  name: string;
  @Column()
  houseColours: string;
  @Column()
  founder: string;
  @Column()
  animal: string;
  @Column()
  element: string;
  @Column()
  ghost: string;
  @Column()
  commonRoom: string;
  @Column()
  heads: Head[];
  @Column()
  traits: Trait[];
}

export class Head {
  id: string;
  firstName: string;
  lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Trait {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
