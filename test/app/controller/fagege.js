'use strict';
const { app } = require('egg-mock/bootstrap');
describe('fagege -index', () => {
  it('fagege index page', () => {
    return app.httpRequest()
      .get('/fagege')
      .expect(200)
      .expect('<h1>我是程序</h1>');
  });
  it('fagege getKnowledgge', async () => {
    return app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>一大群知识向你走来</h1>');
  });
});
