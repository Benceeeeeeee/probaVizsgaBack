import { IsDefined, IsInt, IsPositive } from "class-validator";

export class CreateBookDto {
    @IsDefined()
    title: string;
    @IsDefined()
    author: string;
    @IsDefined()
    @IsInt()
    publish_year: number;
    @IsDefined()
    @IsInt()
    @IsPositive()
    page_count: number;
}