import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { VendorsModule } from './vendors/vendors.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, ClientsModule, VendorsModule, ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
