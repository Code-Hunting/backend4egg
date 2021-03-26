/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1616659662863_3129";

  // add your middleware config here
  config.middleware = [];

  //sequelize
  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "system",
    username: "root",
    password: "123456",
    exclude: "index.js",
  };

  //临时禁用
  config.security= {
    csrf: {
      enable: false,
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
