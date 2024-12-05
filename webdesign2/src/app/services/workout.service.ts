
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable({
    providedIn: 'root' 
})
export class WorkoutService {

private workouts: Workout[] = [
    { workout_id: 1, workout_type: 'Long Run' },
    { workout_id: 2, workout_type: 'Easy Run' },
    { workout_id: 3, workout_type: 'Hard Run' },
    { workout_id: 4, workout_type: 'Tempo' },
    { workout_id: 5, workout_type: 'Fartlek' },
    { workout_id: 6, workout_type: 'Race' },
    { workout_id: 7, workout_type: 'Strides' },
    { workout_id: 8, workout_type: 'Progression Run' },
    { workout_id: 9, workout_type: 'Heartrate Run' },
    { workout_id: 10, workout_type: 'Speed Work' }
];


getWorkouts() {
    console.log('Fetching all workouts:', this.workouts);
    return this.workouts;
}

addWorkout(workoutType: string) {
    const newWorkout = {
        workout_id: this.workouts.length + 1, 
        workout_type: workoutType
    };
    this.workouts.push(newWorkout);
    console.log('Workout added:', newWorkout);
}

  // Edit a workout by ID
editWorkout(id: number, updatedWorkoutType: string) {
    const workout = this.workouts.find(w => w.workout_id === id);
    if (workout) {
        workout.workout_type = updatedWorkoutType;
        console.log('Workout updated:', workout);
    } else {
        console.log('Workout not found for update.');
    }
}

  // Delete a workout by ID
deleteWorkout(id: number) {
    const initialLength = this.workouts.length;
    this.workouts = this.workouts.filter(w => w.workout_id !== id);
    if (this.workouts.length < initialLength) {
        console.log(`Workout with ID ${id} deleted. Remaining workouts:`, this.workouts);
    } else {
        console.log('Workout not found for deletion.');
    }
}

}





















/*import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model'; // Import the Workout model

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: Workout[] = [
    { workout_id: 1, workout_type: 'Long Run' },
    { workout_id: 2, workout_type: 'Easy Run' },
    { workout_id: 3, workout_type: 'Hard Run' },
    { workout_id: 4, workout_type: 'Tempo' },
    { workout_id: 5, workout_type: 'Fartlek' },
    { workout_id: 6, workout_type: 'Race' },
    { workout_id: 7, workout_type: 'Strides' },
    { workout_id: 8, workout_type: 'Progression Run' },
    { workout_id: 9, workout_type: 'Heart Rate Run' },
    { workout_id: 10, workout_type: 'Speed Work' },
  ];

  getWorkouts(): Workout[] {
    console.log('Fetching all workouts:', this.workouts);
    return this.workouts;
  }

  addWorkout(workoutType: string): void {
    const newWorkout: Workout = {
      workout_id: this.workouts.length + 1,
      workout_type: workoutType,
    };
    this.workouts.push(newWorkout);
    console.log('Workout added:', newWorkout);
  }

  editWorkout(id: number, updatedWorkoutType: string): void {
    const workout = this.workouts.find((w) => w.workout_id === id);
    if (workout) {
      workout.workout_type = updatedWorkoutType;
      console.log('Workout updated:', workout);
    } else {
      console.log('Workout not found for update.');
    }
  }

  deleteWorkout(id: number): void {
    const initialLength = this.workouts.length;
    this.workouts = this.workouts.filter((w) => w.workout_id !== id);
    if (this.workouts.length < initialLength) {
      console.log(`Workout with ID ${id} deleted. Remaining workouts:`, this.workouts);
    } else {
      console.log('Workout not found for deletion.');
    }
  }
}

*/



































/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' 
})
export class WorkoutService {

private workouts = [
    { id: 1, workoutType: 'Long Run' },
    { id: 2, workoutType: 'Easy Run' },
    { id: 3, workoutType: 'Hard Run' },
    { id: 4, workoutType: 'Tempo' },
    { id: 5, workoutType: 'Fartlek' },
    { id: 6, workoutType: 'Race' },
    { id: 7, workoutType: 'Strides' },
    { id: 8, workoutType: 'Progression Run' },
    { id: 9, workoutType: 'Heartrate Run' },
    { id: 10, workoutType: 'Speed Work' }
];

/*constructor(private http: HttpClient){
    this.http.get('http://localhost:8080').subscribe( {
    next:(response:) =>{ 
        // do some processing here
        this.runners = response.runners;
    }, error:(err) => {
    console.error(err);
    }, complete:() => {
    // process runners 
    }
});

} */
/*
getWorkouts() {
    console.log('Fetching all workouts:', this.workouts);
    return this.workouts;
}

addWorkout(workoutType: string) {
    const newWorkout = {
        id: this.workouts.length + 1, 
        workoutType: workoutType
    };
    this.workouts.push(newWorkout);
    console.log('Workout added:', newWorkout);
}

  // Edit a workout by ID
editWorkout(id: number, updatedWorkoutType: string) {
    const workout = this.workouts.find(w => w.id === id);
    if (workout) {
        workout.workoutType = updatedWorkoutType;
        console.log('Workout updated:', workout);
    } else {
        console.log('Workout not found for update.');
    }
}

  // Delete a workout by ID
deleteWorkout(id: number) {
    const initialLength = this.workouts.length;
    this.workouts = this.workouts.filter(w => w.id !== id);
    if (this.workouts.length < initialLength) {
        console.log(`Workout with ID ${id} deleted. Remaining workouts:`, this.workouts);
    } else {
        console.log('Workout not found for deletion.');
    }
}

}
*/