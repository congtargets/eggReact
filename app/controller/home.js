'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello,world';
  }
  async fage() {
    const { ctx } = this;
    ctx.body = '<p>发哥</p>';
  }
}

module.exports = HomeController;
