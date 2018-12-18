module.exports = (appInfo) => {
    return {
        keys: `Izaya`,
        security: {
            csrf: {
                enable: false,
                headerName: 'csrf-token',
            },
        },
        cors: {
            origin: '*',
        },
        cluster: {
            listen: {
                path:'',
                hostname: '0.0.0.0',
                port: 7002
            }
        },
        mysql: {
            client: {
                host: '127.0.0.1',
                port: '3306',
                user: 'root',
                password: 'root',
                database: 'my-local',
                charset : 'utf8mb4'
            }
        }
    }
}