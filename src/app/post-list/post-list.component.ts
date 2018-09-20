import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WordpressService } from '../wordpress.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts$: Observable<any[]>;
  public pagination;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
    this.posts$.subscribe(result => {this.pagination = result.length; console.log(this.pagination)});
  }


  


  ngOnInit() {
  }

  

}
