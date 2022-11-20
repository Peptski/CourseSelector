import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  updateCapacity,
  updateCourseLevel,
  updateLanguage,
  updateSort,
  updateStudyPeriod,
  updateYear,
} from '../../data-access/actions/search-page.actions';

@Component({
  selector: 'app-search-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.css'],
})
export class SearchSettingsComponent {
  constructor(private store: Store) {}

  updateSettings(field: String, data: String) {
    switch (field) {
      case 'StudyPeriod':
        this.store.dispatch(updateStudyPeriod({ data: data }));
        break;

      case 'Language':
        this.store.dispatch(updateLanguage({ data: data }));
        break;

      case 'CourseLevel':
        this.store.dispatch(updateCourseLevel({ data: data }));
        break;

      case 'Year':
        this.store.dispatch(updateYear({ data: data }));
        break;

      case 'Capacity':
        this.store.dispatch(updateCapacity({ data: data }));
        break;

      case 'Sort':
        this.store.dispatch(updateSort({ data: data }));
        break;
    }
  }
}
