const serverConfig = {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 3000,
}

module.exports = serverConfig;