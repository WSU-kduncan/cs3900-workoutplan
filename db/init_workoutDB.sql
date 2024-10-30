CREATE DATABASE IF NOT EXISTS workoutDB;

USE workoutDB;

DROP TABLE IF EXISTS runner;

-- Create Table

CREATE TABLE Runner (
         runnerID INTEGER(10) AUTO_INCREMENT NOT NULL COMMENT 'Runner ID',
	 email VARCHAR(40) NOT NULL COMMENT 'Email',
         firstName VARCHAR(50) NOT NULL COMMENT 'First Name',
         lastName VARCHAR(50) NOT NULL COMMENT 'Last Name',
         gender CHAR(10) NOT NULL COMMENT 'Gender',
         height DEC(5,2) NOT NULL COMMENT 'Height',
         age INTEGER(3) NOT NULL COMMENT 'Age',
         weight DEC(5,1) NOT NULL COMMENT 'Weight',
         PRIMARY KEY (runnerID)
)
COMMENT 'Runner'
;

DROP TABLE IF EXISTS workout;


CREATE TABLE workout (
        workout_id INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Workout ID'
            ,PRIMARY KEY (workout_id)
        ,workout_type TINYINT(2) NOT NULL COMMENT 'type'
)

COMMENT 'Workout'
;

DROP TABLE IF EXISTS evaluation;


CREATE TABLE evaluation (
        evaluation_id INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Evaluation ID'
            ,PRIMARY KEY (evaluation_id)
        ,runner_id INTEGER(10) NOT NULL COMMENT 'Runner ID FK'
            ,FOREIGN KEY (runner_id) REFERENCES runner(runner_id)
        ,workout_id INTEGER(10) NOT NULL COMMENT 'Workout ID'
            ,FOREIGN KEY (workout_id) REFERENCES workout(workout_id)
        ,evaluation_date DATE NOT NULL COMMENT 'Day of Evaluation'
        ,city VARCHAR(25) NOT NULL COMMENT 'city'
        ,state_code VARCHAR(2) NOT NULL COMMENT 'state'
        ,start_time TIME NOT NULL COMMENT 'starting time'
        ,end_time TIME NOT NULL COMMENT 'ending time'
        ,distance DEC(5,2) NOT NULL COMMENT 'distance ran'
        ,time_of_day CHAR(1) NOT NULL COMMENT 'time of day'
            ,CONSTRAINT CHECK (time_of_day IN ('M', 'm', 'A', 'a', 'E', 'e', 'N', 'n'))
        ,average_heart_rate TINYINT(3) COMMENT 'average heart rate'
            ,CONSTRAINT CHECK (average_heart_rate > 20 AND average_heart_rate < 220)
        ,feel_score_rating TINYINT(2) COMMENT 'rating'
            ,CONSTRAINT CHECK (feel_score_rating BETWEEN 1 AND 10)
        ,comments VARCHAR(2000) COMMENT 'comments'

)
COMMENT 'Evaluation'

;

