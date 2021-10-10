import { Controller, Get, Param } from "@nestjs/common";
@Controller("users/:userId/reports")
export class UserReportController {
  @Get(":most-consumed-nutrient")
  report(@Param("userId") userId: number) {
    return " here is the route for users consumed nutrient";
  }
}
