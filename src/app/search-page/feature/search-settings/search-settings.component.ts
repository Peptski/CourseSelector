import { Component, OnInit } from '@angular/core';
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
import { debounceTime, Observable } from 'rxjs';
import { Settings } from '../../utils/settings.model';
import { selectSettings } from '../../data-access/reducers/search.reducer';

@Component({
  selector: 'app-search-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.css'],
})
export class SearchSettingsComponent implements OnInit {
  settingsForm: FormGroup;
  settings$: Observable<Settings>;

  constructor(private store: Store) {
    this.settings$ = this.store.select(selectSettings);

    this.settingsForm = new FormGroup({
      CourseCode: new FormControl(''),
      CourseName: new FormControl(''),
      MinCredit: new FormControl(''),
      MaxCredit: new FormControl(''),
      Program: new FormControl(''),
      Institution: new FormControl(''),
    });
  }

  ngOnInit() {
    this.settingsForm
      .get('CourseCode')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('CourseCode', data));

    this.settingsForm
      .get('CourseName')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('CourseName', data));

    this.settingsForm
      .get('MinCredit')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('MinCredit', data));

    this.settingsForm
      .get('MaxCredit')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('MaxCredit', data));

    this.settingsForm
      .get('Program')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('Program', data));

    this.settingsForm
      .get('Institution')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((data) => this.updateSettings('Institution', data));
  }

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

      case 'CourseCode':
        this.store.dispatch(
          updateCourseCode({
            data: data,
          })
        );
        break;

      case 'CourseName':
        this.store.dispatch(
          updateCourseName({
            data: data,
          })
        );
        break;

      case 'Program':
        this.store.dispatch(
          updateProgram({
            data: data,
          })
        );
        break;

      case 'Institution':
        this.store.dispatch(
          updateInstitution({
            data: data,
          })
        );
        break;

      case 'MinCredit':
        this.store.dispatch(
          updateMinCredit({
            data: data,
          })
        );
        break;

      case 'MaxCredit':
        this.store.dispatch(
          updateMaxCredit({
            data: data,
          })
        );
        break;
    }
    this.store.dispatch(searchSubmit());
  }
}
