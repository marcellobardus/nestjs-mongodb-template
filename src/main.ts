import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8086, "0.0.0.0");
}

async function serviceWorker() {
  const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
  while (true) {
    await snooze(1000);
    console.log();
  }
}

serviceWorker();
bootstrap();
