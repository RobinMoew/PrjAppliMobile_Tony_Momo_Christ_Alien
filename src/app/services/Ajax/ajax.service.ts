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

  async ajax(request_url: string, data: object) {
    $.ajax({
      url: 'https://localhost:8000/' + request_url,
      type: 'POST',
      data: data,
      success: result => {
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
