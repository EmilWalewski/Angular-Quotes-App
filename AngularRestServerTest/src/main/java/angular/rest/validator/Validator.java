package angular.rest.validator;

import java.util.ArrayList;
import java.util.List;

public class Validator {

    List<String> errors;

    public Validator() {
        errors = new ArrayList<>();
    }

    public void addError(String message){
        errors.add(message);
    }

    public List<String> getErrors() {
        return errors;
    }
}
