import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,  
  imports: [CommonModule]  
})
export class HomeComponent {
  showAddWorkoutForm: boolean = false;
  showEditRunnerForm: boolean = false;
  showLogWorkoutForm: boolean = false;

  constructor(private router: Router) {} 

  toggleAddWorkoutForm(): void {
    this.showAddWorkoutForm = !this.showAddWorkoutForm;
    this.router.navigate(["workouts"]);
    //this.closeOtherForms('add');
  }


  toggleEditRunnerForm(): void {
    this.showEditRunnerForm = !this.showEditRunnerForm;
    //this.closeOtherForms('edit');
    this.router.navigate(["runners"]);
  }


  toggleDeleteWorkoutForm(): void {
    this.showLogWorkoutForm = !this.showLogWorkoutForm;
    //this.closeOtherForms("log");
    this.router.navigate(["log"]);
  }

  // Close other forms when opening one form
  private closeOtherForms(form: string): void {
    if (form !== 'add') this.showAddWorkoutForm = false;
    if (form !== 'edit') this.showEditRunnerForm = false;
    if (form !== 'delete') this.showLogWorkoutForm = false;
  }

  // Method to navigate to the workout page
  goToWorkoutPage(): void {
    this.router.navigate(['/workout']);  // Navigate to the workout page
  }
}
















/*import { Component } from '@angular/core';
import { FormStateService } from '../../services/form-state.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Inject the FormStateService
  constructor(public formState: FormStateService) {}

  // Method to toggle Add Workout form
  toggleAddWorkoutForm(): void {
    this.formState.showAddWorkoutForm = !this.formState.showAddWorkoutForm;
    this.closeOtherForms('add');
  }

  // Method to toggle Edit Workout form
  toggleEditWorkoutForm(): void {
    this.formState.showEditWorkoutForm = !this.formState.showEditWorkoutForm;
    this.closeOtherForms('edit');
  }

  // Method to toggle Delete Workout form
  toggleDeleteWorkoutForm(): void {
    this.formState.showDeleteWorkoutForm = !this.formState.showDeleteWorkoutForm;
    this.closeOtherForms('delete');
  }

  // Close other forms when opening one form
  private closeOtherForms(form: string): void {
    if (form !== 'add') this.formState.showAddWorkoutForm = false;
    if (form !== 'edit') this.formState.showEditWorkoutForm = false;
    if (form !== 'delete') this.formState.showDeleteWorkoutForm = false;
  }
}

*/


