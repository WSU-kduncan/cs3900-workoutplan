
package com.wsu.workoutservice.exception;

import com.wsu.workoutservice.dto.ServiceResponseDTO;
import java.util.Map;
//import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.validation.FieldError;
//import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import static com.wsu.workoutservice.utilities.Constants.ERROR_MESSAGE;
import static com.wsu.workoutservice.utilities.Constants.MESSAGE;

//@ControllerAdvice annotation in Spring is used to define a class that handles exceptions across multiple controllers in an application
@ControllerAdvice
public class ControllerExceptionHandler {

    //@ExceptionHandler annotation in Spring Boot is used to handle exceptions that are thrown by a specific controller/service method
    @ExceptionHandler({RuntimeException.class, DatabaseErrorException.class})
    public ResponseEntity<ServiceResponseDTO> handleInternalServerException(RuntimeException e) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, e.getMessage(), ERROR_MESSAGE, errorMessage(e))).build(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(InvalidRequestException.class)
    public ResponseEntity<ServiceResponseDTO> handleInvalidRequestException(InvalidRequestException e) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, e.getMessage())).build(), HttpStatus.BAD_REQUEST);
    }

    /**
     * This method used for build the error message based on exception thrown.
     * @param e - exception
     * @return - error message
     */
    private String errorMessage(RuntimeException e) {
        if (e.getCause() == null) {
            return "";
        }
        if (e.getCause().getCause() == null) {
            return e.getCause().getMessage();
        }
        return e.getCause().getMessage() + " " + e.getCause().getCause().getMessage();
    }

    /*
    private String formatErrorCode(String errorCode) {
        if (errorCode == null) {
            return "";
        }
        return errorCode.replaceAll("([a-z])([A-Z])", "$1_$2").toUpperCase();
    }
 */
}