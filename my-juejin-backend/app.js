module.exports = app => {
    app.beforeStart(async () => {
        const mysqlConfig = await app.config.mysql.clients.dev
        console.log(mysqlConfig);
        
        app.database = app.mysql.createInstance(mysqlConfig);
    });
};
