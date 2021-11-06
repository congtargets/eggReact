'use strict';
const { Controller } = require('egg');

class NewsController extends Controller {
  async index() {
    // this.ctx.body = 'shouye';// 可以直接显示到页面上


    // 异步
    // await this.ctx.render('index');


    const list = await this.ctx.service.news.getNewsList();
    // const list = await this.ctx.service.news;
    // console.log(await this.service.news);
    console.log('list');
    console.log(list);
    await this.ctx.render('news', {
      list,
    });

  }
  async content() {
    // 获取get传值
    const aid = this.ctx.query;
    console.log(aid);
    const list = await this.ctx.service.news.getNewsContent(aid.aid);
    // const list = await this.ctx.service.news;
    // console.log(await this.service.news);
    console.log('list');
    console.log(list);
    await this.ctx.render('newscontent', {
      list: list[0],
    });
  }
}

module.exports = NewsController;
