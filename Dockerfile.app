
FROM node:18-alpine

WORKDIR /app

COPY package.json ./ 

COPY package-lock.json ./ 

RUN npm install

RUN npm install react-scripts@5.0.1 -g 

COPY . ./


# Set environment variables
ENV DBURL = "https://noventiq-exercise-db-default-rtdb.asia-southeast1.firebasedatabase.app/"

EXPOSE 3000

CMD ["npm", "start"]


