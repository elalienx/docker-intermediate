# Docker Intermediate 🥈

This project test how to combine a production build of React using Vite and serve on a real web server using Nginx and deploy to the cloud using AWS EC2

The configuration was done following these tutorials:

- [How to use React or Vue with Vite and Docker](https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l): To allow Vite to play nicely with Docker, just like Create React App does by default. Note: See `vite.config.js` to see the changes made.
- [Docker 101](https://youtu.be/gM2cWo1DWIk?si=-xMsIGmHX34jkQo9&t=777): To know how to configure the Docker file to compile the React project using Vite and to served the compiled (static files) using Nginx.

Result: [Amazon Web Services EC2 instance](http://16.171.59.197:8000/)

To learn about the React project itself check the Space Flights original repository [here](https://github.com/elalienx/space-launch-flights)
