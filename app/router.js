'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log('controller');
  console.log(controller);
  router.get('/', controller.home.index);
  // router.get('/', controller.home.index);
  router.get('/fage1', controller.home.fage);
  router.get('/fagechengx', controller.fagege.index);
};
