import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../models/comment';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(values: Comment[] = [], str: string): any[] {
    values = values || [];
    return values.filter(item => item.email.indexOf(str) >= 0 || item.message.indexOf(str) >= 0);
  }
}
