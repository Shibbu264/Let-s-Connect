FROM node:21

WORKDIR /Google-meet-clone

COPY . .

RUN npm install --force
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]