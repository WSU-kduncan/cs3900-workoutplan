

import { Component, OnInit } from '@angular/core';
import { Runner } from '../../models/runner.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RunnerService } from '../../services/runner.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-runner',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {
  runners: Runner[] = [];
  selectedRunner: Runner | null = null;
  runnerForm: FormGroup;
  isLoading = false;

  constructor(
    private readonly runnerService: RunnerService,
    private fb: FormBuilder
  ) {
    // Initialize the reactive form with validation
    this.runnerForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadRunners();
  }

  loadRunners() {
    this.runners = this.runnerService.getRunners();
  }

  selectRunner(runner: Runner) {
    this.selectedRunner = runner;
    this.runnerForm.patchValue(runner); 
  }

  async addRunner() {
    if (this.runnerForm.invalid) return;

    this.isLoading = true;
    const newRunner: Runner = this.runnerForm.value;

    this.runnerService.addRunner(newRunner);
    this.runners.length = 0;
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loadRunners();
    this.resetForm();
  }

  async deleteRunner(runner: Runner) {
    console.log(runner.id);
    this.runnerService.deleteRunner(runner.id);
    this.runners.length = 0;
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loadRunners();
  }

  async updateRunner() {
    if (this.runnerForm.invalid || !this.selectedRunner) return;

    this.isLoading = true;
    const updatedRunner: Runner = { ...this.selectedRunner, ...this.runnerForm.value };

    this.runnerService.updateRunner(updatedRunner);
    this.runners.length = 0;
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.loadRunners();
    this.resetForm();
  }

  resetForm() {
    this.runnerForm.reset({ runner_id: 0, firstName: '', lastName: '', email: '' });
    this.selectedRunner = null;
    this.isLoading = false;
  }

  get runner_id() {
    return this.runnerForm.get('id');
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }
  get firstName(){
    return this.runnerForm.get('firstName');
  }
  
  get lastName(){
    return this.runnerForm.get('lastName');
  }

  get email() {
    return this.runnerForm.get('email');
  }
  
}

