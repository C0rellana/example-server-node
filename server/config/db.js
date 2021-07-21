export default {
    local: {
        username: '',
        password: '',
        database: '',
        host: '',
        dialect: '',
    },
    development: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
        host: process.env.RDS_HOST,
        dialect: 'postgres',
    },
    test: {
        username: '',
        password: '',
        database: '',
        host: '',
        port: '',
        dialect: 'postgres',
    },
    production: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
        host: process.env.RDS_HOST,
        dialect: 'postgres',
    },
};
