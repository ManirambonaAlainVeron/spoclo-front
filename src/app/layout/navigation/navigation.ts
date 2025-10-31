import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, FaIconComponent, FontAwesomeModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {}
