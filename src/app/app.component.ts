import { Component } from '@angular/core';

import * as AOS from 'aos';
import { Observable } from 'rxjs';

import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-myproject';
  public currentPage;
  public isLobby;

  initializeLobbyArea() {
    if (this.currentPage = "lobby"){
      this.isLobby = true;
    }else{
      this.isLobby = false;
    }
  }

  ngOnChanges() {
    this.initializeLobbyArea();
  }

  ngOnInit() {
    AOS.init();
  }
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params =>  this.currentPage = params );
}


}
