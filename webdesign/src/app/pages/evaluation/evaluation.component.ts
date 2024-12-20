

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { start } from 'node:repl';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  standalone:true
})



export class EvaluationComponent implements OnInit {
  evaluationForm: FormGroup;
  runner_id!: number;
  workout_id!: number;
  evaluation_date!: Date;
  city!: string;
  state_code!: string;
  start_time!: string;
  end_time!: string;
  distance!: number;
  average_heart_rate!: number;
  feel_score_rating!: number;
  comments!: string;
  workoutName!: string;
  runnerName!: string;

  state_codes: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID',
    'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
    'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV',
    'WI', 'WY'
  ];

  feel_score_ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder
  ) {
    // Initialize the reactive form with validation
    this.evaluationForm = this.fb.group({
      evaluationDate: ['', Validators.required],
      city: ['', Validators.required],
      stateCode: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      distance: [0, [Validators.required, Validators.min(0)]],
      averageHeartRate: [0, [Validators.required, Validators.min(0)]],
      feelScoreRating: [0, [Validators.required, Validators.min(0)]],
      comments: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    // Retrieve parameters from the route
    this.route.params.subscribe(params => {
      this.runner_id = +params['runner_id'];
      this.workout_id = +params['workout_id'];
      this.workoutName = params['workoutName'];
      this.runnerName = params['runnerName'];
      console.log(`Runner ID: ${this.runner_id}, Workout ID: ${this.workout_id}`);
    });
  }

  submitEvaluation(): void {
    const evaluation = {
      runner_id: this.runner_id,
      workout_id: this.workout_id,
      evaluation_date: this.evaluation_date,
      city: this.city,
      state_code: this.state_code,
      start_time: this.start_time,
      end_time: this.end_time,
      distance: this.distance,
      average_heart_rate: this.average_heart_rate,
      feel_score_rating: this.feel_score_rating,
      comments: this.comments,
    };
    console.log('Evaluation Submitted:', evaluation);
    this.router.navigate(['/']);
  
  }
}




















/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  runner_id!: number; 
  workout_id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve parameters from the route
    this.route.params.subscribe(params => {
      this.runner_id = +params['runner_id']; 
      this.workout_id = +params['workout_id'];
      console.log(`Runner ID: ${this.runner_id}, Workout ID: ${this.workout_id}`);
    });
  }
}
*/