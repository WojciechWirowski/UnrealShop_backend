import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {

  // SWAGGER LINK http://localhost:3000/api/

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  })
  const config = new DocumentBuilder()
      .setTitle('Unreal Shop')
      .setDescription('The unreal shop API description')
      .setVersion('0.1')
      .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(3000);
}
bootstrap();
