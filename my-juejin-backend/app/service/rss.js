const Service = require('egg').Service;

class RssService extends Service {

    async getMainTag() {
        const tags = await this.app.database.select('main_tag',{
            orders:[['root','desc']]
        })
        return tags;
    }
}
module.exports = RssService