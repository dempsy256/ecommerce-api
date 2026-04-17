import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Wireless Headphones', description: 'The name of the product' })
  name!: string;

  @ApiPropertyOptional({ example: 'Noise-cancelling over-ear headphones' })
  description?: string;

  @ApiProperty({ example: 199.99, description: 'The price of the product' })
  price!: number;

  @ApiProperty({ example: 1, description: 'The ID of the vendor selling this product' })
  vendorId!: number;
}