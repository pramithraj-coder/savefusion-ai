FROM node:20

RUN apt-get update && \
    apt-get install -y ffmpeg python3 python3-pip python-is-python3 && \
    pip3 install yt-dlp --break-system-packages

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# redeploy