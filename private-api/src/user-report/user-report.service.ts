import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserReport } from "./entites/user-report-entity";
import { Repository } from "typeorm";

@Injectable()
export class UserReportService {
  constructor(
    @InjectRepository(UserReport)
    private userReportRepository: Repository<UserReport>
  ) {}
}
