import { IsEmail, IsNotEmpty } from 'class-validator';

export class HasUserDto {
  readonly userName: string;
  // readonly name?: string;
  readonly password?: string;
  // readonly isBannded?: boolean;
}
