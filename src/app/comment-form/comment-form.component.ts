import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  submitted = false;
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let comment: Comment = new Comment(this.email, this.message);
    this.submitted = true;
  }

}
