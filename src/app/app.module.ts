import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsFeedComponent } from './comments-feed/comments-feed.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { Gravatar } from 'ng2-gravatar-directive';
import { SearchPipe } from './pipes/search.pipe';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {FeedService} from './services/feed.service';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [
    AppComponent,
    CommentsFeedComponent,
    CommentsListComponent,
    CommentViewComponent,
    CommentFormComponent,
    Gravatar,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    CustomFormsModule,
    HttpModule
  ],
  providers: [ FeedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
