# --- 1. 빌드 스테이지 ---
FROM node:18-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
COPY apps/frontend/package*.json ./apps/frontend/
COPY packages/common-types/package*.json ./packages/common-types/

RUN npm install

COPY . .

RUN npm run build --workspace=ft-transcendence-frontend

# --- 2. 최종 실행 스테이지 ---
FROM node:18-alpine
WORKDIR /app

COPY --from=build /usr/src/app/apps/frontend/dist ./dist
COPY --from=build /usr/src/app/apps/frontend/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3001
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3001"]
