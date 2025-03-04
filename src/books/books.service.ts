import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly db: PrismaService){}
  
  create(createBookDto: CreateBookDto) {
    return this.db.books.create({
      data: createBookDto
    })
  }

  findAll() {
    return this.db.books.findMany();
  }

  findOne(id: number) {
    return this.db.books.findUnique({
      where:{
        id: id
      }
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.db.books.update({
      where:{
        id: id
      },
      data: updateBookDto
    })
  }

  remove(id: number) {
    return this.db.books.delete({
      where:{
        id: id
      }
    })
  }
}
