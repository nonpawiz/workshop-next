const connection = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nonpawiz'
  }
});

export const testConnection = async () => {
  try {
    // Execute a raw query to check the connection
    const result = await connection("users").seclect();
    // console.log('Connection successfully');
    return { 'Connection successfully': result };
    console.log('Result:', result[0][0].solution); // Access the result if needed
  } catch (error) {
    // console.error('Connection failed:', error);
    return { 'Connection failed': error };
  }
  finally {
    return { 'destroy': true };
    // Close the database connection
    connection.destroy();
  }
}

// testConnection()

export default connection