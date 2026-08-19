import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on("error", (error) => {
  console.error("Redis Error:", error);
});

export async function getRedisClient() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }

  return redisClient;
}
