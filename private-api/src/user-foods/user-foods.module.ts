import { Module } from '@nestjs/common';
import { UserFoodsService } from './user-foods.service';
import { UserFoodsController } from './user-foods.controller';
import { UserFood } from './entities/user-food.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReport } from '../user-report/entites/user-report-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFood])],
  controllers: [UserFoodsController],
  providers: [UserFoodsService],
})
export class UserFoodsModule {}
