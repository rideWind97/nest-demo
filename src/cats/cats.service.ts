import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// 负责数据存储和检索，操作数据
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ name: '奶牛猫', age: 1, breed: '' }];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
