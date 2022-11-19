import { Component } from '@angular/core';
import { SearchPageComponent } from './search-page/search-page.component';

@Component({
  standalone: true,
  imports: [SearchPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
