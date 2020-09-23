# simple express ip port server

This is a simple express server that returns the client's IP and port number. If you're using a VPN/proxy this might not work as intended.  
It is hosted at [mbremyk.software](https://mbremyk.software).

If you want to run the server locally, follow these steps. The server will not find your IP if accessed through localhost.  
1. [Install npm.](https://nodejs.org/en/download/)  
2. Clone the project
  ```
  git clone https://github.com/mbremyk/simple-express-ip-port-server.git
  ```
3. Enter the project folder
  ```
  cd simple-express-ip-port-server
  ```
4. Run `npm install`
5. Run `node server.js`
6. Go to http://localhost:8080
