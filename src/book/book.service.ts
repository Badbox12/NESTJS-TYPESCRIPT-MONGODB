import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/Book.schema';
import * as mongoose from 'mongoose'
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ){}

    async findAll() {
        const books = await this.bookModel.find()
        return books
    }

    async create(book: Book): Promise<Book> {
        const res = await this.bookModel.create(book)
        return res
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(+id)
            console.log(book)
        if(!book){
            throw new NotFoundException('Book Not found.')
        } 


        return book;
    }
}
