FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm ci

RUN npm run build

FROM node:18-slim

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build

EXPOSE 3001

CMD ["serve", "-s", "build", "-l", "3001"]