import { Component, OnInit, Input, OnChanges, AfterContentChecked } from '@angular/core';
import { Quote } from 'src/app/resources/classes/quote';
import { SendQuoteService } from 'src/app/resources/services/send-quote.service';

@Component({
  selector: 'app-quotes-section',
  templateUrl: './quotes-section.component.html',
  styleUrls: ['./quotes-section.component.css']
})
export class QuotesSectionComponent implements OnInit {

  quoteList: Array<Quote> = [];

  constructor(private quoteService: SendQuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotesObsList().subscribe(array => {
      this.quoteList = array;
    });
  }

  getQuote(quote) {
    console.log(quote);
    this.quoteService.sendQuote(quote);
  }


}
