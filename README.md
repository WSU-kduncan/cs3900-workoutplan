# Workout App


## Components

1. Business Requirements
    * [Business Requirements](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/BusinessRequirements)
2. Agile
    * [Agile](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/agile)
3. Database
    * [Database](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/db)
    * To start up run: `docker compose up` in terminal
4. UIUX
    * [UIIX](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/uiux)
5. Microservices
    * [Microservices](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/microservices)
    * To start up run in vscode (You may be asked to click on it at the top)
6. Web Design
    * [Web Design](https://github.com/WSU-kduncan/cs3900-workoutplan/tree/main/webdesign)
    * To start up run: `ng serve`


## Capabilities
1. Navigation bar at the top helps users find the operations they want to do.
2. Users can see the first 10 runners of the database in the "Runners" page.
    * TODO: add search bar to search by name, age, etc.
3. Users can add a new runner by filling in the information in the "Add New Runner" form and clicking the "Add Runner" button in the "Runners" page.
4. Users can edit a runner by clicking the desired runner's "Edit" button, updating the information in the "Edit Runner" form, and clicking the "Update Runner" button in the "Runners" page.
5. Users can delete a runner by clicking the desired runner's "Delete" button in the "Runners" page.

## Future Works
 * Make a table which displays all the workouts a particular runner has completed once the evaluation is finished
 * Make a table for the coach which displays all the workouts from every runner
 * Allow workouts to be sorted/filtered
 * Connect the endpoints for Evaluation and Workouts to the frontend
 * Make into a mobile app
