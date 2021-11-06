'use strict';

/* eslint-disable linebreak-style */


const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    // curl 的方法可以获取远程的数据
    // http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    // this.ctx.curl(url);
    const response = await this.ctx.curl(url);
    // console.log(response.data);// 返回的是Buffer 类型 需要转换成对象
    const data = JSON.parse(response.data);
    console.log(data.result);
    return data && data.result;
  }
  async getNewsContent(aid) {
    // 通过抓取接口返回数据
    // curl 的方法可以获取远程的数据
    // http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    // this.ctx.curl(url);
    const response = await this.ctx.curl(url);
    const data = JSON.parse(response.data); // 把Buffer类型转转换成对象

    return data.result;
  }
}

module.exports = NewsService;
