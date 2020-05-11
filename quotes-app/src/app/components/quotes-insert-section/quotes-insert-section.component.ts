import { Component, OnInit, Input, AfterContentChecked, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/resources/classes/quote';
import { ToggleInsertSectionService } from 'src/app/resources/services/toggle-insert-section.service';

@Component({
  selector: 'app-quotes-insert-section',
  templateUrl: './quotes-insert-section.component.html',
  styleUrls: ['./quotes-insert-section.component.css']
})
export class QuotesInsertSectionComponent implements OnInit {

  hideInsertSection;

  @Output()
  quoteEmitter = new EventEmitter<Quote>();

  quote: Quote = { author: '', quote: '', rating: 0 };

  constructor(private toggleService: ToggleInsertSectionService) { }

  ngOnInit(): void {
    this.toggleService.getToggle().subscribe(toggle => {
      this.hideInsertSection = toggle;
    });
  }
  add() {
    this.quoteEmitter.emit(this.quote);
    this.quote = { author: '', quote: '', rating: 0 };
  }


}
