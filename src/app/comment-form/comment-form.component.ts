import { Component, OnInit } from '@angular/core';
import {Comment, CommentFeed} from '../models/comment';
import {FeedService} from '../services/feed.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  submitted = false;
  email: string = '';
  message: string = '';
  constructor(private feedService: FeedService) { }

  ngOnInit() {
  }

  onSubmit() {
    let comment: Comment = new CommentFeed(this.email, this.message);
    this.submitted = true;
    this.feedService.add(comment);
  }

}
