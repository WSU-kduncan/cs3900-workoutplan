# Chase Ennis

## Special Topics in Computer Science

### Tasks

> The `RunnerID` attribute will be the most important for all of these.  
> To find information about a runner, most queries will be by the `RunnerID`


1. `GET`
* For this mapping, I believe we will have the `@GETMapping` in the `RunnerController` class that handles incoming requests
* Just a heads up, we will have a runner entity class with the following columns: `runnerID`, `firstName`, `lastName`, `gender`, `height`, `age`, `weight`
* We will also have a get() in the `RunnerService` class that takes care of business logic
* What I am thinking is being able to retrieve everything about a runner by passing in their `RunnerID`


2. `POST`
* We will have the `POSTMapping` in the `RunnerController` in a method called `createRunner()`
* Something like this:
  ```
  @PostMapping
  public ResponseEntity<RunnerResponseDTO> createRunner(@RequestBody @Valid RunnerDTO runnerDTO) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Runner created successfully"))
                .data(runnerService.save(runnerrDTO)).build(), HttpStatus.OK);
    }
  ```
* We will have a `save` method in the `RunnerService` class that looks for exceptions such as invalid field names, null values, etc.
* They will throw a `DatabaseExceptionError` if met
* Something like this:
  ```
      public RunnerDTO save(RunnerDTO runnerDTO) {
        if (runnerRepository.existsById(runnerDTO.getId())) {
            throw new InvalidRequestException("Runner already exist with this id.");
        }
        try {
            return convertToDTO(runnerRepository.save(convertToEntity(runnerDTO)));
        } catch (Exception e) {
            log.error("Failed to create new runner. Exception:", e);
            throw new DatabaseErrorException("Failed to create new runner", e);
        }
    }
  ```


4. `PUT`
* We will have the `PUTMapping` in the `RunnerController` class in a method called `updateRunner()`
* Something like this:
  ```
  @PutMapping("/{id}")
  public ResponseEntity<ServiceResponseDTO> updateRunner(@PathVariable Integer id, @RequestBody @Valid RunnerDTO runnerDTO) {
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Runner updated successfully"))
                .data(runnerService.update(id, runnerDTO)).build(), HttpStatus.OK);
    }
  ```
* We will have an `update()` method in the `RunnerService` that looks similar to:
  ```
  public RunnerDTO update(Integer id, RunnerDTO runnerDTO) {
        if (!runnerRepository.existsById(id)) {
            throw new InvalidRequestException("Invalid runner id.");
        }
        try {
            Runner runner = convertToEntity(runnerDTO);
            runner.setId(id);
            return convertToDTO(runnerRepository.save(runner));
        } catch (Exception e) {
            log.error("Failed to update runner, RunnerId:{}. Exception:{}", id, e);
            throw new DatabaseErrorException("Failed to update runner", e);
        }
    }
  ```

4. `DELETE`
* We will have the `DELETEMapping` in the `RunnerController` class in a methood called `deleteRunner`
* Something like this:
  ```
   @DeleteMapping("/{id}")
    public ResponseEntity<ServiceResponseDTO> deleteRunner(@PathVariable Integer id){
        runnerService.delete(id);
        return new ResponseEntity<>(ServiceResponseDTO.builder().meta(Map.of(MESSAGE, "Successfully deleted runner")));
    }
  ```
* We will have a `delete()` in the `RunnerService`
* Something like:
  ```
    public void delete(Integer id){
        if(!runnerRepository.existsById(id)){
            throw new InvalidRequestException("Invalid Runner ID");
        }
        try {
            runnerRepository.deleteById(id);
        } catch (Exception e) {
            log.error("Failed to delete Runner, runnerId:{}. Exception:{}", id, e);
            throw new DatabaseErrorException("Failed to delete runner", e);
        }
    }
  ```

