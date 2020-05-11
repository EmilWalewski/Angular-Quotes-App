package angular.rest.services.quoteService;

import angular.rest.models.Quote;
import angular.rest.repositories.QuoteRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteServiceImp implements QuoteService {

    private QuoteRepository quoteRepository;

    @Autowired
    public QuoteServiceImp(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    @Override
    public List<Quote> getQuotes() {
        return quoteRepository.findAll();
    }

    @Override
    public String addQuote(Quote quote) {

        JSONObject jsonObject = new JSONObject();

        try{
           // quoteRepository.save(quote);
        }catch (Exception e){
            System.out.println(e);
            jsonObject.put("title", "Error");
            jsonObject.put("content", "Quote already exists");
            return jsonObject.toString();
        }

        JSONObject q = new JSONObject();
        q.put("id", quote.getId());
        q.put("author", quote.getAuthor());
        q.put("quote", quote.getQuote());
        q.put("rating", quote.getRating());

        jsonObject.put("title", "Confirmation");
        jsonObject.put("content", "Quote has been added");
        jsonObject.put("quote", q.toString());
        return jsonObject.toString();
    }
}
