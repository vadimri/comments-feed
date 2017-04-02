import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import {Observable} from 'rxjs/Observable';
import {FeedService} from '../services/feed.service';

@Component({
  selector: 'app-comments-feed',
  templateUrl: './comments-feed.component.html',
  styleUrls: ['./comments-feed.component.scss']
})

export class CommentsFeedComponent implements OnInit {
  comments: Comment[];
  constructor(private feedService: FeedService) {
  }
  ngOnInit() {
    this.feedService.getComments().subscribe(comments => {
      this.comments = [... comments];
      console.log(JSON.stringify(this.comments))
    } );
  }

}
