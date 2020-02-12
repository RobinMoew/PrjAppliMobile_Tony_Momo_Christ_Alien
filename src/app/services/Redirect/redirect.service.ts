import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  constructor(
    public router: ActivatedRoute,
    public navCtrl: NavController,
    public route: Router
  ) {}

  redirect(url: string) {
    this.route.navigateByUrl(url);
  }
}
