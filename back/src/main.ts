import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('보일플레이트 API')
    .setDescription('보일플레이트 개발을 위한 API 문서 입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(cookieParser());
  if (process.env.NODE_ENV === 'production') {
    app.use(
      session({
        saveUninitialized: false,
        resave: false,
        secret: process.env.COOKIE_SECRET,
        proxy: true,
        cookie: {
          domain: '.test.com', // 실제 도메인 정보
          httpOnly: true, // 자바스크립트를 통해 세션 쿠키를 사용 할 수 없도록 함
          secure: true, // https 환경에서만 세션 정보 주고 받도록 처리 https 가 있으면 true
          // maxAge: 60 * 60 * 1000,
        },
      }),
    );
  } else {
    app.use(
      session({
        saveUninitialized: false,
        resave: false,
        secret: process.env.COOKIE_SECRET,
      }),
    );
  }
  app.use(passport.initialize());
  app.use(passport.session());

  const PORT = 4000;
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  console.log(process.env.COOKIE_SECRET);
  console.log(`server listening on port ${PORT}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
