import { ComponentsInAngularPage } from './app.po';

describe('components-in-angular App', function() {
  let page: ComponentsInAngularPage;

  beforeEach(() => {
    page = new ComponentsInAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
