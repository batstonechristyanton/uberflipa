import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { NutrientsModule } from './nutrients/nutrients.module';
import { UserFoodsModule } from './user-foods/user-foods.module';
import { UserReportController } from './user-report/user-report.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    UserFoodsModule,
    FoodsModule,
    NutrientsModule,
  ],
  controllers: [AppController, UserReportController],
  providers: [AppService],
})
export class AppModule {}
