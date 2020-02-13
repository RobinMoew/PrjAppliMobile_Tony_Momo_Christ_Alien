import { Injectable } from '@angular/core';
import { AlertMessageService } from '../Alert/alert-message.service';
import { RedirectService } from '../Redirect/redirect.service';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  constructor(
    public alertMessage: AlertMessageService,
    public redirect: RedirectService
  ) {}

  async ajax(request_url: string, data: object = null) {
    data = Object.assign(
      {
        sessionId: localStorage.sessionId ? localStorage.sessionId : null
      },
      data
    );
    $.ajax({
      url: 'https://localhost:8000/' + request_url,
      type: 'POST',
      data: data,
      success: result => {
        if (result.id) {
          let id = result.id;
          let email = result.email;
          localStorage.setItem('id', id);
          localStorage.setItem('email', email);
        }

        if (!result.sessionId) {
          localStorage.removeItem('sessionId');
        } else {
          localStorage.sessionId = result.sessionId;
        }

        if (result.redirect) {
          this.redirect.redirect(result.redirect);
        } else {
          this.alertMessage.presentAlert(result.message);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
