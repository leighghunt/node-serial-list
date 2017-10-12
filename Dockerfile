FROM resin/raspberry-pi-node:6
ENTRYPOINT []


RUN node --version
RUN npm --version

WORKDIR /root/

# Install app dependencies
COPY package.json .

RUN npm install --production

COPY list.js/ .

EXPOSE 80
CMD ["node", "list.js"]
