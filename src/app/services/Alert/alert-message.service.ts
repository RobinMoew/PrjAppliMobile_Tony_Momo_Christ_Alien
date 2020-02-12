import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  constructor(public alertController: AlertController) {}

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alerte',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
