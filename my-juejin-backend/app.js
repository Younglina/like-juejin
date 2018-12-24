module.exports = app => {
    app.beforeStart(async () => {
        const mysqlConfig = await app.config.mysql.clients.serve
        app.database = app.mysql.createInstance(mysqlConfig);
    });
};
