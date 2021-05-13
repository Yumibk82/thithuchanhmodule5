import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const routes: Routes = [
  {
    path:'books',
    component: BookListComponent
  },
  {
    path:'books/edit/:id',
    component: BookUpdateComponent
  },
  {
    path:'books/create',
    component: BookCreateComponent
  },
  {
    path:'books/delete/:id',
    component: BookDeleteComponent
  },
  {
    path:'books/search',
    component: BookSearchComponent
  },
  {
    path: 'books/detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
