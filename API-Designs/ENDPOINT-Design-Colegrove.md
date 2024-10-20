# Blake Colegrove

## Special Topics in Computer Science

### `GET`
* @GETMapping would occur in the `RunnerController` class
* The user would login which would attempt to request a Runner's profile based on a database search of the `runnerID`. This will pull up all relevant Runner data via a `get()` and will include `runnerID`, name (`firstName` + ' ' + `lastName`), `gender`, `height`, `weight`, and `age`.

### `POST`
* @POSTMapping would occur in the `RunnerController` class. 
* This handles the creation and saving of a Runner. It will send an HTTP error message if an exception occurs if the user tries to create an account (a `Runner`) and a `Runner` already exists with the same `runnerID`. Exceptions would be handled by the DTO.
* The user will need to provide the Runner's `firstName`, `lastName`, `gender`, `height`, `age`, and `weight`. The `runnerID` will be generated on the backend.
* Example)
* `
@PostMapping
  public ResponseEntity<RunnerResponseDTO> createRunner(@RequestBody @Valid RunnerDTO runnerDTO) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Runner created successfully"))
                .data(runnerService.save(runnerrDTO)).build(), HttpStatus.OK);
    } `
* `
public RunnerDTO save(RunnerDTO runnerDTO) {
        if (runnerRepository.existsById(runnerDTO.getId())) {
            throw new InvalidRequestException("Runner already exist with this id.");
        }
        try {
            return convertToDTO(runnerRepository.save(convertToEntity(runnerDTO)));
        } catch (Exception e) {
            log.error("Failed to create new runner. Exception:", e);
            throw new DatabaseErrorException("Failed to create new runner", e);
        } `

### `PUT`
* @PUTMapping would occur in the `RunnerController` class.
* It would handle updating a current account (`Runner`).
* An exception would occur if the `Runner` does not exist or if necessary fields are left NULL. Necessary fields include any that have been altered or deleted. 
* Would occur in an `update()` method.
* Example)
* `
@PutMapping("/{runnerId}")
    public ResponseEntity<RunnerResponseDTO> updateRunner(@PathVariable Integer runnerId,
                                                             @RequestBody @Valid RunnerDTO runnerDTO) {
          try {
            RunnerDTO updatedRunner = runnerService.update(runnerId, runnerDTO);
            //HTTP Status 200
            return new ResponseEntity<>(RunnerResponseDTO.builder()
                    .meta(Map.of(MESSAGE, "Runner updated successfully."))
                    .data(updatedRunner)
                    .build(), HttpStatus.OK);
        } catch (InvalidRequestException e) {
            //HTTP status 400
            return handleValidationErrorResponse (e);
        } catch (DatabaseErrorException e) {
            //HTTP status 500
            return handleErrorResponse("Failed to update runner.", e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            //other exceptions
            return handleErrorResponse("Failed to update runner.", e.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    } `

### `DELETE`
* @DELETEMapping would occur in the `RunnerController` class.
* It would handle deleting a `Runner` based on the provided `runnerID`.
* Example)
* `
public void delete(Integer runnerID){
        if(!runnerRepository.existsById(runnerID)){
            throw new InvalidRequestException("Invalid runnerID");
        }
        try {
            runnerRepository.deleteById(id);
        } catch (Exception e) {
            log.error("Failed to delete Runner, runnerId:{}. Exception:{}", id, e);
            throw new DatabaseErrorException("Failed to delete runner", e);
        }
    } `
 
