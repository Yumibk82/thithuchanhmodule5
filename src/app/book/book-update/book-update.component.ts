import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: Book={};
  bookForm: FormGroup= new FormGroup({
    id: new FormControl(),
        title: new FormControl(),
        author: new FormControl(),
        description: new FormControl()
  });
  id = -1;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { 
                this.activatedRoute.paramMap.subscribe(paramMap => {
                  this.id= +paramMap.get('id');
                  this.getBookById(this.id);
                  });
                }
  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(book=>{
      this.bookForm= new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      })
    })
  }
             
  ngOnInit() {
  }
  updateBookInfor(id){
    let newBook=this.bookForm.value;
    this.bookService.updateBookInfo(id,newBook).subscribe(()=>{
      console.log('update successfully');
    })
  }
}
