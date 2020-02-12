import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../services/Ajax/ajax.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  inputEmail: string;
  inputPass: string;
  inputCPass: string;

  constructor(public ajax: AjaxService) {}

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

    $('#signin').on('click', () => {
      let data = {
        email: context.inputEmail,
        password: context.inputPass,
        c_password: context.inputCPass
      };

      this.ajax.ajax('sign_in', data, 'login');
    });
  }
}
