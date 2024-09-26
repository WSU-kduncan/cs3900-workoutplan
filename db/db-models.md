# CEG3900 Database Design

## Models

* Conceptual Model
   * ![conceptual model](models/conceptualmodel.png)
Description:
`We have a table called which will hold the runner's data (should be called Runner but is misnamed Person in this model). This table will contain the Runner's ID, age, weight, height, and name which will be split into First and Last Name. This has a many to 1 relationship to Evaluation. Evaulation holds all the data for each workout a runner does. This will hold the evaluation ID, distance, date, start time, end time, city, state code, comment, rating, average heartrate, and time of day. Each evaluation is connected to a workout completed by the runner. The workout holds the type of workout and a workout ID.`
* Logical Model
   * ![logical model](models/logicalmodel.png)
Description:
`This shows the same relationships and tables as the conceptual model, but defines the keys for each table. Runner's primary key will be RunnerID. Evaluation's primary key will be EvaluationID. Evaluation is connected to Runner and Workout via foreign keys: RunnerID and WorkoutID. Workout's primary key is WorkoutID.`
* Physical Model
   * ![physical model](models/physicalmodel.png)
Description:
`The physical model goes into more depth than the logical model. This model shows the data type of each attribute in each table.`




