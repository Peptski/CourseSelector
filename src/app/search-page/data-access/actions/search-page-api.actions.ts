import { createAction, props } from '@ngrx/store';
import { Course } from '../../utils/course.model';

export const apiSearchSuccess = createAction(
  '[Search API] API search success',
  props<{ courses: Course[] }>()
);
export const apiSearchFail = createAction(
  '[Search API] API search fail',
  props<{ error: string }>()
);
