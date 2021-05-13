import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book={};

  constructor(private bookService: BookService) {

   }

  ngOnInit() {
  }

  addNewBook(form:NgForm){
    let newBook=form.value;
    this.bookService.createNewBook(newBook).subscribe(()=>{
      console.log('Create successful');
      this.book={};
      }, e => {
        console.log(e);
      });
    }
  }

