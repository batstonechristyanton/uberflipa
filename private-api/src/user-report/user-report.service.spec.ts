import { Test, TestingModule } from "@nestjs/testing";
import { UserReportService } from "./user-report.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { UserReport } from "./entites/user-report-entity";

const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe("UserReportService", () => {
  let service: UserReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserReportService,
        { provide: getRepositoryToken(UserReport), useClass: mockRepository },
      ],
    }).compile();

    service = module.get<UserReportService>(UserReportService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
