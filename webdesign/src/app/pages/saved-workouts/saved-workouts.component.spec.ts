import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedWorkoutsComponent } from './saved-workouts.component';
import { WorkoutService } from '../../services/workout.service';

describe('SavedWorkoutsComponent', () => {
  let component: SavedWorkoutsComponent;
  let fixture: ComponentFixture<SavedWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedWorkoutsComponent, WorkoutService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

