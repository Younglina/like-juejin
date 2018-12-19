const Service = require('egg').Service

class JueJinService extends Service {
    async fetchJuejin(list){
        let result;
        try{
            // await this.app.mysql.delete('juejin_hot')
            result = await this.app.mysql.insert('juejin_hot',list)
        }catch(err){
            throw err;
        }finally{
            console.log('-----------endJueJin----------');
        }
        return {result}
    }

    async fetchJuejinRank(list){
        let result;
        try{
            await this.app.mysql.delete('juejin_frontend_tags')
            result = await this.app.mysql.insert('juejin_frontend_tags',list)
        }catch(err){
            throw err;
        }finally{
            console.log('-----------endJueJinRank----------');
        }
        return {result}
    }

    async getJuejin(query){
        let result = {}
        console.log('-----------startJueJinRank----------');
        try{
        result['list']= await this.app.mysql.select('juejin_hot',{
            limit: 10,
            offset: query.offset*10,
            where: {category:query.category}
        })
        if(query.first=== 'first'){
            result['rank'] =await this.app.mysql.select('juejin_frontend_tags')
        }}catch(err){
            console.log(err);
            result['err'] = err
        }finally{
            console.log('-----------endJueJinRank----------');
        }
       
        return result 
    }

    async getJuejinCategory(){
        let result = {}
        console.log('-----------startGetJuejinCategory----------');
        try{
        result['list']= await this.app.mysql.select('juejin_categories')
        }catch(err){
            console.log(err);
            result['errorMsg'] = err
        }finally{
            console.log('-----------endGetJuejinCategory----------');
        }
       
        return result 
    }
}
module.exports = JueJinService