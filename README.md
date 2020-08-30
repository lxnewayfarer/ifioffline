# README

No desccription yet

## Setup

Copy `.env.example` to `.env` and configure it (not using now)

To install necessary packages use `npm install`

## DB seed

Use `npm run seed` to seed database (drop and insert test values)

## Running

Run docker containers (Postgres, pgAdmin4) using `docker-compose up`

Run application in development mode using `npm run dev`

### + dev tips

1. To get container's IP (host), e. g. to connect pgAdmin with postgres inside of docker engine, use

`docker inspect CONTAINER_ID  | grep IPAddress`
