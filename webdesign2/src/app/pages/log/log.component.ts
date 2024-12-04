
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { RunnerService } from '../../services/runner.service';
import { WorkoutService } from '../../services/workout.service';
import { Runner } from '../../models/runner.model';
import { Workout } from '../../models/workout.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class LogComponent implements OnInit {
  runners: Runner[] = [];
  workouts: Workout[] = [];
  selectedRunnerId: number | null = null;
  selectedWorkoutId: number | null = null;

  constructor(
    private runnerService: RunnerService,
    private workoutService: WorkoutService,
    private router: Router // Properly inject Router
  ) {}

  ngOnInit(): void {
    this.runners = this.runnerService.getRunners();
    this.workouts = this.workoutService.getWorkouts();
  }

  logWorkout(): void {
    if (this.selectedRunnerId && this.selectedWorkoutId) {
      this.router.navigate(['/evaluation', this.selectedRunnerId, this.selectedWorkoutId]);
    } else {
      console.error('Please select both a runner and a workout.');
    }
  }
}















