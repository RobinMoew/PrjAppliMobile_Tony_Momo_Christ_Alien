import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { NavController } from '@ionic/angular';
import { QuizService } from '../services/Quiz/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss']
})
export class QuestionsPage implements OnInit {
  constructor(
    public router: ActivatedRoute,
    public navCtrl: NavController,
    public route: Router,
    public quiz: QuizService
  ) {
    this.tableauGeneral = quiz.themes;
  }

  tableauGeneral = [];
  theme: Array<object>;
  themeId = 0;
  rand = 0;
  nbQuestion = 1;
  score = 0;
  randoms = [];
  value = 1;
  interval: any;

  getRandomQuestionId(theme) {
    return Math.floor(Math.random() * theme.questions);
  }

  getRandomQuiz(theme) {
    const questionId = this.getRandomQuestionId(theme);

    if (this.alreadyShow(questionId)) {
      this.getRandomQuiz(theme);
      return;
    }

    this.rand = questionId;
  }

  alreadyShow(questionId) {
    let show = false;
    for (let i = 0; i < this.randoms.length; i++) {
      if (this.randoms[i] === questionId) {
        show = true;
      }
    }
    return show;
  }

  timer() {
    this.interval = setInterval(() => {
      this.value -= 0.0005;
      if (this.value <= 0.001) {
        this.value = 1;
        if (this.nbQuestion < 5) {
          this.nbQuestion++;
          this.getRandomQuiz(this.getTheme());
        } else {
          clearInterval(this.interval);
          this.route.navigateByUrl('/resultat/' + this.score);
        }
      }
    }, 10);
  }

  ngOnInit() {
    this.themeId = parseInt(this.router.snapshot.paramMap.get('idTheme')) - 1;
    this.timer();
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
  }

  getTheme() {
    return this.tableauGeneral[this.themeId];
  }

  onReponseClick($event: any) {
    const reponse = $event.srcElement.innerText; // Valeur du bouton cliqué
    const trueRep = this.tableauGeneral[this.themeId][this.rand].goodAnswer;
    this.randoms.push(this.rand);
    this.value = 1;

    if (reponse === trueRep) {
      this.score += 1;
    }

    if (this.nbQuestion < 5) {
      this.nbQuestion++;
      this.getRandomQuiz(this.getTheme());
    } else {
      this.route.navigateByUrl('/resultat/' + this.score);
    }

    if (this.nbQuestion > 5) {
      clearInterval(this.interval);
    }
  }
}
