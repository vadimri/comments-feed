import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comments-feed',
  templateUrl: './comments-feed.component.html',
  styleUrls: ['./comments-feed.component.scss']
})
export class CommentsFeedComponent implements OnInit {
  comments: Comment[] = [
    { email: 'vribak@gmail.com', message: 'WOW!!!' },
    { email: 'elik@bigpanda.io', message: 'hello !!!' },
    { email: 'shai@bigpanda.io', message: 'good stuff',  }
  ];
  constructor() { }

  ngOnInit() {
  }
}
