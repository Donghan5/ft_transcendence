# =================== build stage
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
# install dependencies
RUN npm install typescript --save-dev

RUN npm ci
COPY . .
RUN npx tsc --outDir dist --rootDir src

# ================== runtime stage
FROM node:18-alpine

WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/server.js"]
