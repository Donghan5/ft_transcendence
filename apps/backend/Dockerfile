FROM node:18-slim
WORKDIR /usr/src/app

COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/
COPY packages/common-types/package*.json ./packages/common-types/

RUN npm install

COPY . .

RUN npm run build --workspace=ft-transcendence-backend

RUN cp -r /usr/src/app/apps/backend/src/database/migrations /usr/src/app/apps/backend/dist/src/database/

CMD ["node", "apps/backend/dist/src/main.js"]
