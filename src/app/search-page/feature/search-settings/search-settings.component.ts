import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  searchSubmit,
  updateCapacity,
  updateCourseCode,
  updateCourseLevel,
  updateCourseName,
  updateInstitution,
  updateLanguage,
  updateMaxCredit,
  updateMinCredit,
  updateProgram,
  updateSort,
  updateStudyPeriod,
  updateYear,
} from '../../data-access/actions/search-page.actions';

@Component({
  selector: 'app-search-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.css'],
})
export class SearchSettingsComponent {
  settingsForm: FormGroup;

  constructor(private store: Store) {
    this.settingsForm = new FormGroup({
      CourseCode: new FormControl(''),
      CourseName: new FormControl(''),
      MinCredit: new FormControl(''),
      MaxCredit: new FormControl(''),
      Program: new FormControl(''),
      Institution: new FormControl(''),
    });
  }

  updateSettings(field: String, data: String | Event) {
    switch (field) {
      case 'StudyPeriod':
        this.store.dispatch(updateStudyPeriod({ data: data as String }));
        break;

      case 'Language':
        this.store.dispatch(updateLanguage({ data: data as String }));
        break;

      case 'CourseLevel':
        this.store.dispatch(updateCourseLevel({ data: <String>data }));
        break;

      case 'Year':
        this.store.dispatch(updateYear({ data: <String>data }));
        break;

      case 'Capacity':
        this.store.dispatch(updateCapacity({ data: <String>data }));
        break;

      case 'Sort':
        this.store.dispatch(updateSort({ data: <String>data }));
        break;

      case 'CourseCode':
        this.store.dispatch(
          updateCourseCode({
            data: (<HTMLInputElement>(<Event>data).target).value,
          })
        );
        break;

      case 'CourseName':
        this.store.dispatch(
          updateCourseName({
            data: (<HTMLInputElement>(<Event>data).target).value,
          })
        );
        break;

      case 'Program':
        this.store.dispatch(
          updateProgram({
            data: (<HTMLSelectElement>(<Event>data).target).value,
          })
        );
        break;

      case 'Institution':
        this.store.dispatch(
          updateInstitution({
            data: (<HTMLSelectElement>(<Event>data).target).value,
          })
        );
        break;

      case 'MinCredit':
        this.store.dispatch(
          updateMinCredit({
            data: (<HTMLInputElement>(<Event>data).target).value,
          })
        );
        break;

      case 'MaxCredit':
        this.store.dispatch(
          updateMaxCredit({
            data: (<HTMLInputElement>(<Event>data).target).value,
          })
        );
        break;
    }
    this.store.dispatch(searchSubmit());
  }
}
