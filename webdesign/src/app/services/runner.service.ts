import { Injectable } from '@angular/core';
import { Runner } from '../models/runner.model';


@Injectable({
    providedIn: 'root'
})
export class RunnerService {
private runners: Runner[] = [
    { runner_id: 1, name: 'Usain Bolt', email: 'usain.bolt@example.com' },
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
    { runner_id: 12, name: 'Tirunesh Dibaba', email: 'tirunesh.dibaba@example.com' }
];


constructor() { }

getRunners(): Runner[] {
    return this.runners;
}

getRunnerById(id: number): Runner | undefined {
    return this.runners.find((runner: Runner) => runner.runner_id === id);
}

addRunner(runner: Runner) {
    this.runners.push(runner);
}

updateRunner(runner: Runner) {
    const index: number = this.runners.findIndex(r => r.runner_id === runner.runner_id);
    if (index !== -1) {
        this.runners[index] = runner;
    }
}

deleteRunner(id: number) {
    this.runners = this.runners.filter(runner => runner.runner_id !== id);
    }
}
