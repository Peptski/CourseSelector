import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from 'src/app/search-page/utils/course.model';
import { PercentagePipe } from 'src/app/search-page/utils/percentage.pipe';

@Component({
  selector: 'app-search-results-item',
  standalone: true,
  imports: [CommonModule, PercentagePipe],
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css'],
})
export class SearchResultsItemComponent implements OnInit {
  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {}
}
