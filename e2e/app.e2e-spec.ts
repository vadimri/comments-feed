import { CommentsFeedPage } from './app.po';

describe('comments-feed App', () => {
  let page: CommentsFeedPage;

  beforeEach(() => {
    page = new CommentsFeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
