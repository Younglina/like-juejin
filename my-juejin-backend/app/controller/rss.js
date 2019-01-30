const Controller = require('egg').Controller

class RssController extends Controller{
   
    async getMainTag(){
        const ctx = this.ctx
        const result = await ctx.service.rss.getMainTag()
        ctx.body = {tags: result}
    }

    async getJuejinCategory(){
        const ctx = this.ctx
        const result = await this.ctx.service.rss.getJuejinCategory()
        ctx.body = {result: result}
    }
}

module.exports = RssController