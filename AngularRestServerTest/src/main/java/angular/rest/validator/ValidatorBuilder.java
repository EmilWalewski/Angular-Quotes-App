package angular.rest.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

import java.util.List;

public class ValidatorBuilder {

    public static List<String> validate(Errors errors){
        Validator validator = new Validator();

        for (ObjectError error: errors.getAllErrors()){
            validator.addError(error.getDefaultMessage());
        }

        return validator.getErrors();
    }
}
