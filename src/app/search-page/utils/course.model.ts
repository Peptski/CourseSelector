export class Course {
  constructor(
    public Code: String,
    public Name: String,
    public Credit: String,
    public Institution: String,
    public CourseInfo: String,
    public Canvas: String,
    public PassRate: number,
    public AverageGrade: number,
    public SampleSize: number
  ) {}
}
