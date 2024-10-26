FROM node:18

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY prisma ./prisma
RUN npm install

COPY . .

CMD ["npm", "start"]
