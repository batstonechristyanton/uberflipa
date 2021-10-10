import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserReportController } from "./user-report.controller";
import { UserReport } from "./entites/user-report-entity";
import { UserReportService } from "./user-report.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserReport])],
  controllers: [UserReportController],
  providers: [UserReportService],
})
export class UserReportModule {}
