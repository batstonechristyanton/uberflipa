import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';

let foodService: FoodsService;
let foodController: FoodsController;

const mockFoodService = {
  create: jest.fn().mockImplementation((createFoodDto: CreateFoodDto) => {
    return {
      id: 584334,
      ...createFoodDto,
    };
  }),
};
const mockRemoveFood = {
  remove: jest.fn().mockImplementation((id: number) => {
    return {
      id: 155555,
    };
  }),
};
const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
}));

describe('FoodsController', () => {
  let controller: FoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodsController],
      providers: [
        FoodsService,
        { provide: getRepositoryToken(Food), useClass: mockRepository },
      ],
    })
      .overrideProvider(FoodsService)
      .useValue(mockFoodService)
      .compile();

    controller = module.get<FoodsController>(FoodsController);
    foodService = module.get<FoodsService>(FoodsService);
    foodController = module.get<FoodsController>(FoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a food ', () => {
    expect(foodController.create(mockFoodService)).toEqual({
      id: expect.any(Number),
      ...mockFoodService,
    });
  });
});
