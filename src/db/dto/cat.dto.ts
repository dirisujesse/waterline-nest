import { IsNumber, IsNotEmpty, IsEmpty, IsString, IsOptional } from 'class-validator';

export class CatDto {
    @IsEmpty()
    @IsOptional()
    @IsString()
    public _id: string;

    @IsNotEmpty()
    @IsString()
    public name: string;

    @IsNotEmpty()
    @IsNumber()
    public age: number;

    @IsNotEmpty()
    @IsString()
    public breed: string;
}

export class UpdateCatDto {
    @IsEmpty()
    @IsOptional()
    @IsString()
    public _id: string;

    @IsString()
    public name: string;

    @IsNumber()
    public age: number;

    @IsString()
    public breed: string;
}
