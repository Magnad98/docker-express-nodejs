# docker-express-nodejs
microservice with nodejs and docker

# setup project
* npm init -> specify name, description, entry point, keywords, author
* npm install -s express
* npm install -s cors
* code . -> opens VSCode

# to run the server
* to run normally:
* node app
* to run with automatically refresh upon changes ON:
* npx nodemon app

# docker build
* docker build -t docker-node .
* docker run -p 3000:8080 -d --name nodejs-container docker-node

# docker remove container/image (via console - you can also do this via docker desktop's ui)
* docker ps -a
* docker rm <container_id>
* docker images
* docker rmi <image_id>
