FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .


EXPOSE 3000

# Use a dev script if you have one, otherwise use npm start
CMD ["npm", "run", "dev"]
# If you don't have a dev script, use:
# CMD ["npm", "start"]