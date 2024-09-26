# CEG3900 Database Design

## Models

* Conceptual Model
   * ![conceptual model](models/conceptualmodel.png)
* Logical Model
   * ![logical model](models/logicalmodel.png)
* Physical Model
   * ![physical model](models/physicalmodel.png)

## Docker Compose File

* ![dockercompose](images/dockercompose.png)
* Link to file
   * [docker-compose.yml](docker-compose.yml)


## Create Database

* ![db](images/db1.png)
* ![db](images/db2.png)
* Link to file:
   * [init.sql script](init.sql)

## Create Common Query Scripts

* ![chasescript](images/chasescript.png)
* Link to file
   * [chasescript.sql](SQL-Toolbox/chasescript.sql)
* Description
   * First query loads all the values
   * Second query selects workouts and evaluations based on the `runnerID`
   * Third query filters based on the time of the day (in this case morning)
   * Forth query requests all the information about a runner in the `Runner` table based on their first and last name attributes
   * Fifth query calculates the total distance run from all runs by a particular runner



