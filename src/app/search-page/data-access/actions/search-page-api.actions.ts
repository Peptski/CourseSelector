import { createAction, props } from '@ngrx/store';
import { Course } from '../../utils/course.model';

export const apiSearchSuccess = createAction(
  '[Search API] API search success',
  props<{ data: Promise<String> }>()
);
export const apiSearchFail = createAction(
  '[Search API] API search fail',
  props<{ error: string }>()
);

export const apiPassDataSuccess = createAction(
  '[Search API] API pass data success',
  props<{ data: Number[] }>()
);
export const apiPassDataFail = createAction(
  '[Search API] API pass data fail',
  props<{ error: string }>()
);
