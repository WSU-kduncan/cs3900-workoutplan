# Project Requirements Document

## [Workout Application]

### Context

* Workout App is a software application that allows athletes, specifically runners to have an organized way of book keeping their workouts. The application has a simple and straightfoward user interface that does not require additonal knowledge to begin using the application. Using Workout App, the user can complete runs and then reflect on them via an evaluation tab. The runs will be stored, so users can go back and look at what they have completed in the past. This will eliminate the need for keeping track of past runs by hand.

* The current status of this application is in development

### Use Cases

* "This is "Aaron Wilson with TS2 running team." Aaron has been a serious runner for 5 years and has completed many awesome accomplishments in his young lifetime such as numerous marathons, ultra-marathons, 5Ks, and any other imagineable distance. His teammates ask him about his past runs and races. After competing for years, the dates have started to mix in his head. "What years did I run the Boston Marathon?"

* Aarom has become a trusted mentor for other young mentors. He wants to help them and give them advice from his past endeavors. He does not want to mislead them and tell them inaccurate things. Aaron is only 25 and still has many years of running to go. He likes to try and have a sense for what he has done, but running every day for 5 years takes a lot of paper to document, let alone keep track of it all.  He has been trying to write workouts down on paper, but after all these years it is getting cluttered. He often likes to look back at the past to improve, and formulate his upcoming running schedule. He also has a full time job. Running is a hobby and he wants it to stay enjoyable. Running is hard enough. He does not want to deal with a complex data recording practices anymore. He wishes there was a simple way of digitally storing runs from this point foward. He just wants something where he can enter thoughts and comments after his runs as well as the logistics such as pace, distance, etc. in a simple application. He wants to focus on improving at running and not mess around with a complex systems. 

### Objectives

* This mission of Workout App is to "provide athletes with a means of storing and reflecting on workouts with a simple application that organizes and remembers their runs for them."
* The target customers for Workout App are runners who want a way to keep track of what they have run from this point forward.
* The goals for Workout App:
   * 85% of users can enter workouts, and see past workouts they have logged without training
   * 15% reduction of time spent organizing workouts by paper/pencil route over the course of 6 months

### Assumptions

* The following assumptions have been made while creating the Product Requirement Document:
   * We have the knowledge of running and the features runners would want
   * We will have sufficient time to build this application
   * We will have access to AWS, SQL, Docker, GIT, etc. and the other needed tools

### Requirements

* Each runner is able to enter general information about his/herself
    * gender
    * height
    * age
    * weight
* Each runner can choose from a list of types of workouts and choose what fit theirs promptly after completing a run
    * Long run
    * Race
    * Tempo
    * Etc..
* Each runner can reflect on their workout and add feedback
    * date of evaluation
    * city and state where run was completed
    * time of the run
    * distance ran
    * time of day workout occcured
    * average heart rate
    * comments up to the user

### Scope

* The scope of this project includes
    * database creation using MariaDB
    * Frontend development using Angular
    * Backend development, connecting frontend to the database using JAVA
 
* Outside the scope of this project
    * Commenting on others runs
    * Creating a social media type of application for runners. This is not us
    * Tagging someone else if a workout was ran together


### Performance

* The following performance metrics
    * Application loads within 3 seconds
    * The time to move from one page to another is less than 1 second

### Open Questions

* Reference questions document

***
