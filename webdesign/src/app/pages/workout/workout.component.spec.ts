import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutComponent } from './workout.component';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';

describe('WorkoutComponent', () => {
    let component: WorkoutComponent;
    let fixture: ComponentFixture<WorkoutComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [FormsModule], 
        declarations: [WorkoutComponent],
        providers: [WorkoutService], 
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('should create the component', () => {
    expect(component).toBeTruthy();
});

it('should show an error when adding a workout with numbers', () => {
    component.newWorkoutType = 'Run123';
    component.addWorkout();  
    fixture.detectChanges();  

    const errorMessage = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();  
    expect(errorMessage.textContent).toContain('Workout type cannot contain numbers.');
});

it('should not add workout when the name contains numbers', () => {
    const initialWorkoutsCount = component.workouts.length;
    component.newWorkoutType = 'Run123';
    component.addWorkout();
    fixture.detectChanges();

    expect(component.workouts.length).toBe(initialWorkoutsCount);  
});

it('should successfully add workout when name is valid', () => {
    const initialWorkoutsCount = component.workouts.length;
    component.newWorkoutType = 'Run';
    component.addWorkout();
    fixture.detectChanges();

    expect(component.workouts.length).toBe(initialWorkoutsCount + 1);  
});
});








/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComponent } from './workout.component';

describe('WorkoutComponent', () => {
    let component: WorkoutComponent;
    let fixture: ComponentFixture<WorkoutComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invalid form when empty', () =>{
        expect(component.workouts);
    }); 
});

*/