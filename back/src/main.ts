import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = 4000;
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  // console.log(process.env.COOKIE_SECRET);
  console.log(`server listening on port ${PORT}`);
}
bootstrap();
