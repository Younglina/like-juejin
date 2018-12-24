const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUser(){
        const ctx = this.ctx;
        const userId = ctx.query.id;
        const user = await ctx.service.user.getUser(userId);
        ctx.body = user
    }

    async addUser(){
        const ctx = this.ctx
        const result = await ctx.service.user.addUser(ctx.request.body);
        ctx.body = result
    }

    async setUser(){
        const ctx = this.ctx
        const result = await ctx.service.user.setUser(ctx.request.body.data)
        ctx.body = result
    }

    async addActive(){
        const ctx = this.ctx
        const result = await ctx.service.user.addActive(ctx.request.body.data);
        ctx.body = result
    }
}

module.exports = UserController;