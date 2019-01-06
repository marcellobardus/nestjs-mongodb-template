import { Module } from "@nestjs/common";
import { RegisterUsersController } from "./register.users.controller";
import { UsersService } from "../users.service";
import { usersProviders } from "../users.providers";
import { DatabaseModule } from "../../../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterUsersController],
  providers: [UsersService, ...usersProviders]
})
export class RegisterUsersModule {}
