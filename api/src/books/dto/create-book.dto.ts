import { IsString, IsInt, IsOptional, Min, MaxLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  @MaxLength(100)
  author: string;

  @IsString()
  isbn: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsInt()
  @Min(1)
  totalCopies: number;

  @IsInt()
  genreId: number;
}