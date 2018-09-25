import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {ActivatedRoute} from "@angular/router";
import { WordpressService } from '../../services/wordpress/wordpress.service';



@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  //TODO: Find a way to save the friggin data into a variable dammit.... 

 postPage$: Observable<any[]>;

  constructor(private wp: WordpressService, private route: ActivatedRoute) {
    
    this.route.params.subscribe( params =>  console.log(params) );
  }

  ngOnInit() {
    this.fetchPage();
  }


  fetchPage() {
    this.postPage$ = this.wp.getPostPage(this.route.params)
  }



}
