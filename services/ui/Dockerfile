FROM node:18.12.1 as builder

WORKDIR /app
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm ci
COPY . /app
# Build create source map that can be used in monitoring services like Sentry/New relic
RUN npm run build

FROM node:18.12.1
WORKDIR /app
ENV NODE_ENV production
ENV NEXTAUTH_URL_INTERNAL=http://127.0.0.1:3000

RUN apt-get update && apt-get install -y \
  curl \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app /app

EXPOSE 3000
CMD ["/bin/sh", "-c", "./build_and_start.sh"]

HEALTHCHECK --start-period=240s CMD curl -s -o /dev/null http://127.0.0.1:3000/api/healthcheck
