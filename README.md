<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>Discord Bot with MySQL Database</h1>
    <p>This is a simple Discord bot that connects to a MySQL database and responds to user requests to display images stored in the database.</p>
    <h2>Prerequisites</h2>
<ul>
  <li>A Discord account</li>
  <li>A Discord server where you have permission to add a bot</li>
  <li>A MySQL database with at least one table that contains image URLs and corresponding IDs</li>
  <li>Node.js and npm installed on your computer</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone this repository to your local machine</li>
  <li>Install the required dependencies by running <code>npm install</code></li>
  <li>Create a <code>.env</code> file in the root directory of the project with the following variables:</li>
  <pre><code>PASSWORD=your_mysql_password
TOKEN=your_discord_bot_token
GUILD_ID=your_channel_id
CLIENT_ID=your_bot_application_id
</code></pre>
<p>Replace <code>your_mysql_password</code> with the password for your MySQL database, and <code>your_discord_bot_token</code> with the token for your Discord bot. You can obtain a bot token by creating a new bot application in the Discord developer portal.</p>
<li>Update the <code>db</code> constant in <code>index.js</code> with your MySQL database credentials:</li>
<pre><code>const db = mysql.createConnection({
host: 'your_mysql_host',
user: 'your_mysql_username',
password: process.env.PASSWORD,
database: 'your_mysql_database_name'
});
</code></pre>
<p>Replace <code>your_mysql_host</code>, <code>your_mysql_username</code>, and <code>your_mysql_database_name</code> with your MySQL database information.</p>
<li>Create a table in your MySQL database to store your images. The table should have at least two columns: <code>id</code> and <code>url</code>.</li>
<li>Insert some images into the database with their corresponding IDs.</li>
</ol>
<h2>Usage</h2>
<p>To run the bot, use the command <code>npm start</code>. The bot will connect to your Discord server and listen for user requests to display images. Users can request an image by typing <code>!show &lt;id&gt;</code> in the chat, where <code>&lt;id&gt;</code> is the ID of the image they want to display.</p>

<h2>Contributing</h2>
<p>If you have any suggestions or find any bugs, please feel free to open an issue or submit a pull request.</p>

  </body>
</html>
