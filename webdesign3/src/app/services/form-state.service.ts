import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormStateService {
    showAddWorkoutForm = false;
    showEditWorkoutForm = false;
    showDeleteWorkoutForm = false;
}
