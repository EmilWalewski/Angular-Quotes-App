import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Routing } from './resources/routing/routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HoverDirective } from './resources/directives/hover.directive';
import { QuotesSectionComponent } from './components/quotes-section/quotes-section.component';
import { QuotesInsertSectionComponent } from './components/quotes-insert-section/quotes-insert-section.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { RemoveWrapperDirective } from './resources/directives/remove-wrapper.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HoverDirective,
    QuotesSectionComponent,
    QuotesInsertSectionComponent,
    QuotesListComponent,
    RemoveWrapperDirective
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
