import Redis from 'ioredis';

const redis = new Redis({
    port: REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASSWORD
});

export default redis;