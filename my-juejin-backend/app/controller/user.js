const Controller = require('egg').Controller;

class UserController extends Controller {
    /**
     * 获取用户信息
     * params: 用户信息
     */
    async getUser(){
        const ctx = this.ctx;
        const userId = ctx.query.id;
        const user = await ctx.service.user.getUser(userId);
        ctx.body = user
    }

    /**
     * 添加用户
     * params: 用户信息
     */
    async addUser(){
        const ctx = this.ctx
        const result = await ctx.service.user.addUser(ctx.request.body);
        ctx.body = result
    }

    /**
     * 编辑用户
     * params: 用户信息
     */
    async setUser(){
        const ctx = this.ctx
        const result = await ctx.service.user.setUser(ctx.request.body.data)
        ctx.body = result
    }

    /**
     * 发布沸点
     * params: 沸点信息
     */
    async addActive(){
        const ctx = this.ctx
        const result = await ctx.service.user.addActive(ctx.request.body.data);
        ctx.body = result
    }

    /**
     * 获取用户沸点
     * params: 用户id
     */
    async getUserPins(){
        const ctx = this.ctx
        const userId = ctx.query.id;
        const result = await ctx.service.user.getUserPins(userId);
        ctx.body = result
    }
}

module.exports = UserController;