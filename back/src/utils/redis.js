const redis = require("redis");
import dotenv from "dotenv";
dotenv.config();

const redisClient = redis.createClient(process.env.REDIS_PORT);

export { redisClient };
