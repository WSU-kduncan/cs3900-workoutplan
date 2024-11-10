## GET
- Requires: search term
- Optional: page number, results per page, sort field, and sort order
- Returns: A selection of valid entries based on the parameters, HTTP status
- Database Query:
```sql
SELECT e.evaluation_id AS evaluationID
    e.runner_id AS runnerID
    e.workout_id AS workoutID
    e.evaluation_date AS evaluationDate
    e.city AS city
    e.state_code AS stateCode
    e.start_time AS startTime
    e.end_time AS endTime
    e.distance AS distance
    e.time_of_day AS timeOfDay
    e.average_heart_rate AS averageHeartRate
    e.feel_score_rating AS feelScoreRating
    e.comments AS comments
FROM evaluation e
WHERE (:search IS NULL
    OR (e.evaluation_id LIKE %:search%
    OR e.city LIKE %:search%
    OR e.state_code LIKE %:search%
    OR e.distance LIKE %:search%
))
```
## POST
- Requires: Evaluation ID
- Returns: HTTP Status

## PUT
- Requires: Evaluation ID
- Returns: HTTP Status

## DELETE
- Requires: Evaluation ID
- Returns: HTTP Status