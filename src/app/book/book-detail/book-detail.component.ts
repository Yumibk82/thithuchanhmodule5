import { BookService } from 'src/app/service/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book={};
  bookId=-1;
  constructor(private bookService: BookService,
    private route: ActivatedRoute) {
      this.route.paramMap.subscribe(paramId=>{
        this.bookId=+paramId.get('id');
        this.bookService.getBookById(this.bookId).subscribe(book=>{
          this.book=book;
        })
      })
     }
  ngOnInit() { 
  }

}
