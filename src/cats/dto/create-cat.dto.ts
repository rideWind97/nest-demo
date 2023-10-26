/*
  create-cat.dto.ts
  DTO（数据传输对象）模式
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
