import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/config/env.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './lib/all-exception-filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // App instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Initialize cores variable
  app.enableCors();

  // Body parser
  app.useBodyParser('json');

  // Set prefix
  app.setGlobalPrefix('api');

  // Initialize AllExceptionFilter
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Initialize swagger
  const options = new DocumentBuilder()
    .setTitle('Dibo computers')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const PORT = config.serverPort || 1100;
  await app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/docs`);
  });
}
bootstrap();
