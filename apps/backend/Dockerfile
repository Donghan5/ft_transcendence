FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/
COPY packages/common-types/package*.json ./packages/common-types/

RUN npm install
RUN cd apps/backend && npm install
RUN cd packages/common-types && npm install

COPY . .


# RUN npm prune --production

CMD ["node", "apps/backend/dist/main.js"]
