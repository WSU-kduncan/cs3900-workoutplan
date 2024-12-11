

import { Injectable } from '@angular/core';
import { Runner } from '../models/runner.model';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class RunnerService {
private runners: Runner[] = [
    /*{ runner_id: 1, name: 'Usain Bolt', email: 'usain.bolt@example.com' },
    { runner_id: 2, name: 'Mo Farah', email: 'mo.farah@example.com' },
    { runner_id: 3, name: 'Eliud Kipchoge', email: 'eliud.kipchoge@example.com' },
    { runner_id: 4, name: 'Allyson Felix', email: 'allyson.felix@example.com' },
    { runner_id: 5, name: 'Hicham El Guerrouj', email: 'hicham.elguerrouj@example.com' },
    { runner_id: 6, name: 'Paula Radcliffe', email: 'paula.radcliffe@example.com' },
    { runner_id: 7, name: 'Haile Gebrselassie', email: 'haile.gebrselassie@example.com' },
    { runner_id: 8, name: 'Shelly-Ann Fraser-Pryce', email: 'shellyann.fraserpryce@example.com' },
    { runner_id: 9, name: 'Sebastian Coe', email: 'sebastian.coe@example.com' },
    { runner_id: 10, name: 'Florence Griffith-Joyner', email: 'florence.griffithjoyner@example.com' },
    { runner_id: 11, name: 'Carl Lewis', email: 'carl.lewis@example.com' },
    { runner_id: 12, name: 'Tirunesh Dibaba', email: 'tirunesh.dibaba@example.com' } */
];


constructor(private http: HttpClient) { }

getRunners(): Runner[] {
    
        //return this.runners;
        this.runners.length = 0;
        this.http.get('http://localhost:8080/workout-service/runners').subscribe({
            next:(res: any) => {
                res['data'].forEach((element: Runner) => {
                    this.runners.push(element);
                });
    
            }, error:(err) => {
                console.error(err);
    
            }, complete:() => {
    
            }
            
        }); 
        return this.runners;
        
    }
    

getRunnerById(id: number): Runner | undefined {
    return this.runners.find((runner: Runner) => runner.id === id);
}

addRunner(runner: Runner) {
    this.runners.push(runner);
     //return this.runners;
     this.http.post('http://localhost:8080/workout-service/runners', runner).subscribe({
        next:(res) => {
            console.log(res);
            

        }, error:(err) => {
            console.error(err);

        }, complete:() => {

        }
        
    }); 
}

updateRunner(runner: Runner) {
    this.http.put('http://localhost:8080/workout-service/runners/' + runner.id, runner).subscribe({
        next:(res) => {
            console.log(res);
            

        }, error:(err) => {
            console.error(err);

        }, complete:() => {

        }
    });
}

deleteRunner(id: number) {
    // this.runners = this.runners.filter(runner => runner.runner_id !== id);
    // }
    var test: string = 'http://localhost:8080/workout-service/runners/' + id;
    console.log(test);
    this.http.delete(test).subscribe({
        next:(res) => {
            console.log(res);
            

        }, error:(err) => {
            console.error(err);

        }, complete:() => {

        }
    });
}
}

