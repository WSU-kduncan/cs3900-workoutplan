import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RunnerComponent } from './pages/runner/runner.component';
import { AboutComponent } from './pages/about/about.component';
import { LogComponent } from './pages/log/log.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkoutComponent } from './pages/workout/workout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workouts', component: WorkoutComponent },
  { path: 'runners', component: RunnerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'log', component: LogComponent},
  //{ path: 'evaluation', component: EvaluationComponent}
  { path: 'evaluation/:runner_id/:workout_id/:workoutName/:runnerName', component: EvaluationComponent },
];
