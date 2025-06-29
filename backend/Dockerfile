FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production
# ci == clean install --only=production == install production dependency

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
