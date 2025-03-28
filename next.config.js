const path = require('path')

module.exports = {
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/ua',
                permanent: true,
            },
        ]
    },
}