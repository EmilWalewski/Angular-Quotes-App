package angular.rest.controllers;

import angular.rest.models.Quote;
import angular.rest.services.quoteService.QuoteService;
import angular.rest.validator.ValidatorBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class QuotesRestController {

    private QuoteService quoteService;

    @Autowired
    public QuotesRestController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @GetMapping(value = "/quote")
    public ResponseEntity getQuotes(){

        return ResponseEntity.ok(quoteService.getQuotes());

    }

    @PostMapping(value = "/quote")
    public ResponseEntity addQuote(/*@Valid*/ @RequestBody Quote quote, Errors errors){

        if (errors.hasErrors()){
            return ResponseEntity.badRequest().body(ValidatorBuilder.validate(errors));
        }

        return ResponseEntity.ok(quoteService.addQuote(quote));

    }
}
