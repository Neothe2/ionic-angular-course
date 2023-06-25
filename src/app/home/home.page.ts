import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Nothing will happen';
  courseName = '';
  courseRating: number | any = null;
  courseList: { name: string; rating: number }[] = [];
  invalidData: boolean = false;

  constructor(public router: Router) {}

  add() {
    if (this.courseName && this.courseRating >= 1 && this.courseRating <= 5) {
      console.log(`Name: ${this.courseName}. Name: ${this.courseRating}`);
      this.courseList.push({
        name: this.courseName,
        rating: this.courseRating,
      });
      this.courseName = '';
      this.courseRating = null;
    } else {
      this.invalidData = true;
      console.error('please enter valid values.');
    }
  }

  goToRecipes() {
    this.router.navigate(['/recipes']);
  }
}
