CREATE DATABASE IF NOT EXISTS workoutDB;

USE workoutDB;

DROP TABLE IF EXISTS Runner;

-- Create Table
CREATE TABLE Runner (
         runnerID INTEGER(10) AUTO_INCREMENT NOT NULL COMMENT 'Runner ID',
         firstName VARCHAR(50) NOT NULL COMMENT 'First Name',
         lastName VARCHAR(50) NOT NULL COMMENT 'Last Name',
         gender CHAR(10) NOT NULL COMMENT 'Gender',
         height DEC(5,2) NOT NULL COMMENT 'Height',
         age TINYINT(3) NOT NULL COMMENT 'Age',
         weight DEC(5,1) NOT NULL COMMENT 'Weight',
         PRIMARY KEY (runnerID)
)
COMMENT 'Runner'
;

DROP TABLE IF EXISTS Workout;


CREATE TABLE Workout (
        workoutID INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Workout ID',
        workoutType TINYINT(2) NOT NULL COMMENT 'type',
        PRIMARY KEY (workoutID)
)

COMMENT 'Workout'
;

DROP TABLE IF EXISTS Evaluation;


CREATE TABLE Evaluation (
        evaluationID INTEGER(10) NOT NULL AUTO_INCREMENT COMMENT 'Evaluation ID',
        runnerID INTEGER(10) NOT NULL COMMENT 'Runner ID FK',
        workoutID INTEGER(10) NOT NULL COMMENT 'Workout ID',
        evaluationDate DATE NOT NULL COMMENT 'Day of Evaluation',
        city VARCHAR(25) NOT NULL COMMENT 'city',
        stateCode VARCHAR(2) NOT NULL COMMENT 'state',
        startTime TIME NOT NULL COMMENT 'starting time',
        endTime TIME NOT NULL COMMENT 'ending time',
        distance DEC(5,2) NOT NULL COMMENT 'distance ran',
        timeOfDay CHAR(1) NOT NULL COMMENT 'time of day',
        averageHeartRate TINYINT(3) COMMENT 'average heart rate',
        feelScoreRating TINYINT(2) COMMENT 'rating',
        comments VARCHAR(2000) COMMENT 'comments',
        PRIMARY KEY (evaluationID),
        FOREIGN KEY (runnerID) REFERENCES Runner(runnerID),
        FOREIGN KEY (workoutID) REFERENCES Workout(workoutID),
        CONSTRAINT CHECK (timeOfDay IN ('M', 'm', 'A', 'a', 'E', 'e', 'N', 'n')),
        CONSTRAINT CHECK (averageHeartRate > 20 AND averageHeartRate < 220),
        CONSTRAINT CHECK (feelScoreRating BETWEEN 1 AND 10)

)
COMMENT 'Evaluation'

;

