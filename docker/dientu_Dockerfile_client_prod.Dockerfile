FROM node:24-bookworm

WORKDIR /usr/src/dientu_client

RUN corepack enable

COPY client/package.json client/yarn.lock client/.yarnrc.yml ./
COPY client/.yarn ./.yarn

RUN yarn install --immutable

COPY client .

RUN yarn build

EXPOSE 3000

CMD ["sh", "-c", "yarn start -p ${PORT:-3000} -H ${HOSTNAME:-0.0.0.0}"]
