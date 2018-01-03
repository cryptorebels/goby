FROM node


MAINTAINER Genar <genar@acs.li>

COPY . /app

WORKDIR /app

RUN yarn install && yarn build

RUN yarn global add serve

ENV NODE_ENV production

ENTRYPOINT ["/app/entrypoint.sh"]
