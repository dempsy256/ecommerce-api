import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Configure the Swagger UI
  const config = new DocumentBuilder()
    .setTitle('E-Commerce API')
    .setDescription('The REST API documentation for our e-commerce system')
    .setVersion('1.0')
    .build();

  // 2. Create the document based on the configuration
  const document = SwaggerModule.createDocument(app, config);

  // 3. Setup the UI path (e.g., http://localhost:3000/api)
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();