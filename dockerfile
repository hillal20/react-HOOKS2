from node:alpine 

workdir "/newApp"

copy  package.json .

run  npm install 

copy . .

cmd ["npm", "start"]

expose 8081