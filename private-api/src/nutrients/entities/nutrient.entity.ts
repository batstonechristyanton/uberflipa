import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
// import { UserReport } from '../../user-report/entites/user-report-entity';
@Entity({ name: 'nutrients' })
export class Nutrient extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('varchar', { length: 255, name: 'name' })
  name: string;

  @Column('varchar', { length: 255, name: 'unit_name' })
  unitName: string;

  @Column('int', { name: 'rank' })
  rank: number;

  @Column('decimal', { precision: 6, scale: 1, name: 'nutrient_code' })
  nutrientCode!: number;

  // @OneToMany(() => UserReport, (userReport) => userReport.nutrient)
  // userReportToNutreint!: UserReport[];
}
