import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
import { NavController } from "@ionic/angular";
import { interval } from "rxjs";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.page.html",
  styleUrls: ["./questions.page.scss"]
})
export class QuestionsPage implements OnInit {
  constructor(
    public router: ActivatedRoute,
    public navCtrl: NavController,
    public route: Router
  ) {}
  tableauGeneral = [];

  theme: Array<object>;
  themeId = 0;
  rand = 0;
  nbQuestion = 1;
  score = 0;
  randoms = [];
  value = 1;
  interval: any;

  /*   getRandomTheme() {
    return this.tableauGeneral[
      Math.floor(Math.random() * this.tableauGeneral.length)
    ];
  }

  getRandomThemeId() {
    return Math.floor(Math.random() * this.tableauGeneral.length);
  } */

  getRandomQuestionId(theme: Array<object>) {
    return Math.floor(Math.random() * theme.length);
  }

  getRandomQuiz(theme: Array<object>) {
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
          this.getRandomQuiz(this.theme);
        } else {
          clearInterval(this.interval);
          this.route.navigateByUrl("/resultat/" + this.score);
        }
      }
    }, 10);
  }

  recupDataJson() {
    let context = this;
    $.ajax({
      url: "../../assets/themes.json",
      success: function success(result) {
        context.startQuizz(result);
      },
      error: function error(result) {
        console.log(result.responseText);
      }
    });
  }

  startQuizz(themes) {
    if (typeof themes == "string") {
      this.tableauGeneral = JSON.parse(themes);
    } else {
      this.tableauGeneral = themes;
    }

    const themeName = this.router.snapshot.paramMap.get("theme");
    const titre = $("#cat_quest");
    this.timer();

    switch (themeName) {
      case "html":
        titre.html(`HTML / CSS`);
        this.theme = this.tableauGeneral[0];
        this.themeId = 0;
        this.getRandomQuiz(this.theme);
        break;
      case "php":
        titre.html(`PHP`);
        this.theme = this.tableauGeneral[1];
        this.themeId = 1;
        this.getRandomQuiz(this.theme);
        break;
      case "web":
        titre.html(`Histoire du Web`);
        this.theme = this.tableauGeneral[2];
        this.themeId = 2;
        this.getRandomQuiz(this.theme);
        break;
      case "js":
        titre.html(`JavaScript`);
        this.theme = this.tableauGeneral[3];
        this.themeId = 3;
        this.getRandomQuiz(this.theme);
        break;
      case "angular":
        titre.html(`Angular`);
        this.theme = this.tableauGeneral[4];
        this.themeId = 4;
        this.getRandomQuiz(this.theme);
        break;
      case "sinok":
        titre.html(`Geek`);
        this.theme = this.tableauGeneral[5];
        this.themeId = 5;
        this.getRandomQuiz(this.theme);
        break;
        case "math":
        titre.html(`Math`);
        this.theme = this.tableauGeneral[6];
        this.themeId = 6;
        this.getRandomQuiz(this.theme);
        break;
        case "histoire":
        titre.html(`Histoire`);
        this.theme = this.tableauGeneral[7];
        this.themeId = 7;
        this.getRandomQuiz(this.theme);
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.recupDataJson();
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
  }

  onReponseClick($event: any) {
    const reponse = $event.srcElement.innerText; // Valeur du bouton cliqué
    const trueRep = this.tableauGeneral[this.themeId][this.rand].reponse;
    this.randoms.push(this.rand);
    this.value = 1;

    if (reponse === trueRep) {
      this.score += 1;
    }

    if (this.nbQuestion < 5) {
      this.nbQuestion++;
      this.getRandomQuiz(this.theme);
    } else {
      this.route.navigateByUrl("/resultat/" + this.score);
    }

    if (this.nbQuestion > 5) {
      clearInterval(this.interval);
    }
  }
}
