import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Course } from '../../utils/course.model';
import { Settings } from '../../utils/settings.model';
import { apiSearchSuccess } from '../actions/search-page-api.actions';
import {
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
} from '../actions/search-page.actions';

export interface AppState {
  search: State;
}

export interface State {
  courses: Course[];
  settings: Settings;
}

export const initialState: State = {
  courses: [
    {
      Code: 'ACE126',
      Name: 'Fastighetsmarknad och -värde',
      Credit: '7,5',
      Institution: '20',
      CourseInfo:
        'https://student.portal.chalmers.se/sv/chalmersstudier/minkursinformation/sidor/sokkurs.aspx?course_id=34399&parsergrp=3',
      Canvas:
        'https://chalmers.instructure.com/courses/19957/assignments/syllabus',
      PassRate: 0.5084396871140388,
      AverageGrade: 3.4623481781376517,
      SampleSize: 2429,
    },
  ],
  settings: {
    CourseCode: '',
    CourseName: '',
    MinCredit: '',
    MaxCredit: '',
    Program: '',
    Institution: '',
    CourseInfo: '',
    StudyPeriod: '',
    Language: '',
    CourseLevel: '',
    Year: '',
    Capacity: '',
    Sort: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(updateCourseCode, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        CourseCode:
          state.settings.CourseCode === action.data ? '' : action.data,
      },
    };
  }),
  on(updateCourseName, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        CourseName:
          state.settings.CourseName === action.data ? '' : action.data,
      },
    };
  }),
  on(updateMinCredit, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        MinCredit: state.settings.MinCredit === action.data ? '' : action.data,
      },
    };
  }),
  on(updateMaxCredit, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        MaxCredit: state.settings.MaxCredit === action.data ? '' : action.data,
      },
    };
  }),
  on(updateProgram, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Program: state.settings.Program === action.data ? '' : action.data,
      },
    };
  }),
  on(updateInstitution, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Institution:
          state.settings.Institution === action.data ? '' : action.data,
      },
    };
  }),
  on(updateStudyPeriod, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        StudyPeriod:
          state.settings.StudyPeriod === action.data ? '' : action.data,
      },
    };
  }),
  on(updateLanguage, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Language: state.settings.Language === action.data ? '' : action.data,
      },
    };
  }),
  on(updateCourseLevel, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        CourseLevel:
          state.settings.CourseLevel === action.data ? '' : action.data,
      },
    };
  }),
  on(updateYear, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Year: state.settings.Year === action.data ? '' : action.data,
      },
    };
  }),
  on(updateCapacity, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Capacity: state.settings.Capacity === action.data ? '' : action.data,
      },
    };
  }),
  on(updateSort, (state, action) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        Sort: state.settings.Sort === action.data ? '' : action.data,
      },
    };
  }),
  on(apiSearchSuccess, (state, action) => {
    console.log(action);
    return { ...state };
  })
);

export const selectSearchPageState = createFeatureSelector<State>('search');

export const selectCourses = createSelector(
  selectSearchPageState,
  (searchPageState) => searchPageState.courses
);

export const selectSettings = createSelector(
  selectSearchPageState,
  (searchPageState) => searchPageState.settings
);
