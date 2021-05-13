import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  listBook: Book[]=[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.bookService.getAllBooks().subscribe(books =>{
      this.listBook=books;});
  }
  findBookByName(name: string){
    let books=[];
    for(let i=0;i<this.listBook.length;i++){
      if(this.listBook[i].title.includes(name)){
        books.push(this.listBook[i]);
      }
    }
    this.listBook=books;
  }
}
