import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../classes/quote';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendQuoteService {

  private quotesArray: Array<Quote> = [];
  private quoteListObs = new Subject<Array<Quote>>();

  constructor(private httpClient: HttpClient) { }

  sendQuote(quote: Quote) {
    const p = new HttpHeaders().set('Accept', 'application/json;charset=utf-8');
    this.httpClient.post<Array<Quote>>('http://localhost:8080/quote', quote, { responseType: 'json', headers: p })
    .pipe(map(data => {

    }));
      // .subscribe(response => {
      //   this.quotesArray.unshift(JSON.parse(response.quote));
      //   this.quoteListObs.next(this.quotesArray);
      // }, error => {
      //   console.log(error);
      // });
  }

  getQuotesList() {
    this.httpClient.get<Array<Quote>>('http://localhost:8080/quote', { responseType: 'json' })
      .subscribe(array => {
        this.quotesArray = array;
        this.quoteListObs.next(this.quotesArray);
      });
  }

  getQuotesObsList(): Observable<Array<Quote>> {
    console.log('dlugosc tablicy' + this.quotesArray.length);
    if (this.quotesArray.length <= 0) {
      this.getQuotesList();
    }
    return this.quoteListObs.asObservable();
  }


}

interface SendQuote {
  quote: string;
  title: string;
  content: string;
}


// {"quote":"Quote{id=6, author='jan kowalski', quote='A kto umarl, ten nie zyjee', rating=0}",
// "title":"Confirmation","content":"Quote has been added"}
