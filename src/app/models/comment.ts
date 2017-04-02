export class Comment {
  email: string;
  message: string;
}

export class CommentFeed implements Comment{
  constructor(
    public email: string = '',
    public message: string = '',
    public createdAt: number = Date.now()
  ) {}
}
