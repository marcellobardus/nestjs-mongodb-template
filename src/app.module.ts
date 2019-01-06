import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { RegisterUsersModule } from "./controllers/users/register/register.users.module";
import { LoginUsersModule } from "./controllers/users/login/login.users.module";

@Module({
  imports: [RegisterUsersModule, LoginUsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
