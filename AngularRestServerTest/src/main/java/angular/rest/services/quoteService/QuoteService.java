package angular.rest.services.quoteService;

import angular.rest.models.Quote;

import java.util.List;

public interface QuoteService {

    List<Quote> getQuotes();

    String addQuote(Quote quote);
}
