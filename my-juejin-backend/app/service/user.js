const Service = require('egg').Service;

class UserService extends Service {
    async getUser(uid) {
        const user = await this.app.mysql.select('user_info', {
            where: { id: uid },
            columns: ['avator', 'name', 'introduce', 'post', 'company', 'page']
        });
        return { user };
    }

    async addUser(user) {
        const result = await this.app.mysql.insert('user', user);
        const updateSuccess = result.affectedRows === 1
        return { result: { success: updateSuccess, message: result.message } };
    }

    async setUser(user) {
        let returnResult = { result: { success: true, msg: '修改成功' } }
        user.modifiedAt = this.app.mysql.literals.now
        const result = await this.app.mysql.update('user_info', user);
        const updateSuccess = result.affectedRows === 1
        if (!updateSuccess) { returnResult.result.msg = '修改失败'; returnResult.result.success = false; }
        return returnResult;
    }
}

module.exports = UserService