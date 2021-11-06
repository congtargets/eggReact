'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // console.log('controller');
  // console.log(controller);
  router.get('/', controller.home.index);
  // router.get('/', controller.home.index);
  router.get('/fage1', controller.home.fage);
  router.get('/fagechengx', controller.fagege.index);
  router.get('/getGirls', controller.fagege.getGirls);
  router.get('/getGirl', controller.fagege.getGirl);
  router.get('/getGirl2/:name', controller.fagege.getGirl2);
  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.post('/add', controller.fagege.add);
};
