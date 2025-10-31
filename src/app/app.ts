import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontawesomeIcons } from './shared/font-awesome-icons';
import { Navigation } from './layout/navigation/navigation';
import { Library } from './layout/library/library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, Navigation, Library],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('spoclo-front');

  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesomeIcons();
  }

  private initFontAwesomeIcons(): void {
    this.faIconLibrary.addIcons(...fontawesomeIcons);
  }
}
