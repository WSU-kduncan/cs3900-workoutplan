import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerComponent } from './runner.component';
import { RunnerService } from '../../services/runner.service';

describe('UserComponent', () => {
  let component: RunnerComponent;
  let fixture: ComponentFixture<RunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunnerComponent, RunnerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
