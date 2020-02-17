import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../services/Ajax/ajax.service';
import { QuizService } from '../services/Quiz/quiz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  constructor(
    public router: Router,
    public ajax: AjaxService,
    public quiz: QuizService
  ) {}

  ngOnInit() {
    console.log('COUCOU');
    $('#disconnect').click(() => {
      let data = {
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email')
      };
      this.ajax.ajax('logout', data);
    });

    $.ajax({
      url: 'https://localhost:8000/getThemes',
      type: 'GET',
      success: result => {
        this.quiz.themes = result.themes;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  openQuiz(themeId) {
    this.router.navigateByUrl('/questions/' + themeId);
  }
}
