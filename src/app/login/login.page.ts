import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  inputEmail: string;
  inputPass: string;

  constructor(
    public router: ActivatedRoute,
    public navCtrl: NavController,
    public route: Router,
    public alertController: AlertController
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

    $('#login_btn').on('click', () => {
      $.ajax({
        url: 'https://localhost:8000/log_in',
        type: 'POST',
        data: {
          email: context.inputEmail,
          password: context.inputPass
        },
        success: result => {
          if (result.success != false) {
            this.logIn();
          } else {
            this.presentAlert(result.message);
          }
        },
        error: error => {
          console.log(error);
        }
      });
    });
  }

  logIn() {
    this.route.navigateByUrl('categories');
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alerte',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
