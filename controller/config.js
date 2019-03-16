var config = {
development: {
    db: {
        host:    'localhost',
        user:    'princy',
        password:'12345',
        database: 'food'
    },
    server: {
        host:   'localhost',
        port:   '3000'
    }
},
production: {
    //mysql connection settings
    db: {
        host: 'localhost',
        user:   'princy',
        password:'12345',
        database:     'food'
    },
    //server details
    server: {
        host:   'localhost',
        port:   '3000'
    }
}
};
module.exports = config;