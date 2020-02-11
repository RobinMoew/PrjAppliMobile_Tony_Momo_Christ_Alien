import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  inputEmail: string;
  inputPass: string;
  inputCPass: string;

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

    $('#signin').on('click', function() {
      $.ajax({
        url: 'https://localhost:8000/sign_in',
        type: 'POST',
        data: {
          email: context.inputEmail,
          password: context.inputPass,
          c_password: context.inputCPass
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
