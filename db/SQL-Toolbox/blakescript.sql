USE workoutDB

SELECT *
FROM Runner;

SELECT COUNT(EvaluationID) AS EvaluationCount
FROM Evaluation
WHERE RunnerID = NULL -- NULL can be changed to a specific RunnerID
GROUP BY RunnerID;

SELECT *
FROM Evaluation
WHERE RunnerID = NULL -- NULL can be changed to a specific RunnerID
GROUP BY RunnerID;

SELECT RunnerID, Workout.Type
FROM Evaluation
INNER JOIN Workout ON Evaluation.WorkoutID = Workout.WorkoutID
WHERE Workout.Type = NULL; -- NULL can be changed to a specific workout type

SELECT *
FROM Runner
LEFT JOIN Evaluation ON Runner.RunnerID = Evaluation.RunnerID
LEFT JOIN Workout ON Evaluation.WorkoutID = Workout.WorkoutID;

