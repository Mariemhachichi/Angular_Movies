import { Component } from '@angular/core';
import { Film, FilMS } from '../models/film';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  films: Film[] = FilMS;
}
