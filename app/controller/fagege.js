'use strict';
const Controller = require('egg').Controller;
// Controller;
class FagegeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>我是程序</h1>';
  }
}
module.exports = FagegeController;
/**
 * Controller 三个作用
 * 1：提供接口
 * 2：渲染页面
 * 3：代理服务器
 */
