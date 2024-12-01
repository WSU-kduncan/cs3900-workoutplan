import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import { FormsModule } from '@angular/forms';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
