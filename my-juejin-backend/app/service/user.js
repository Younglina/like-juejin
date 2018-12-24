const Service = require('egg').Service;

class UserService extends Service {

    async getUser(uid) {
        const user = await this.app.database.query(`
            select info.*,count(act.user_id) active_nums from user_info info
            left join juejin_active act on act.user_id = info.id
            where info.id = ?`, [uid]
        )
        return { user };
    }

    async getUserPins(uid) {
        const pins = await this.app.database.select('juejin_active', {
            where: { user_id: uid }
        });
        return { pins };
    }

    async addUser(user) {
        const result = await this.app.database.insert('user', user);
        const updateSuccess = result.affectedRows === 1
        return { result: { success: updateSuccess, message: result.message } };
    }

    async addActive(active) {
        active['create_time'] = this.app.database.literals.now
        const result = await this.app.database.insert('juejin_active', active);
        const updateSuccess = result.affectedRows === 1
        return { result: { success: updateSuccess, message: result.message } };
    }

    async setUser(user) {
        let returnResult = { result: { success: true, msg: '修改成功' } }
        user.modifiedAt = this.app.database.literals.now
        const result = await this.app.database.update('user_info', user);
        const updateSuccess = result.affectedRows === 1
        if (!updateSuccess) { returnResult.result.msg = '修改失败'; returnResult.result.success = false; }
        return returnResult;
    }
}

module.exports = UserService