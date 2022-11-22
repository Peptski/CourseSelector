import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map, withLatestFrom, catchError, of } from 'rxjs';
import { Course } from '../../utils/course.model';
import {
  apiSearchFail,
  apiSearchSuccess,
} from '../actions/search-page-api.actions';
import { searchSubmit } from '../actions/search-page.actions';
import { selectSettings } from '../reducers/search.reducer';
import { SearchService } from '../search.service';

@Injectable()
export class SearchApiEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private searchService: SearchService
  ) {}

  loadSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchSubmit),
      withLatestFrom(this.store.select(selectSettings)),
      concatMap(([_, settings]) => {
        return this.searchService.searchCourses(settings).pipe(
          catchError((err) => {
            console.log(err);

            this.store.dispatch(apiSearchFail({ error: err }));

            return of();
          }),
          map((data: { Courses: Course[] }) =>
            apiSearchSuccess({ courses: data.Courses })
          )
        );
      })
    );
  });
}
