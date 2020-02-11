import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  inputEmail: string;
  inputPass: string;

  constructor() {}

  ngOnInit() {
    const context = this;
    $('.txtb input').on('focus', function() {
      $(this).addClass('focus');
    });

    $('.txtb input').on('blur', function() {
      if ($(this).val() === '') {
        $(this).removeClass('focus');
      }
    });

    $('#login').on('click', function() {
      console.log(context.inputEmail);
      console.log(context.inputPass);

      $.ajax({
        url: 'https://localhost:8000/log_in',
        type: 'POST',
        data: {
          email: context.inputEmail,
          password: context.inputPass
        },
        success: result => {
          console.log(result.message);
        },
        error: error => {
          console.log(error);
        }
      });
    });
  }
}
