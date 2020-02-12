import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  inputEmail: string;
  inputPass: string;
  inputCPass: string;

  constructor(
    public router: ActivatedRoute,
    public navCtrl: NavController,
    public route: Router
  ) {}

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
      $.ajax({
        url: 'https://localhost:8000/sign_in',
        type: 'POST',
        data: {
          email: context.inputEmail,
          password: context.inputPass,
          c_password: context.inputCPass
        },
        success: result => {
          if (result.success != false) {
            this.signIn();
          } else {
            console.log(result.message);
          }
        },
        error: error => {
          console.log(error);
        }
      });
    });
  }

  signIn() {
    this.route.navigateByUrl('login');
  }
}
