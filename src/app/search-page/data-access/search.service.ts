import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../utils/settings.model';
import { Course } from '../utils/course.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  searchCourses(settings: Settings) {
    console.log('Sent');

    let query =
      'https://student.portal.chalmers.se/sv/chalmersstudier/minkursinformation/sidor/sokkurs.aspx?flag=1&search_ac_year=2022/2023&batch_size=1400';

    if (settings.CourseCode)
      query += `&search_course_code=${settings.CourseCode}`;

    if (settings.CourseName)
      query += `&search_course_name_sv=${settings.CourseName}`;

    //if (settings.CourseName) query += `&search_course_name_sv=${settings.CourseName}`;

    if (settings.Program) query += `&search_course_owner=${settings.Program}`;

    if (settings.Institution) query += `&search_dept=${settings.Institution}`;

    if (settings.StudyPeriod)
      query += `&search_start_sp=${settings.StudyPeriod}`;

    if (settings.CourseLevel)
      query += `&search_edu_level=${settings.CourseLevel}`;

    if (settings.MinCredit) query += `&search_credit_min=${settings.MinCredit}`;

    if (settings.MaxCredit) query += `&search_credit_max=${settings.MaxCredit}`;

    if (settings.Language) query += `&search_lang=${settings.Language}`;

    if (settings.Year) query += `&search_grade=${settings.Year}`;

    if (settings.Capacity) query += `&search_max_amount=${settings.Capacity}`;

    if (settings.Sort) query += `&sortorder=${settings.Sort}`;

    const head = { headers: { URL: query } };

    return this.http.get<{ Courses: Course[] }>(
      'https://courseapi-369222.ey.r.appspot.com/search',
      head
    );
  }
}
