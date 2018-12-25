module.exports = app => {
    app.beforeStart(async () => {
        const mysqlConfig = await app.config.mysql.clients.prod
        console.log(mysqlConfig);
        
        app.database = app.mysql.createInstance(mysqlConfig);
    });
};
