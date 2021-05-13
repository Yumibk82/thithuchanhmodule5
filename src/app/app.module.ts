import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookSearchComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
