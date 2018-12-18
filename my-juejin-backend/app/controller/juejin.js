const Controller = require('egg').Controller

class JueJinController extends Controller{
    async fetchJuejin(){
        const ctx = this.ctx;
        console.log('-----------fetchJuejin----------');
        
        const data = await this.ctx.curl('https://timeline-merger-ms.juejin.im/v1/get_entry_by_hot?src=web&category=5562b422e4b00c57d9b94b53&limit=100',{dataType:'json'})
        let tags = {},tempTags,result={}
        let list = data.data.d.entrylist.map(item=>{
            tempTags=''
            item.tags.map(tag=>{
                tags[tag.title]?tags[tag.title]+=1:tags[tag.title]=1
                tempTags+= tag.title+'|'
            })
            return {
                commentsCount:item.commentsCount,
                title:item.title,
                collectionCount:item.collectionCount,
                viewsCount:item.viewsCount,
                summaryInfo:item.summaryInfo,
                originalUrl:item.originalUrl,
                updatedAt:item.updatedAt.slice(0,10),
                createdAt:item.createdAt.slice(0,10),
                username: item.user.username,
                tags: tempTags,
                category: '工具资源'
            }
        })
        result['list'] = this.ctx.service.juejin.fetchJuejin(list);
        let insertTag = Object.keys(tags).map(item=>{
            return {name:item,nums:tags[item]}
        })
        result['rank'] = this.ctx.service.juejin.fetchJuejinRank(insertTag);
        ctx.body = {result}
    }

    async getJuejin(){
        const ctx = this.ctx
        const result = await this.ctx.service.juejin.getJuejin(ctx.query)
        ctx.body = {result: result}
    }
}

module.exports = JueJinController