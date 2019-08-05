import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() {}

  ionViewDidEnter() {
    let son = $('audio');
    let start = $('#start');

    son.attr('src', '../../assets/audio/2_100bpm.wav');
    start.click(() => {
      son.attr('src', '');
    });
  }
}
