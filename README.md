#Entri challenge project
    + docker pull redis
    + docker run --name redis13 -p 6379:6379 -d redis redis-server --appendonly no
    + depois dos passos node.js execute: docker exec -it redis13 redis-cli

    # Node.js
    + npm install
    + to execute the project do node app.js in the project folder in some terminal 

    