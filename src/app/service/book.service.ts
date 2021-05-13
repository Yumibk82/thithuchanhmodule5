import {Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Book } from '../model/book';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${API_URL}/books`);
  }

  getBookById(id:number): Observable<Book> {
    return this.httpClient.get<Book>(`${API_URL}/books/${id}`);
  }
  createNewBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${API_URL}/books`, book);
  }
  updateBookInfo(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${API_URL}/books/${id}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${API_URL}/books/${id}`);
  }
}
