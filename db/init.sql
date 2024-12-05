CREATE DATABASE IF NOT EXISTS workoutDB;

USE workoutDB;

DROP TABLE IF EXISTS runner;

-- Create Table
CREATE TABLE runner (
         runner_id INTEGER(10) AUTO_INCREMENT NOT NULL COMMENT 'Runner ID',
         email VARCHAR(40) NOT NULL COMMENT 'Email',
         first_name VARCHAR(50) NOT NULL COMMENT 'First Name',
         last_name VARCHAR(50) NOT NULL COMMENT 'Last Name',
         gender CHAR(10) NOT NULL COMMENT 'Gender',
         height DEC(5,2) NOT NULL COMMENT 'Height',
         age INTEGER(3) NOT NULL COMMENT 'Age',
         weight DEC(5,1) NOT NULL COMMENT 'Weight',
         PRIMARY KEY (runner_id)
)
COMMENT 'Runner'
;

DROP TABLE IF EXISTS workout;


CREATE TABLE workout (
        workout_id INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Workout ID',
        workout_type VARCHAR(30) NOT NULL COMMENT 'type',
        PRIMARY KEY (workout_id)
)
COMMENT 'Workout'
;

-- Insert Types of Runs
INSERT INTO workout (workout_type) VALUES ('Long Run');
INSERT INTO workout (workout_type) VALUES ('Easy Run');
INSERT INTO workout (workout_type) VALUES ('Hard Run');
INSERT INTO workout (workout_type) VALUES ('Tempo');
INSERT INTO workout (workout_type) VALUES ('Fartlek');
INSERT INTO workout (workout_type) VALUES ('Race');
INSERT INTO workout (workout_type) VALUES ('Strides');
INSERT INTO workout (workout_type) VALUES ('Progression Run');
INSERT INTO workout (workout_type) VALUES ('Heartrate Run');
INSERT INTO workout (workout_type) VALUES ('Speed Work');

DROP TABLE IF EXISTS evaluation;


CREATE TABLE evaluation (
        evaluation_id INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Evaluation ID',
        runner_id INTEGER(10) NOT NULL COMMENT 'Runner ID FK',
        workout_id INTEGER(10) NOT NULL COMMENT 'Workout ID',
        evaluation_date DATE NOT NULL COMMENT 'Day of Evaluation',
        city VARCHAR(25) NOT NULL COMMENT 'city',
        state_code VARCHAR(2) NOT NULL COMMENT 'state',
        start_time TIME NOT NULL COMMENT 'starting time',
        end_time TIME NOT NULL COMMENT 'ending time',
        distance DEC(5,2) NOT NULL COMMENT 'distance ran',
        time_of_day CHAR(1) NOT NULL COMMENT 'time of day',
        average_heart_rate TINYINT(3) COMMENT 'average heart rate',
        feel_score_rating TINYINT(2) COMMENT 'rating',
        comments VARCHAR(2000) COMMENT 'comments',
        PRIMARY KEY (evaluation_id),
        FOREIGN KEY (runner_id) REFERENCES runner(runner_id),
        FOREIGN KEY (workout_id) REFERENCES workout(workout_id),
        CONSTRAINT CHECK (time_of_day IN ('M', 'm', 'A', 'a', 'E', 'e', 'N', 'n')),
        CONSTRAINT CHECK (average_heart_rate > 20 AND average_heart_rate < 220),
        CONSTRAINT CHECK (feel_score_rating BETWEEN 1 AND 10)

)
COMMENT 'Evaluation'

;
~                                                                                                                                                                                                                                                                                                                                                                                       ~                       
