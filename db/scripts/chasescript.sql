USE workoutDB;

-- View all records
SELECT * FROM workoutDB.Runner;
SELECT * FROM workoutDB.Workout;
SELECT * FROM workoutDB.Evaluation;

-- Select workouts and evaluation based off certain runnerID
-- runnerID here is kind of a filler and subject to change
-- use alias here as seen in videos
SELECT *
FROM Evaluation e
JOIN Workout w ON e.workoutID = w.workoutID
WHERE e.RunnerID = 0000000000;


-- select RunnerID and workout based on time of the day
-- in this case morning
SELECT DISTINCT  Evaluation.runnerID, Workout.*
FROM Evaluation
JOIN Workout ON Evaluation.workoutID = Workout.workoutID
WHERE Evaluation.timeOfDay= 'M' OR Evaluation.timeOfDay= 'm';

-- Search for information about a runner by their lastName and firstName
-- Smith is a placeholder
SELECT * FROM Runner
WHERE Runner.lastName= 'Smith' AND Runner.firstName = 'Joe';

-- View the total distance run by a runner
SELECT Runner.runnerID, SUM(Evaluation.distance) AS totalDistanceRun
FROM Evaluation
JOIN Runner ON Evaluation.runnerID = Runner.runnerID
GROUP BY Runner.RunnerID;

