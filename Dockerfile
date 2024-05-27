FROM node:19 as builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile && \
    yarn build

ENV TZ=Asia/Dhaka
EXPOSE 3000
CMD ["yarn", "start"]