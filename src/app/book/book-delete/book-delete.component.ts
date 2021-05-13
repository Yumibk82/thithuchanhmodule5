import { BookService } from 'src/app/service/book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
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
deleteBook(id){
  this.bookService.deleteBook(id).subscribe(()=>{
  console.log('Delete successfully')})
}
}
