FROM node:18-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/
COPY packages/common-types/package*.json ./packages/common-types/

RUN npm install

COPY . .

RUN npm run build --workspace=ft-transcendence-backend

CMD ["node", "apps/backend/dist/src/main.js"]
