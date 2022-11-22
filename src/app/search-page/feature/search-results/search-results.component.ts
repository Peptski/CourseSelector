import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { Course } from '../../utils/course.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCourses } from '../../data-access/reducers/search.reducer';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultsItemComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  courses$: Observable<Course[]>;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectCourses);
  }
}
