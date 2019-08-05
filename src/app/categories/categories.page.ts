import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  openQuizHtml() {
    this.router.navigateByUrl('/questions/html');
  }
  openQuizJs() {
    this.router.navigateByUrl('/questions/js');
  }
  openQuizWeb() {
    this.router.navigateByUrl('/questions/web');
  }
  openQuizPhp() {
    this.router.navigateByUrl('/questions/php');
  }
  openQuizAngular() {
    this.router.navigateByUrl('/questions/angular');
  }
  openQuizSinok() {
    this.router.navigateByUrl('/questions/sinok');
  }
 
}
