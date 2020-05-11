package angular.rest.models;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "quote_table")
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 60, nullable = false)
    //@Pattern(regexp = "^[a-zA-Z- ]{5,60}", message = "Author is not allowed")
    private String author;

    @Column(unique = true, nullable = false)
    //@Pattern(regexp = "^[a-zA-Z,. ]{10,255}", message = "Quote is not allowed")
    private String quote;

    @Column(length = 5, nullable = false)
    private int rating;

    public Quote() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "{" +
                "id: " + id +
                ", author: '" + author + '\'' +
                ", quote: '" + quote + '\'' +
                ", rating: " + rating +
                '}';
    }
}
