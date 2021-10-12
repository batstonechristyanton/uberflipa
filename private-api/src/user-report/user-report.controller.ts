import { Controller, Get, Param } from "@nestjs/common";
import { FoodNutrient } from "../food-nutrients/entities/food-nutrient.entity";
import { Nutrient } from "../nutrients/entities/nutrient.entity";
import { UserFood } from "../user-foods/entities/user-food.entity";
import { getConnection } from "typeorm";
@Controller("users/:userId/reports")
export class UserReportController {
  @Get(":most-consumed-nutrient")
  async report(@Param("userId") userId: number) {
    const firstUser = await getConnection()
      .createQueryBuilder(Nutrient, "nutrient")
      .innerJoinAndSelect(
        FoodNutrient,
        "foodnutrient",
        "foodnutrient.nutrient_id = nutrient.id"
      )
      .innerJoinAndSelect(
        UserFood,
        "userfood",
        "userfood.food_id = foodnutrient.food_id"
      )
      .where("userfood.user_id = :id", { id: `${userId}` })
      .orderBy("userfood_servings_per_week", "DESC")
      .getRawOne();

    const returnObject = {
      id: firstUser.nutrient_id,
      name: firstUser.nutrient_name,
      unitName: firstUser.nutrient_unit_name,
      weeklyAmout: firstUser.userfood_servings_per_week,
    };

    return returnObject;
  }
}
