import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  inputEmail: string;

  constructor() {}

  ngOnInit() {
    const context = this;
    $('.txtb input').on('focus', function() {
      $(this).addClass('focus');
      console.log(context.inputEmail);
    });

    $('.txtb input').on('blur', function() {
      if ($(this).val() === '') {
        $(this).removeClass('focus');
      }
    });
  }
}
