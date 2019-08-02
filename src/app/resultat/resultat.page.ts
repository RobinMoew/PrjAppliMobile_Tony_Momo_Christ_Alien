import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss']
})
export class ResultatPage implements OnInit {
  constructor(public route: ActivatedRoute) {}

  score: any;

  ngOnInit() {
    this.score = this.route.snapshot.paramMap.get('score');
    this.score = parseInt(this.score);
    let d_score = $('#score');
    let d_bg = $('.container');

    if (this.score >= 4) {
      d_score.css('color', '#00ac00');
      d_bg.addClass('bg_won');
    } else if (this.score === 3) {
      d_score.css('color', 'orange');
      d_bg.addClass('bg_med');
    } else {
      d_score.css('color', 'red');
      d_bg.addClass('bg_loose');
    }
  }
}
