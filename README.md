# README

No desc

## Setup

Copy `.env.example` to `.env` and configure it

## Seed

Use `npm run seed` to seed database (drop and insert test values)

## Running

Run application in development mode using `npm run dev`

# + dev tips

1. To get container's IP (host), e. g. to connect pgAdmin with postgres inside of docker engine, use

`docker inspect CONTAINER_ID  | grep IPAddress`
