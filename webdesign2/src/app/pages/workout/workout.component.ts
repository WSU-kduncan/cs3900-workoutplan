

import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class WorkoutComponent {
  workouts: any[] = [];
  newWorkoutType: string = '';
  editWorkoutType: string = '';
  workoutToEditId: number | null = null;
  errorMessage: string = ''; // For storing error messages

  constructor(private workoutService: WorkoutService) {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = this.workoutService.getWorkouts();
    console.log('Loaded workouts:', this.workouts);
  }

  addWorkout() {
    if (this.containsNumbers(this.newWorkoutType)) {
      this.errorMessage = 'Workout type cannot contain numbers.';
    } else if (this.newWorkoutType.trim()) {
      this.workoutService.addWorkout(this.newWorkoutType);
      this.newWorkoutType = '';
      this.errorMessage = ''; // Clear the error
      this.loadWorkouts();
    }
  }

  startEditing(workoutId: number) {
    const workout = this.workouts.find(w => w.id === workoutId);
    if (workout) {
      this.workoutToEditId = workout.id;
      this.editWorkoutType = workout.workoutType;
    }
  }

  saveEdit() {
    if (this.containsNumbers(this.editWorkoutType)) {
      this.errorMessage = 'Workout type cannot contain numbers.';
    } else if (this.workoutToEditId !== null && this.editWorkoutType.trim()) {
      this.workoutService.editWorkout(this.workoutToEditId, this.editWorkoutType);
      this.workoutToEditId = null;
      this.editWorkoutType = '';
      this.errorMessage = ''; 
      this.loadWorkouts();
    }
  }

  deleteWorkout(workoutId: number) {
    this.workoutService.deleteWorkout(workoutId);
    this.loadWorkouts();
  }

  containsNumbers(value: string): boolean {
    // Check if the value contains any numbers
    return /\d/.test(value);
  }
}



































/*import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  
})
export class WorkoutComponent {
  workouts: any[] = [];  
  newWorkoutType: string = '';  
  editWorkoutType: string = '';  
  workoutToEditId: number | null = null;  

  constructor(private workoutService: WorkoutService) {
    this.loadWorkouts();  
  }


  loadWorkouts() {
    this.workouts = this.workoutService.getWorkouts();
    console.log('Loaded workouts:', this.workouts);  // Log the workouts to the console
  }

  addWorkout() {
    if (this.newWorkoutType.trim()) {
      this.workoutService.addWorkout(this.newWorkoutType);
      this.newWorkoutType = '';  
      this.loadWorkouts();  
    }
  }


  startEditing(workoutId: number) {
    const workout = this.workouts.find(w => w.id === workoutId);
    if (workout) {
      this.workoutToEditId = workout.id;
      this.editWorkoutType = workout.workoutType;
    }
  }


  saveEdit() {
    if (this.workoutToEditId !== null && this.editWorkoutType.trim()) {
      this.workoutService.editWorkout(this.workoutToEditId, this.editWorkoutType);
      this.workoutToEditId = null;
      this.editWorkoutType = '';  
      this.loadWorkouts();  
    }
  }

  deleteWorkout(workoutId: number) {
    this.workoutService.deleteWorkout(workoutId);
    this.loadWorkouts();  
  }
}



*/













