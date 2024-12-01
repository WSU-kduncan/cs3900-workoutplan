import { Component } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-saved-workouts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-workouts.component.html',
  styleUrl: './saved-workouts.component.css'
})
export class SavedWorkoutsComponent {
  workouts: Workout[] = [];
  selectedWorkout: Workout | null = null;
  workoutForm: FormGroup;
  isLoading = false;

  constructor(
    private readonly workoutService: WorkoutService,
    private fb: FormBuilder
  ) {
    // Initialize the reactive form with validation
    this.workoutForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(1)]],
      type: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workouts = this.workoutService.getWorkouts();
  }

  selectWorkout(workout: Workout) {
    this.selectedWorkout = workout;
    this.workoutForm.patchValue(workout);
  }

  deleteWorkout(workout_id: number) {
    this.workoutService.deleteWorkout(workout_id);
    this.loadWorkouts();
  }

  resetForm() {
    this.workoutForm.reset({ runner_id: 0, type: ''});
    this.selectedWorkout = null;
    this.isLoading = false;
  }

  get workout_id() {
    return this.workoutForm.get('id');
  }

  get type() {
    return this.workoutForm.get('type');
  }
}


