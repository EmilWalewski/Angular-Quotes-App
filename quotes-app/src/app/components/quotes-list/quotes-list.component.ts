import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from 'src/app/resources/classes/quote';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  @Input()
  quoteList;

  @Output()
  ratingEmiter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    }

  upRate(quote: Quote){
    quote.rating += 1;
  }

  downRate(quote: Quote){
    quote.rating -= 1;
  }

}
