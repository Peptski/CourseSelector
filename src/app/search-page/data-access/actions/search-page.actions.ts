import { createAction, props } from '@ngrx/store';

export const searchSubmit = createAction('[Search Page] Submit');

export const updateCourseCode = createAction(
  '[Search Page] Update course code',
  props<{ data: String }>()
);

export const updateCourseName = createAction(
  '[Search Page] Update course name',
  props<{ data: String }>()
);

export const updateMinCredit = createAction(
  '[Search Page] Update min credit',
  props<{ data: String }>()
);

export const updateMaxCredit = createAction(
  '[Search Page] Update max credit',
  props<{ data: String }>()
);

export const updateProgram = createAction(
  '[Search Page] Update program',
  props<{ data: String }>()
);

export const updateInstitution = createAction(
  '[Search Page] Update institution',
  props<{ data: String }>()
);

export const updateStudyPeriod = createAction(
  '[Search Page] Update study period',
  props<{ data: String }>()
);

export const updateLanguage = createAction(
  '[Search Page] Update language',
  props<{ data: String }>()
);

export const updateCourseLevel = createAction(
  '[Search Page] Update course level',
  props<{ data: String }>()
);

export const updateYear = createAction(
  '[Search Page] Update year',
  props<{ data: String }>()
);

export const updateCapacity = createAction(
  '[Search Page] Update capacity',
  props<{ data: String }>()
);

export const updateSort = createAction(
  '[Search Page] Update sort',
  props<{ data: String }>()
);
