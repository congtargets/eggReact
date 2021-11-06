/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635945151631_6788';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // ejs解析
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.security = {// 安全配置
    csrf: {// 伪跨域请求攻击
      enable: false, // 学习阶段暂时关闭 用test.http发起请求,关掉就不会被拦截了
    },
  };
  config.cluster = {// egg-scripts 改变端口
    listen: {
      port: 7002,
      hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    // path: '/var/run/egg.sock',
    },
  };

  config.api = 'http://www.phonegap100.com/';
  return {
    ...config,
    ...userConfig,
  };
};
