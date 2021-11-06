'use strict';
const Controller = require('egg').Controller;
// Controller;
class FagegeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>我是程序</h1>';
  }
  async getGirls() { // 模拟请求 五秒后渲染页面
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>一大群知识向你走来</h1>');
      }, 3000);

    });
  }
  // 自由传参模式
  async getGirl() {
    const ctx = this.ctx;
    ctx.body = ctx.query;
  }
  // 严格传参模式
  async getGirl2() {
    const ctx = this.ctx;
    ctx.body = 'getGirl2' + ctx.params.name;
  }

  // post 请求
  async add() {
    const ctx = this.ctx;
    console.log('ctx.request.body');
    console.log(await ctx.request);
    const data = await ctx.request.body;
    // ctx.body = 'asds';
    ctx.body = {
      status: 200,
      data,
    };
  }
}
module.exports = FagegeController;
/**
 * Controller 三个作用
 * 1：提供接口
 * 2：渲染页面
 * 3：代理服务器
 */
