import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../services/Ajax/ajax.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(public ajax: AjaxService) { }

  ngOnInit() {
    $("#envoyer").click(() => {
      let data = $('#field');
      console.log(data[0].children[0].files);
      
      //this.ajax.ajax('log_in', data);
    });
    

  }

}
