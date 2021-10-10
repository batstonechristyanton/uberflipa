import { FoodNutrient } from "../../food-nutrients/entities/food-nutrient.entity";
import { UserFood } from "../../user-foods/entities/user-food.entity";
import { Nutrient } from "../../nutrients/entities/nutrient.entity";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from "typeorm";

@Entity()
export class UserReport extends BaseEntity {
  @PrimaryGeneratedColumn()
  userReportId: number;

  @Column()
  name: string;

  @Column()
  unitName: string;

  @Column()
  weeklAmount: number;

  @ManyToOne(
    () => FoodNutrient,
    (foodNutrient) => foodNutrient.userReportToFoodNutrient
  )
  foodNutrient: FoodNutrient;

  @ManyToOne(() => UserFood, (userFood) => userFood.userReportToUserFood)
  userFood: UserFood;

  @ManyToOne(() => Nutrient, (nutrient) => nutrient.userReportToNutreint)
  nutrient: Nutrient;
}
