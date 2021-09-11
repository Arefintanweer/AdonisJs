import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PostsController {
  async index(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: "Hi",
      },
      {
        id: 2,
        title: "Hello",
      },
    ];
  }
  async Create(ctx: HttpContextContract) {
    return "Display a html form";
  }
  async writePost(ctx: HttpContextContract) {
    return "Handle post creation form request";
  }
  async home(ctx: HttpContextContract) {
    return "Home";
  }
}
