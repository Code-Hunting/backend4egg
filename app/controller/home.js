"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log("------", app.model);
    ctx.body = "hi, egg";
  }
}

module.exports = HomeController;
