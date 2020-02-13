import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../services/Ajax/ajax.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  constructor(public router: Router, public ajax: AjaxService) {}

  ngOnInit() {
    $('#disconnect').click(() => {
      let data = {
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email')
      };
      this.ajax.ajax('logout', data);
    });
  }

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
  openQuizmath() {
    this.router.navigateByUrl('/questions/math');
  }
  openQuizhistoire() {
    this.router.navigateByUrl('/questions/histoire');
  }
  openQuizcapitale() {
    this.router.navigateByUrl('/questions/capitale');
  }
}
