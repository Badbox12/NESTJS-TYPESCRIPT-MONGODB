import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/Book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService){

    }

    @Get()
    async getAllBook(): Promise<Book[]>{
        return this.bookService.findAll()
    }

    @Get(':id')
    async getOneBook(@Param('id') id: string): Promise<Book>{
        
        return this.bookService.findById(id)
    }
    @Post()
    async createBook(@Body() book: CreateBookDto): Promise<Book>{
        return this.bookService.create(book)
    }


}
