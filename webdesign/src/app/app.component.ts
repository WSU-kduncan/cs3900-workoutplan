import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterOutlet, RouterLink} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule, FormsModule, ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}