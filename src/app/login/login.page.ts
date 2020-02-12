import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../services/Ajax/ajax.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  inputEmail: string;
  inputPass: string;

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

    $('#login_btn').on('click', () => {
      let data = {
        email: context.inputEmail,
        password: context.inputPass
      };

      this.ajax.ajax('log_in', data);
    });
  }
}
