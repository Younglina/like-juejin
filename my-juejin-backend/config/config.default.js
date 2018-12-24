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
                path: '',
                hostname: '0.0.0.0',
                port: 7002
            }
        },
        mysql: {
            clients: {
                prod: {
                    host: '134.175.224.127',
                    port: '3306',
                    user: 'root',
                    password: 'Wangzhiqiang.1',
                    database: 'my-data',
                    charset: 'utf8mb4'
                },
                dev: {
                    host: '127.0.0.1',
                    port: '3306',
                    user: 'root',
                    password: 'root',
                    database: 'my-local',
                    charset: 'utf8mb4'
                },
                serve: {
                    host: '127.0.0.1',
                    port: '3306',
                    user: 'root',
                    password: 'Wangzhiqiang.1',
                    database: 'my-data',
                    charset: 'utf8mb4'
                }
            }
        }
    }
}