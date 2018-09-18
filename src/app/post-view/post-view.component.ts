import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WordpressService } from '../wordpress.service';



@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {


  postSlug$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.postSlug$ = this.wp.getPostPage();
  }

  ngOnInit() {
  }

}
