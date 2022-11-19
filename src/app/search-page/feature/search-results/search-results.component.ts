import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { Course } from '../../utils/course.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, SearchResultsItemComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  items: Course[] = [
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
