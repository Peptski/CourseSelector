import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSettingsComponent } from './feature/search-settings/search-settings.component';
import { SearchResultsComponent } from './feature/search-results/search-results.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, SearchSettingsComponent, SearchResultsComponent],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
