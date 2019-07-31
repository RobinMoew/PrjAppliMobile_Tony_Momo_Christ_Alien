import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
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
