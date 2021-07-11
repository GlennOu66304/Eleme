module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'https://eleme4-2021.herokuapp.com/api/',
                ws: true,
                changrigin: true,
                pathRewrite: {
                    '^/api': ''
                }

            }
        }

    }
}