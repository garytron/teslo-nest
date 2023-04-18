import { BadRequestException, Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const pathImage = join(__dirname, '../../static/products', imageName);

    if (!existsSync(pathImage))
      throw new BadRequestException(`No product found with image ${imageName}`);

    return pathImage;
  }
}
