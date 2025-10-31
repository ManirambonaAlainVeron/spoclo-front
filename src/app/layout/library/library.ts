import { Component } from '@angular/core';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-library',
  imports: [FaIconComponent, RouterLink, FontAwesomeModule],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class Library {}
