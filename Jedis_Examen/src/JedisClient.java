import redis.clients.jedis.Jedis;

public class JedisClient {
	Jedis jedis = new Jedis("localhost");
    System.out.println("Connection to server sucessfully");
    //check whether server is running or not
    System.out.println("Server is running: "+jedis.ping());
}
