import {Injectable} from '@angular/core';
import {Comment} from '../models/comment';
import 'rxjs/add/operator/map';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedService {
  commentsUrl: string = 'http://localhost:3001';
  private options: RequestOptions;

  private comments$:BehaviorSubject<Comment[]> = new BehaviorSubject([]);

  constructor(private http: Http) {
    this.options = new RequestOptions({
      headers: new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      })
    });
  }

  add(comment: Comment): void {
    this.addComment(comment).then(comments => this.comments$.next([... comments]));
    // this.comments$.next(this.comments);
  }

  getComments() {
    this.fetch().then(comments => this.comments$.next([... comments]));
    return this.comments$.asObservable();
  }

  private addComment (comment: Comment) : Promise<Comment[]> {
    // todo: validate comment object
    const url = `${this.commentsUrl}/feeds`;
    return this.http.post(url, {comment: comment }, this.options)
      .toPromise()
      .then(FeedService.extractData);
  }

  private fetch(): Promise<Comment[]> {
    const url = `${this.commentsUrl}/feeds`;
    return this.http.get(url, this.options)
      .toPromise()
      .then(FeedService.extractData);
  }

  private static extractData(res: Response) {
    let body = res.json();
    return body.feeds as Comment[] || [];
  }


}
