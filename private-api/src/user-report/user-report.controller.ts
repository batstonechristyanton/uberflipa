import { Controller, Get, Param } from "@nestjs/common"; 
import { User } from "src/users/entities/user.entity";
import {getConnection} from "typeorm";
@Controller("users/:userId/reports")
export class UserReportController {
  @Get(":most-consumed-nutrient") 
  async report(@Param("userId") userId: number) { 
    const firstUser = await getConnection()
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .getOne();
 
    return firstUser;
  }
}
