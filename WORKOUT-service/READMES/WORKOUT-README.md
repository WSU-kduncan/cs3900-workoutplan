## GET
- Requires: nothing, a Runner can just search for every workout they have done
- Optional: page number, results per page, sort field, and sort order
- Returns: workout results based on the parameters or HTTP status
- Database Query:
```sql
"SELECT w.workout_id AS workoutId"
    +", w.runner_id AS runnerId"
    +", w.evaluation_id AS evaluationId"
    +", w.type AS type"
+" FROM workout w"
+" WHERE (:search IS NULL"
    +", OR (w.workout_id LIKE %:search%"
    +", OR w.runner_id LIKE %:search%"
    +", OR w.evaluation_id LIKE %:search%"
+"))"
```
## POST
- Requires: a workoutId to create the workout
- Returns: HTTP Status

## PUT
- Requires: workoutId to find a valid workout
- Returns: HTTP Status

## DELETE
- Requires: workoutId to find a valid workout
- Returns: HTTP Status
