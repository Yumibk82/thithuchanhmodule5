import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  @Output()
  s= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  search(value:string){
    this.s.emit(value);
  }

}
