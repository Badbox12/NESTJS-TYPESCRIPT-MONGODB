import { Category } from "../schemas/Book.schema";


export class CreateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}