import { TestBed } from '@angular/core/testing';
import { RunnerService } from './runner.service';
import { RunnerComponent } from '../pages/runner/runner.component';
import { Component } from '@angular/core';

describe('UserService', () => {
    let service: RunnerService;

beforeEach(() => {
    TestBed.configureTestingModule({});
    //imports: [RunnerComponent, RunnerService]
    service = TestBed.inject(RunnerService);
});

it('should be created', () => {
    expect(service).toBeTruthy();
});

});
